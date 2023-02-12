<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const navOpen = ref(false);
</script>

<template>
  <div class="radial-glow-1"></div>
  <div class="radial-glow-2"></div>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" :to="{ name: 'home' }">
          <img
            src="./assets/images/carter-full-grad-white-transparent-cropped.svg"
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
          <RouterLink class="navbar-item" :to="{ name: 'home' }"
            >Home</RouterLink
          >
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
.radial-glow-1,
.radial-glow-2 {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
}

.radial-glow-1 {
  background: radial-gradient(
    circle at 20% 20%,
    hsl(282 50% 38% / 0.25) 0%,
    hsl(282 50% 38% / 0) 60%
  );
}

.radial-glow-2 {
  background: radial-gradient(
    circle at 80% 80%,
    hsl(225 97% 61% / 0.25) 0%,
    hsl(225 97% 61% / 0) 60%
  );
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
