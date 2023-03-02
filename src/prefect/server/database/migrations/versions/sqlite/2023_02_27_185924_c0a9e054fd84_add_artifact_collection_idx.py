"""Add artifact_collection indexes

Revision ID: c0a9e054fd84
Revises: b9aafc3ab936
Create Date: 2023-02-27 18:59:24.443953

"""
from alembic import op

# revision identifiers, used by Alembic.
revision = "c0a9e054fd84"
down_revision = "b9aafc3ab936"
branch_labels = None
depends_on = None


def upgrade():
    op.execute("PRAGMA foreign_keys=OFF")

    with op.batch_alter_table("artifact_collection", schema=None) as batch_op:
        batch_op.create_index(
            "ix_artifact_collection__latest_id", ["latest_id"], unique=False
        )
        batch_op.create_index(
            batch_op.f("ix_artifact_collection__updated"), ["updated"], unique=False
        )
        batch_op.create_index("uq_artifact_collection__key", ["key"], unique=True)

    op.execute("PRAGMA foreign_keys=ON")


def downgrade():
    op.execute("PRAGMA foreign_keys=OFF")

    with op.batch_alter_table("artifact_collection", schema=None) as batch_op:
        batch_op.drop_index("uq_artifact_collection__key")
        batch_op.drop_index(batch_op.f("ix_artifact_collection__updated"))
        batch_op.drop_index("ix_artifact_collection__latest_id")

    op.execute("PRAGMA foreign_keys=ON")