import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, type RouteObject, RouterProvider } from "react-router-dom";
import "./app.css";
import { I18nProvider } from "./i18n";
import { isCommerce } from "./lib/kit-type";
import { Layout } from "./routes/layout";
import { Landing } from "./routes/landing";
import { Pricing } from "./routes/pricing";
import { Dashboard } from "./routes/dashboard";
import { Showcase } from "./routes/showcase";
import { Storefront } from "./routes/storefront";
import { Products } from "./routes/products";
import { Product } from "./routes/product";
import { Cart } from "./routes/cart";

// Classic SaaS page set.
const appRoutes: RouteObject[] = [
  { path: "/", element: <Landing /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/components", element: <Showcase /> },
];

// Ecommerce storefront page set (swaps the dashboard for store pages).
const commerceRoutes: RouteObject[] = [
  { path: "/", element: <Storefront /> },
  { path: "/products", element: <Products /> },
  { path: "/product", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/components", element: <Showcase /> },
];

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: isCommerce ? commerceRoutes : appRoutes,
    },
  ],
  // Works at "/" in dev and under any subpath (e.g. /demos/your-kit/) when built
  // with `vite build --base=/demos/your-kit/`.
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </React.StrictMode>,
);
