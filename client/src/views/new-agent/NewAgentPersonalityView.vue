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

function addPersonalityTrait(trait: string) {
  if (props.newAgentData.personality.includes(trait)) return;
  props.newAgentData.personality.push(trait);
}

function removePersonalityTrait(index: number, _trait: string) {
  props.newAgentData.personality.splice(index, 1);
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
      :tags="newAgentData.personality"
      @add="addPersonalityTrait"
      @remove="removePersonalityTrait"
    />
  </div>
</template>

<style scoped></style>
