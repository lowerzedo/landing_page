export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || !["GET", "HEAD"].includes(request.method)) {
      return response;
    }

    const url = new URL(request.url);

    if (url.pathname.includes(".")) {
      return response;
    }

    // The asset service redirects /index.html to /. Fetch the canonical root
    // internally so the browser keeps its requested client-side route.
    return env.ASSETS.fetch(new Request(new URL("/", url), request));
  },
};
