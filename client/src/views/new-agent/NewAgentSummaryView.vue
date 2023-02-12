<script setup lang="ts">
import type AgentData from "@/models/AgentData";

defineProps<{
  newAgentData: AgentData;
}>();
</script>

<template>
  <div class="block">
    <h2 class="title is-4">Summary</h2>
    <h3 class="subtitle is-6">
      Here's a summary of your new agent. Don't worry, you can change everything
      later.
    </h3>
    <table class="table">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{ newAgentData.name }}</td>
          <td>
            <router-link
              :to="{ name: 'new-agent-identity' }"
              class="button is-link is-small is-outlined"
              >Change</router-link
            >
          </td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{{ newAgentData.gender }}</td>
          <td>
            <router-link
              :to="{ name: 'new-agent-identity' }"
              class="button is-link is-small is-outlined"
              >Change</router-link
            >
          </td>
        </tr>
        <tr>
          <th>Personality</th>
          <td>{{ newAgentData.personality.join(", ") }}</td>
          <td>
            <router-link
              :to="{ name: 'new-agent-personality' }"
              class="button is-link is-small is-outlined"
              >Change</router-link
            >
          </td>
        </tr>
        <tr>
          <th>Usage</th>
          <td>{{ newAgentData.useCase.join(", ") }}</td>
          <td>
            <router-link
              :to="{ name: 'new-agent-usage' }"
              class="button is-link is-small is-outlined"
              >Change</router-link
            >
          </td>
        </tr>
        <tr>
          <th>Backstory</th>
          <td>{{ newAgentData.backstory.join(", ") }}</td>
          <td>
            <router-link
              :to="{ name: 'new-agent-backstory' }"
              class="button is-link is-small is-outlined"
              >Change</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  background-color: unset;
}
</style>
