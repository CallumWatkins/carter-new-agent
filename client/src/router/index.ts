import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewAgentIdentityView from "../views/new-agent/NewAgentIdentityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new-agent",
      name: "new-agent",
      component: () => import("../views/NewAgentView.vue"),
      redirect: "/new-agent/identity",
      children: [
        {
          path: "identity",
          name: "new-agent-identity",
          component: NewAgentIdentityView,
        },
      ],
    },
  ],
});

export default router;
