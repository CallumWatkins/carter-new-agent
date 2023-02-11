<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  label: string;
  tags: string[];
}>();

const addingNewValue = ref("");

const emit = defineEmits<{
  (e: "add", label: string): void;
  (e: "remove", index: number, label: string): void;
}>();

function addNewTag() {
  const newTag = addingNewValue.value.trim();
  if (newTag.length > 0 && !props.tags.includes(newTag)) {
    emit("add", addingNewValue.value);
  }
  addingNewValue.value = "";
}
</script>

<template>
  <div class="field">
    <label class="label">{{ label }}</label>

    <div class="tags are-medium label-collection">
      <div
        class="tag"
        v-for="(tag, i) in tags"
        :key="tag"
        @click="emit('remove', i, tag)"
      >
        {{ tag }}
      </div>
    </div>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" v-model="addingNewValue" />
      </div>
      <div class="control">
        <a class="button is-link" @click="addNewTag">Add</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag {
  cursor: pointer;

  &:hover {
    text-decoration: line-through;
    color: hsl(0, 100%, 82.9%);
  }
}
</style>
