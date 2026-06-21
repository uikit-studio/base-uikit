import { useI18n } from "../i18n";
import { PageStub } from "./stub";

/** Ecommerce storefront home. REPLACE with a full, on-brand storefront. */
export function Storefront() {
  const { t } = useI18n();
  return <PageStub label={t.canvas.commercePages.storefront} />;
}
