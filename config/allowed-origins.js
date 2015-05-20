// Allowed:
// gocardless.com
// staging.gocardless.com
// gocardless.fr
// 127.0.0.1
// 192.168.0.1

export const allowedOrigins = [
  /localhost/,
  /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/,
  /(.+\.)?gocardless\.\w+/,
];

export function isOriginAllowed(origin) {
  return allowedOrigins.some((matcher) => matcher.test(origin));
}
