import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (_ctx, next) => {
  const response = await next('/');
  console.log('expected response.status is', response.status);
  return response;
};