import { useI18n } from "../i18n";
import { PageStub } from "./stub";

/** Product detail / preview. REPLACE with gallery · variants · add-to-cart. */
export function Product() {
  const { t } = useI18n();
  return <PageStub label={t.canvas.commercePages.product} />;
}
