import pendulum
import pytest

from prefect.server import models, schemas
from prefect.settings import PREFECT_EXPERIMENTAL_ENABLE_ARTIFACTS
from prefect.testing.cli import invoke_and_assert


@pytest.fixture(autouse=True)
def auto_enable_artifacts(enable_artifacts):
    """
    Enable workers for testing
    """
    assert PREFECT_EXPERIMENTAL_ENABLE_ARTIFACTS
    # Import to register worker CLI
    import prefect.experimental.cli.artifact  # noqa


@pytest.fixture
async def artifact(session):
    artifact_schema = schemas.core.Artifact(
        key="voltaic", data=1, metadata_={"description": "opens many doors"}
    )
    model = (
        await models.artifacts.create_artifact(
            session=session, artifact=artifact_schema
        ),
    )

    await session.commit()

    return model[0]


@pytest.fixture
async def artifacts(session):
    artifact1_schema = schemas.core.Artifact(
        key="voltaic", data=1, description="opens many doors", type="table"
    )
    artifact2_schema = schemas.core.Artifact(
        key="voltaic", data=2, description="opens many doors", type="table"
    )
    artifact3_schema = schemas.core.Artifact(
        key="lotus", data=3, description="opens many doors", type="markdown"
    )

    model1 = await models.artifacts.create_artifact(
        session=session, artifact=artifact1_schema
    )
    model2 = await models.artifacts.create_artifact(
        session=session, artifact=artifact2_schema
    )
    model3 = await models.artifacts.create_artifact(
        session=session, artifact=artifact3_schema
    )

    await session.commit()

    return [model1, model2, model3]


def test_listing_artifacts_when_none_exist():
    invoke_and_assert(
        ["artifact", "ls"],
        expected_output_contains=f"""
            ┏━━━━┳━━━━━┳━━━━━━┳━━━━━━━━━┓
            ┃ ID ┃ Key ┃ Type ┃ Updated ┃
            ┡━━━━╇━━━━━╇━━━━━━╇━━━━━━━━━┩
            └────┴─────┴──────┴─────────┘
        """,
    )


def test_listing_artifacts_after_creating_artifacts(artifact):
    invoke_and_assert(
        ["artifact", "ls"],
        expected_output_contains=f"""
            ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━┳━━━━━━━━━━━━━━━━━━━┓
            ┃                                   ID ┃ Key     ┃ Type ┃ Updated           ┃
            ┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━╇━━━━━━━━━━━━━━━━━━━┩
            │ {artifact.id} │ {artifact.key} │ {artifact.type} │ {pendulum.instance(artifact.updated).diff_for_humans()} │
            └──────────────────────────────────────┴─────────┴──────┴───────────────────┘
            """,
    )


def test_listing_artifacts_lists_only_latest_versions(artifacts):
    expected_output = (
        f"{artifacts[2].id}",
        f"{artifacts[1].id}",
    )

    invoke_and_assert(
        ["artifact", "ls"],
        expected_output_contains=expected_output,
        expected_code=0,
    )
