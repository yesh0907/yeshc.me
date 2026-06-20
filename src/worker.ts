const DEPLOYMENT_PATH = '/v2';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === DEPLOYMENT_PATH) {
      url.pathname = `${DEPLOYMENT_PATH}/`;
      return Response.redirect(url, 308);
    }

    if (!url.pathname.startsWith(`${DEPLOYMENT_PATH}/`)) {
      return new Response('Not found', { status: 404 });
    }

    url.pathname = url.pathname.slice(DEPLOYMENT_PATH.length) || '/';
    return env.ASSETS.fetch(new Request(url, request));
  },
};
