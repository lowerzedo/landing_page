import { copyFile, mkdir, readdir, rename } from "node:fs/promises";
import { join } from "node:path";

const buildRoot = "dist";
const clientRoot = join(buildRoot, "client");

await mkdir(clientRoot, { recursive: true });

for (const entry of await readdir(buildRoot, { withFileTypes: true })) {
  if (["client", "server", ".openai"].includes(entry.name)) {
    continue;
  }

  await rename(join(buildRoot, entry.name), join(clientRoot, entry.name));
}

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await copyFile("worker/index.js", "dist/server/index.js");
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");
