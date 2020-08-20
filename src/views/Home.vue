<template>
  <div>
    <h1>Welcome to the Pixel Arcade!</h1>
    <main>
      <router-link to="/hangman"
        ><div class="link-card">Hangman</div></router-link
      >
      <router-link to="/2048"><div class="link-card">2048</div></router-link>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.link-card {
  min-width: 12rem;
  padding: 2rem;
  border: 2px solid;
}
</style>
