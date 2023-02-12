<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  label?: string;
  sentences: string[];
}>();

const addingNewValue = ref("");

const emit = defineEmits<{
  (e: "add", tag: string): void;
  (e: "remove", tag: string): void;
}>();

function removeSentence(sentence: string) {
  emit("remove", sentence);
}

function addNewSentence() {
  const newSentence = addingNewValue.value.trim();
  if (newSentence.length > 0) {
    emit("add", addingNewValue.value);
  }
  addingNewValue.value = "";
}
</script>

<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>

    <div class="block">
      <TransitionGroup name="fade" class="panel" tag="div">
        <a
          v-for="sentence in sentences"
          :key="sentence"
          class="panel-block"
          href="#"
          @click.prevent="removeSentence(sentence)"
          >{{ sentence }}</a
        >
      </TransitionGroup>
    </div>
    <div class="field has-addons">
      <div class="control new-sentence">
        <input
          class="input"
          type="text"
          placeholder="Add new"
          @keypress.enter="addNewSentence"
          v-model="addingNewValue"
        />
      </div>
      <div class="control">
        <a class="button is-link" @click="addNewSentence">Add</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  .panel-block {
    &:hover {
      color: white;
      text-decoration: line-through;
    }

    &:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }
}

.new-sentence {
  flex-grow: 1;
  max-width: 400px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
