<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const navOpen = ref(false);
</script>

<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/">
          <img
            src="./assets/images/carter-full-white-transparent-cropped.svg"
            width="112"
            height="28"
          />
        </RouterLink>
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': navOpen }"
          aria-label="menu"
          :aria-expanded="navOpen"
          data-target="navbarBasicExample"
          @click="navOpen = !navOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': navOpen }"
      >
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/">Home</RouterLink>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
