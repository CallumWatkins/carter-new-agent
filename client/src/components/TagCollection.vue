<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  label: string;
  defaultTags: string[];
  selectedTags: string[];
}>();

const addingNewValue = ref("");

const emit = defineEmits<{
  (e: "add", tag: string): void;
  (e: "remove", tag: string): void;
}>();

function clickTag(tag: string) {
  const selected = props.selectedTags.includes(tag);
  if (selected) emit("remove", tag);
  else emit("add", tag);
}

function addNewTag() {
  const newTag = addingNewValue.value.trim();
  if (newTag.length > 0 && !tags.value.includes(newTag)) {
    emit("add", addingNewValue.value);
  }
  addingNewValue.value = "";
}

const tags = computed(() => {
  const extras = props.selectedTags.filter(
    (t) => !props.defaultTags.includes(t)
  );
  return props.defaultTags.concat(extras);
});
</script>

<template>
  <div class="field">
    <label class="label">{{ label }}</label>

    <div class="tags are-medium label-collection">
      <TransitionGroup name="fade">
        <div
          v-for="(tag, i) in tags"
          :key="tag"
          class="tag is-rounded"
          :class="{ selected: props.selectedTags.includes(tag) }"
          @click="clickTag(tag)"
        >
          {{ tag }}
        </div>
      </TransitionGroup>
    </div>
    <div class="field has-addons">
      <div class="control new-tag">
        <input
          class="input"
          type="text"
          placeholder="Add your own"
          v-model="addingNewValue"
        />
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
  color: #eee;
  outline: 2px solid hsl(225deg 97% 61% / 0);
  transition-property: outline, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  &.selected {
    outline: 2px solid hsl(225deg 97% 61%);
    box-shadow: 0px 0px 5px 3px hsl(225 97% 61% / 0.5),
      inset 0px 0px 5px 3px hsl(225 97% 61% / 0.5);
  }

  &:not(.selected):hover {
    outline: 1px solid hsl(225deg 97% 61% / 0.5);
    box-shadow: 0px 0px 5px 3px hsl(225 97% 61% / 0.2),
      inset 0px 0px 5px 3px hsl(225 97% 61% / 0.2);
  }
}

.new-tag {
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
