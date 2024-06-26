import "astro/astro-jsx";
declare namespace astroHTML.JSX {
  Element = HTMLElement
}
// See https://stackoverflow.com/a/75543975 and https://github.com/ota-meshi/eslint-plugin-astro/issues/168#issuecomment-1439480332
// See https://github.com/withastro/astro/blob/4d13cf031b2e4242e0055b48c09a80d69b9ed15d/packages/astro/astro-jsx.d.ts#L34-L37
declare global {
  type Element = HTMLElement;
  namespace JSX {
    // type Element = astroHTML.JSX.Element // We want to use this, but it is defined as any.
    type Element = HTMLElement;
    // type IntrinsicElements = astroHTML.JSX.IntrinsicElements;
  }
}
