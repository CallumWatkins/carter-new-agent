<script setup lang="ts">
import type NewAgentData from "@/models/NewAgentData";
import type { Ref } from "vue";
import { ref } from "vue";

const newAgentData: Ref<NewAgentData> = ref({
  created: new Date(),
  name: "",
  gender: "",
  personality: [],
  useCase: [],
  backstory: [],
});

const canProceed = ref(false);
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h1 class="title is-5">New Agent</h1>
        <div class="block">
          <RouterView
            :new-agent-data="newAgentData"
            @change="(done: boolean) => canProceed = done"
          />
        </div>
        <div class="flow-buttons field is-grouped">
          <p class="control">
            <button class="button">Back</button>
          </p>
          <p class="control">
            <button class="button is-primary" :disabled="!canProceed">
              Next
            </button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
}

.box {
  flex: 1;
  background-color: #303030;
  max-width: 700px;
}

.flow-buttons {
  justify-content: space-between;
}
</style>
