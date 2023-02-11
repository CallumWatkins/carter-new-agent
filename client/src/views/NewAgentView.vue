<script setup lang="ts">
import type NewAgentData from "@/models/NewAgentData";
import { watch, type Ref } from "vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

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

const newAgentData: Ref<NewAgentData> = ref({
  created: new Date(),
  name: "",
  gender: "",
  personality: ["Friend"],
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
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div class="block">
          <h1 class="title is-5">New Agent</h1>
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
              class="button"
              @click="cancel"
            >
              Cancel
            </button>
            <button v-else class="button" @click="previousFlowView">
              Back
            </button>
          </p>
          <p class="control">
            <button
              v-if="currentFlowViewIndex === flowRoutes.length - 1"
              class="button is-primary"
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
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
}

.box {
  min-height: 600px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex: 1;
  background-color: #303030;
  max-width: 700px;
  padding: 2rem;
  position: relative;
  overflow: clip;

  progress {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 10px;
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
