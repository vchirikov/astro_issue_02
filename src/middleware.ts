import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const response = await next('/');
  console.log('requested url', ctx.request.url, 'response from / handler', response);
  return response;
};