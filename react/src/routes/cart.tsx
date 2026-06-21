import { useI18n } from "../i18n";
import { PageStub } from "./stub";

/** Cart / checkout. REPLACE with cart lines · summary · local payment options. */
export function Cart() {
  const { t } = useI18n();
  return <PageStub label={t.canvas.commercePages.cart} />;
}
