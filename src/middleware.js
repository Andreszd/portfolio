export const onRequest = ({ request, redirect, locals }, next) => {
  const header = request.headers.get('accept-language') ?? 'en';
  const lang = header.split(',')[0].slice(0, 2);
  locals.lang = ['en', 'es'].includes(lang) ? lang : 'en';
  return next();
};
