#!/usr/bin/env bash
set -e

PYTHON=${PYTHON:-.venv/bin/python}
if [ ! -x "$PYTHON" ]; then
  PYTHON=$(command -v python3)
fi

$PYTHON -m datamodel_code_generator \
  --input ../shared/schemas/ \
  --input-file-type jsonschema \
  --output app/models/ \
  --target-python-version 3.11 \
  --use-standard-collections

# cleanup bogus aliases
sed -i "s/[a-z_]*int_aliased[0-9]*/int/g" app/models/*.py
sed -i "s/[a-z_]*str_aliased[0-9]*/str/g" app/models/*.py
sed -i "s/[a-z_]*bool_aliased[0-9]*/bool/g" app/models/*.py