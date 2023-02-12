<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Dashboard</h1>
      <router-link
        :to="{ name: 'new-agent' }"
        class="button is-medium is-primary glow-effect"
      >
        New Agent
        <svg class="glow-container">
          <rect
            pathLength="100"
            stroke-linecap="round"
            rx="8px"
            class="glow-blur"
          ></rect>
          <rect
            pathLength="100"
            stroke-linecap="round"
            rx="8px"
            class="glow-line"
          ></rect>
        </svg>
      </router-link>
    </div>
  </section>
</template>
