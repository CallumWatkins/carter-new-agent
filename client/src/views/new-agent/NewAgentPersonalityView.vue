<script setup lang="ts">
import type NewAgentData from "@/models/NewAgentData";
import TagCollection from "@/components/TagCollection.vue";
import { watch } from "vue";

const props = defineProps<{
  newAgentData: NewAgentData;
}>();

const emit = defineEmits<{
  (e: "change", done: boolean): void;
}>();

watch(
  props.newAgentData,
  (newData) => {
    emit("change", newData.personality.length > 0);
  },
  { immediate: true }
);

const defaultTraits = [
  "Friend",
  "Assistant",
  "Mentor",
  "Colleague",
  "Young Child",
  "Lover",
  "Customer",
  "Customer Service",
];

function addPersonalityTrait(trait: string) {
  if (props.newAgentData.personality.includes(trait)) return;
  props.newAgentData.personality.push(trait);
}

function removePersonalityTrait(trait: string) {
  props.newAgentData.personality.splice(
    props.newAgentData.personality.indexOf(trait),
    1
  );
}
</script>

<template>
  <div class="block">
    <h2 class="title is-4">Personality</h2>
    <h3 class="subtitle is-6">
      This will determine how the agent behaves and how it responds to prompts.
    </h3>
    <TagCollection
      label="Personality Traits"
      :default-tags="defaultTraits"
      :selected-tags="newAgentData.personality"
      @add="addPersonalityTrait"
      @remove="removePersonalityTrait"
    />
  </div>
</template>

<style scoped></style>
