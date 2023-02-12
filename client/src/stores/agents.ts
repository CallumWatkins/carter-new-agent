import { ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import type AgentData from "@/models/AgentData";

export const useAgentsStore = defineStore("agents", () => {
  const agents: Ref<AgentData[]> = ref([]);

  return { agents };
});
