import assert from "node:assert/strict";
import test from "node:test";
import worker from "./index.js";

const shell = '<html><div id="root"></div></html>';

// Reproduce the host's canonical HTML redirect, which Vite does not apply.
const env = {
  ASSETS: {
    async fetch(request) {
      const { pathname } = new URL(request.url);
      if (pathname === "/index.html") {
        return new Response(null, { status: 307, headers: { Location: "/" } });
      }
      if (["GET", "HEAD"].includes(request.method)) {
        if (pathname === "/") {
          return new Response(request.method === "HEAD" ? null : shell, {
            headers: { "Content-Type": "text/html" },
          });
        }
        if (pathname === "/assets/app.js") {
          return new Response("export default true", {
            headers: { "Content-Type": "text/javascript" },
          });
        }
      }
      return new Response(null, { status: 404 });
    },
  },
};

for (const path of [
  "/guides",
  "/guides/",
  "/guides/how-to-track-expenses",
  "/guides/where-does-your-money-go",
  "/guides/budget-categories",
  "/guides/weekly-vs-monthly-budgeting?source=shared",
]) {
  test(`${path} serves the app without redirecting to the homepage`, async () => {
    const response = await worker.fetch(new Request(`https://syncflo.test${path}`), env);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Location"), null);
    assert.equal(await response.text(), shell);
  });
}

test("HEAD supports guide links without a redirect or response body", async () => {
  const response = await worker.fetch(new Request("https://syncflo.test/guides", { method: "HEAD" }), env);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Location"), null);
  assert.equal(await response.text(), "");
});

test("existing assets retain their original content type and body", async () => {
  const response = await worker.fetch(new Request("https://syncflo.test/assets/app.js"), env);
  assert.equal(response.headers.get("Content-Type"), "text/javascript");
  assert.equal(await response.text(), "export default true");
});

test("missing files and non-read requests do not receive the app shell", async () => {
  for (const [path, method] of [["/assets/missing.js", "GET"], ["/guides", "POST"]]) {
    const response = await worker.fetch(new Request(`https://syncflo.test${path}`, { method }), env);
    assert.equal(response.status, 404);
    assert.equal(await response.text(), "");
  }
});
