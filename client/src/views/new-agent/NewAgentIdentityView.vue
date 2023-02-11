<script setup lang="ts">
import type NewAgentData from "@/models/NewAgentData";
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
    emit("change", newData.name.trim().length > 0 && newData.gender.length > 0);
  },
  { immediate: true }
);
</script>

<template>
  <h2 class="title is-4">Identity</h2>
  <h3 class="subtitle is-5">Choose your agent's identity</h3>
  <p class="block">
    This will determine how the agent refers to itself, and may affect its
    response style.
  </p>
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" v-model="newAgentData.name" />
    </div>
  </div>

  <div class="field">
    <label class="label">Gender</label>
    <div class="control">
      <div class="select">
        <select v-model="newAgentData.gender">
          <option disabled value="">Select one...</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unspecified</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
