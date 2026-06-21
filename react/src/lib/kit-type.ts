/**
 * The kit's structural type, injected at build by vite.config.ts from the
 * repo's uikit.json (`type` field). It decides which page set the app renders:
 *   - "app"        → landing · pricing · dashboard · components
 *   - "ecommerce"  → storefront · products · product · cart · components
 * Defaults to "app" if the define is somehow absent.
 */
declare const __UIKIT_TYPE__: string | undefined;

export type KitType = "app" | "ecommerce";

export const KIT_TYPE: KitType =
  typeof __UIKIT_TYPE__ !== "undefined" && __UIKIT_TYPE__ === "ecommerce" ? "ecommerce" : "app";

export const isCommerce = KIT_TYPE === "ecommerce";
