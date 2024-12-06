// All components mapping with path for internal routes

import { lazy } from "react";
import CreateProduct from "../features/product/createProduct";
import AllProducts from "../features/product/allProduct";
import CountStock from "../features/product/countStock";
import CategoryPage from "../features/product/category";
import PrintLabels from "../features/product/printLabels";
import UnitPage from "../features/product/unit";
import BrandPage from "../features/product/brand";
import DetailProduct from "../features/product/allProduct/detailProduct";
import EditProduct from "../features/product/allProduct/editProduct";
import Warehouse from "../features/warehouse/warehouse";
import CreateTransfer from "../features/warehouse/createTransfer";
import AllTransfer from "../features/warehouse/allTransfer";
import DetailTransfer from "../features/warehouse/detailTransfer";
import EditTransfer from "../features/warehouse/editTransfer";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));
const Blank = lazy(() => import("../pages/protected/Blank"));
const Charts = lazy(() => import("../pages/protected/Charts"));
const Leads = lazy(() => import("../pages/protected/Leads"));
const Integration = lazy(() => import("../pages/protected/Integration"));
const Calendar = lazy(() => import("../pages/protected/Calendar"));
const Team = lazy(() => import("../pages/protected/Team"));
const Transactions = lazy(() => import("../pages/protected/Transactions"));
const Bills = lazy(() => import("../pages/protected/Bills"));
const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const DocFeatures = lazy(() => import("../pages/DocFeatures"));
const DocComponents = lazy(() => import("../pages/DocComponents"));

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/welcome", // the url
    component: Welcome, // view rendered
  },
  {
    path: "/product-createProduct",
    component: CreateProduct,
  },
  {
    path: "/product-allProduct",
    component: AllProducts,
  },
  {
    path: "/product-allProduct/detailProduct",
    component: DetailProduct,
  },
  {
    path: "/product-allProduct/editProduct",
    component: EditProduct,
  },
  {
    path: "/product-countStock",
    component: CountStock,
  },
  {
    path: "/product-category",
    component: CategoryPage,
  },
  {
    path: "/product-printLabels",
    component: PrintLabels,
  },
  {
    path: "/product-unit",
    component: UnitPage,
  },
  {
    path: "/product-brand",
    component: BrandPage,
  },
  {
    path: "/warehouse-warehouse",
    component: Warehouse,
  },
  {
    path: "/warehouse-createTransfer",
    component: CreateTransfer,
  },
  {
    path: "/warehouse-allTransfer",
    component: AllTransfer,
  },
  {
    path: "/warehouse-detailTransfer",
    component: DetailTransfer,
  },
  {
    path: "/warehouse-editTransfer",
    component: EditTransfer,
  },
  {
    path: "/settings-team",
    component: Team,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/transactions",
    component: Transactions,
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
  {
    path: "/settings-billing",
    component: Bills,
  },
  {
    path: "/getting-started",
    component: GettingStarted,
  },
  {
    path: "/features",
    component: DocFeatures,
  },
  {
    path: "/components",
    component: DocComponents,
  },
  {
    path: "/integration",
    component: Integration,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
