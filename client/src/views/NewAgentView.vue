<script setup lang="ts">
import type AgentData from "@/models/AgentData";
import { watch, type Ref } from "vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useAgentsStore } from "@/stores/agents";

const router = useRouter();
const route = useRoute();

const flowRoutes = router
  .getRoutes()
  .find((r) => r.name === "new-agent")!.children;

const currentFlowViewIndex = ref(-1);
const transitionName = ref("");

watch(
  route,
  () => {
    currentFlowViewIndex.value = flowRoutes.findIndex(
      (r) => r.name === route.name
    );
  },
  { immediate: true }
);

const newAgentData: Ref<AgentData> = ref({
  id: uuidv4(),
  created: new Date(),
  name: "",
  gender: "",
  personality: [],
  useCase: [],
  backstory: [],
});

const canProceed = ref(false);

function cancel() {
  router.push({ name: "home" });
}

function previousFlowView() {
  transitionName.value = "slide-fade-inline-previous";
  router.push({ name: flowRoutes[currentFlowViewIndex.value - 1].name });
}

function nextFlowView() {
  transitionName.value = "slide-fade-inline-next";
  router.push({ name: flowRoutes[currentFlowViewIndex.value + 1].name });
}

async function finish() {
  try {
    await axios.post("http://localhost:8000/new-agent", newAgentData.value);
    const agentsStore = useAgentsStore();
    agentsStore.agents.push(newAgentData.value);
    router.push({
      name: "agent",
      params: { id: newAgentData.value.id },
    });
  } catch (e) {
    console.error("Request failed", e);
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div class="block">
          <h1 class="title is-3 mb-6">New Agent</h1>
          <RouterView
            v-slot="{ Component }"
            :new-agent-data="newAgentData"
            @change="(done: boolean) => canProceed = done"
          >
            <Transition :name="transitionName" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </div>
        <div class="block spacer"></div>
        <div class="block flow-buttons field is-grouped">
          <p class="control">
            <button
              v-if="currentFlowViewIndex === 0"
              class="button is-outlined is-light"
              @click="cancel"
            >
              Cancel
            </button>
            <button
              v-else
              class="button is-outlined is-light"
              @click="previousFlowView"
            >
              Back
            </button>
          </p>
          <p class="control">
            <button
              v-if="currentFlowViewIndex === flowRoutes.length - 1"
              class="button is-primary"
              @click="finish"
            >
              Finish
            </button>
            <button
              v-else
              class="button is-primary"
              :disabled="!canProceed"
              @click="nextFlowView"
            >
              Next
            </button>
          </p>
        </div>
        <progress
          class="progress"
          :value="currentFlowViewIndex + 1"
          :max="flowRoutes.length"
        ></progress>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.slide-fade-inline-previous-enter-active,
.slide-fade-inline-previous-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.slide-fade-inline-previous-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-fade-inline-previous-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-inline-next-enter-active,
.slide-fade-inline-next-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.slide-fade-inline-next-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-inline-next-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.title {
  font-variant: small-caps;
  margin-top: var(--progress-bar-height);
}

.container {
  display: flex;
  justify-content: center;
}

.box {
  --progress-bar-height: 10px;

  min-height: 600px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex: 1;
  background-color: #303030;
  max-width: 700px;
  padding: 2rem;
  position: relative;
  overflow: clip;
  box-shadow: 0px 0px 20px 0px hsla(0 0% 0% / 0.3);

  progress {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: var(--progress-bar-height);
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #444;

    &::-moz-progress-bar {
      transition: width 0.4s ease-in-out;
      background: linear-gradient(
        to right,
        hsl(282, 50%, 38%) 0%,
        hsl(225, 97%, 61%) 100%
      );
    }

    &::-webkit-progress-bar {
      background: transparent;
    }

    &::-webkit-progress-value {
      transition: width 0.4s ease-in-out;
      background: linear-gradient(
        to right,
        hsl(282, 50%, 38%) 0%,
        hsl(225, 97%, 61%) 100%
      );
    }
  }
}

.flow-buttons {
  justify-content: space-between;
}
</style>
