#!/usr/bin/env bash
set -e

.venv/bin/python -m datamodel_code_generator \
  --input ../shared/schemas/ \
  --input-file-type jsonschema \
  --output app/models/

# cleanup bogus aliases
sed -i "s/[a-z_]*int_aliased[0-9]*/int/g" app/models/*.py
sed -i "s/[a-z_]*str_aliased[0-9]*/str/g" app/models/*.py
sed -i "s/[a-z_]*bool_aliased[0-9]*/bool/g" app/models/*.py