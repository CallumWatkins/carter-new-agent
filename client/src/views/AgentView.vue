<script setup lang="ts">
import { useAgentsStore } from "@/stores/agents";
import { useRoute } from "vue-router";

const agentsStore = useAgentsStore();
const route = useRoute();
const agent = agentsStore.agents.find((a) => a.id === route.params.id);
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ agent?.name }}</h1>
      <h2 class="subtitle">Agent - {{ agent?.personality.join(", ") }}</h2>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
