<script setup lang="ts">
import type AgentData from "@/models/AgentData";
import TagCollection from "@/components/TagCollection.vue";
import { watch } from "vue";

const props = defineProps<{
  newAgentData: AgentData;
}>();

const emit = defineEmits<{
  (e: "change", done: boolean): void;
}>();

watch(
  props.newAgentData,
  (newData) => {
    emit("change", newData.useCase.length > 0);
  },
  { immediate: true }
);

const defaultUseCases = [
  "Video Game Character",
  "VR Character",
  "AR Character",
  "Voice Assistant",
];

function addUseCase(useCase: string) {
  if (props.newAgentData.useCase.includes(useCase)) return;
  props.newAgentData.useCase.push(useCase);
}

function removeUseCase(useCase: string) {
  props.newAgentData.useCase.splice(
    props.newAgentData.useCase.indexOf(useCase),
    1
  );
}
</script>

<template>
  <div class="block">
    <h2 class="title is-4">Usage</h2>
    <h3 class="subtitle is-6">Where will your agent be used?</h3>
    <TagCollection
      :default-tags="defaultUseCases"
      :selected-tags="newAgentData.useCase"
      @add="addUseCase"
      @remove="removeUseCase"
    />
  </div>
</template>
