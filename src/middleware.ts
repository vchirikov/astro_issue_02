import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const match = ctx.request.url.match(/\/(ru|foo)(\/.*)$/);
  if (match) {
    const rewriteTo = match[2];
    const response = await ctx.rewrite(rewriteTo);
    console.log('requested url', ctx.request.url, 'response from rewritten url', rewriteTo, response);
    return response;
  }
  const response = await next();
  console.log('requested url', ctx.request.url, 'response from default handler', response);
  return response;
};