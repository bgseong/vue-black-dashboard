import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const Login = () => import(/* webpackChunkName: "common" */"@/pages/Login.vue");
const LoadInfo = () => import(/* webpackChunkName: "common" */"@/pages/LoadInfo.vue");

const requireAuth = () => (to, from, next) => {
  console.log(sessionStorage.getItem("token"));
  if (sessionStorage.getItem("token")) {
    return next();
  }
  next('/login');
};



const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "loadInfo",
        name: "loadInfo",
        component: LoadInfo
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: requireAuth()
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        beforeEnter: requireAuth()
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
        beforeEnter: requireAuth()
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
        beforeEnter: requireAuth()
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
        beforeEnter: requireAuth()
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
        beforeEnter: requireAuth()
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
        beforeEnter: requireAuth()
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
