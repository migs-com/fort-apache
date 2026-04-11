/**
 * Mock responses for `next/font/google` when the build environment cannot
 * reach fonts.googleapis.com (sandboxed CI, for example).
 *
 * Enabled by setting `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=./scripts/next-font-mocks.js`
 * before running `next build` or `next dev`.
 *
 * Real Google Fonts requests on Vercel / production environments are NOT
 * affected and will fetch the real font files as usual.
 */

const cormorant =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap';
const dmSans =
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap';

function face(family, weight, url) {
  return `/* latin */
@font-face {
  font-family: '${family}';
  font-style: normal;
  font-weight: ${weight};
  font-display: swap;
  src: url(${url}) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`;
}

module.exports = {
  [cormorant]: [
    face('Cormorant Garamond', 400, 'https://fonts.gstatic.com/s/cormorantgaramond/mock-400.woff2'),
    face('Cormorant Garamond', 500, 'https://fonts.gstatic.com/s/cormorantgaramond/mock-500.woff2'),
    face('Cormorant Garamond', 600, 'https://fonts.gstatic.com/s/cormorantgaramond/mock-600.woff2'),
    face('Cormorant Garamond', 700, 'https://fonts.gstatic.com/s/cormorantgaramond/mock-700.woff2'),
  ].join('\n\n'),
  [dmSans]: [
    face('DM Sans', '100 1000', 'https://fonts.gstatic.com/s/dmsans/mock-variable.woff2'),
  ].join('\n\n'),
};
