<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h1 class="title">New Agent</h1>
        <p class="subtitle">Create a new agent</p>
        <div class="block">
          <RouterView />
        </div>
        <div class="flow-buttons field is-grouped">
          <p class="control">
            <button class="button">Back</button>
          </p>
          <p class="control">
            <button class="button is-primary">Next</button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}

.box {
  flex: 1;
  background-color: #303030;
  max-width: 700px;
}

.flow-buttons {
  justify-content: space-between;
}
</style>
