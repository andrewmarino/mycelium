/**
 * Basic authorization for request header to Kirby REST API.
 */
export const auth = Buffer.from(
  ['root@mycelium.app', 'password'].join(':')
).toString('base64');
