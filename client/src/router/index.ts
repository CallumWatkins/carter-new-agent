import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AgentView from "../views/AgentView.vue";
import NewAgentIdentityView from "../views/new-agent/NewAgentIdentityView.vue";
import NewAgentPersonalityView from "../views/new-agent/NewAgentPersonalityView.vue";
import NewAgentUsageView from "@/views/new-agent/NewAgentUsageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/agent/:id",
      name: "agent",
      component: AgentView,
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
        {
          path: "personality",
          name: "new-agent-personality",
          component: NewAgentPersonalityView,
        },
        {
          path: "usage",
          name: "new-agent-usage",
          component: NewAgentUsageView,
        },
      ],
    },
  ],
});

export default router;
