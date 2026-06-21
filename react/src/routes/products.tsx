import { useI18n } from "../i18n";
import { PageStub } from "./stub";

/** Product listing — search + filters + grid. REPLACE with the real catalog. */
export function Products() {
  const { t } = useI18n();
  return <PageStub label={t.canvas.commercePages.products} />;
}
