// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const SalesReport = lazy(() => import('../pages/protected/SalesReport'))
const ProductReport = lazy(() => import('../pages/protected/ProductReport'))
const PSalesReport = lazy(() => import('../pages/protected/PSalesReport'))
const PurchaseReport = lazy(() => import('../pages/protected/PurchaseReport'))
const StockReport = lazy(() => import('../pages/protected/StockReport'))
const SupplierReport = lazy(() => import('../pages/protected/SupplierReport'))
const QtyAlert = lazy(() => import('../pages/protected/QtyAlert'))
const CustomerReport = lazy(() => import('../pages/protected/CustomerReport'))
const BestCustomer = lazy(() => import('../pages/protected/BestCustomer'))
const TopSell = lazy(() => import('../pages/protected/TopSell'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/SalesReport',
    component: SalesReport,
  },
  {
    path: '/ProductReport',
    component: ProductReport,
  },
  {
    path: '/PSalesReport',
    component: PSalesReport,
  },
  {
    path: '/PurchaseReport',
    component: PurchaseReport,
  },
  {
    path: '/StockReport',
    component: StockReport,
  },
  {
    path: '/SupplierReport',
    component: SupplierReport,
  },
  {
    path: '/QtyAlert',
    component: QtyAlert,
  },
  {
    path: '/CustomerReport',
    component: CustomerReport,
  },
  {
    path: '/BestCustomer',
    component: BestCustomer,
  },
  {
    path: '/TopSell',
    component: TopSell,
  },
]

export default routes
