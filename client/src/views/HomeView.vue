<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title mb-6">Dashboard</h1>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification">
                <p class="title">Agents</p>
                <p class="subtitle">Lorem ipsum dolor sit</p>
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
              </article>
              <article class="tile is-child notification">
                <p class="title">Lorem ipsum</p>
                <p class="subtitle">Quos quis dolorum magnam</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Lorem ipsum</p>
                <p class="subtitle">Deserunt laudantium aperiam neque</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur aliquid culpa, illo doloribus enim adipisci esse
                  repudiandae facilis sunt assumenda saepe vel, commodi quis
                  iste dolorum error molestias vitae quidem.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt laudantium aperiam neque. Atque enim fugit,
                  exercitationem deserunt sed quos mollitia corporis qui itaque
                  quaerat minima aperiam? Quos quis dolorum magnam!
                </p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Lorem ipsum</p>
              <p class="subtitle">Atque enim fugit corporis</p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <p class="title">Lorem ipsum</p>
              <p class="subtitle">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.tile.is-child {
  background-color: hsla(0 0% 0% / 0.2);
}
</style>
