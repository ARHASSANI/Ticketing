import { defineAsyncComponent } from "vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
    meta: { layout: "AuthLayout" },
  },
  {
    path: "/register",
    component: () => import("pages/RegisterPage.vue"),
    meta: { layout: "AuthLayout" },
  },
  {
    path: "/dashboard",
    component: () => import("pages/DashboardPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets",
    component: () => import("pages/TicketsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets/:id",
    component: () => import("pages/TicketDetailPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets/create",
    component: () => import("pages/CreateTicketPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users",
    component: () => import("pages/UsersPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/roles",
    component: () => import("pages/RolesPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/reports",
    component: () => import("pages/ReportsPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    component: () => import("pages/ProfilePage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export default routes;
