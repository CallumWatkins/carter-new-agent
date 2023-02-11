<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Dashboard</h1>
      <router-link :to="{ name: 'new-agent' }" class="button is-primary"
        >New Agent</router-link
      >
    </div>
  </section>
</template>
