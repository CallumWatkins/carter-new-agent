<script setup lang="ts">
import SentenceCollection from "@/components/SentenceCollection.vue";
import type AgentData from "@/models/AgentData";
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
    emit("change", newData.backstory.length > 0);
  },
  { immediate: true }
);

function addBackstory(backstory: string) {
  if (props.newAgentData.backstory.includes(backstory)) return;
  props.newAgentData.backstory.push(backstory);
}

function removeBackstory(backstory: string) {
  props.newAgentData.backstory.splice(
    props.newAgentData.backstory.indexOf(backstory),
    1
  );
}
</script>

<template>
  <div class="block">
    <h2 class="title is-4">Backstory</h2>
    <h3 class="subtitle is-6">
      Teach your agent who they are with some key first-person sentences.
    </h3>
    <SentenceCollection
      :sentences="newAgentData.backstory"
      @add="addBackstory"
      @remove="removeBackstory"
    />
  </div>
</template>
