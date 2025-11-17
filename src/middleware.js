import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(({ request, redirect, locals }, next) => {
  const header = request.headers.get('Accept-Language') ?? 'en';

  console.log(request.headers);
  const lang = header.split(',')[0].slice(0, 2);
  locals.lang = ['en', 'es'].includes(lang) ? lang : 'en';
  return next();
});
