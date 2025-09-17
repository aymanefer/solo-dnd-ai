// frontend/scripts/bundle-schemas.mjs
import $RefParser from "@apidevtools/json-schema-ref-parser";
import fs from "fs";
import path from "path";

async function bundle() {
  const input = path.resolve(process.cwd(), "../shared/schemas/game_state.schema.json");
  const output = path.resolve(process.cwd(), "src/tmp/game_state.bundled.json");

  const schema = await $RefParser.bundle(input);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(schema, null, 2));

  console.log("✅ Bundled schema written to", output);
}

bundle().catch(err => {
  console.error(err);
  process.exit(1);
});
