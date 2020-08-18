<template>
  <div id="app">
    <header>
      <div><router-link to="/">Games</router-link></div>
    </header>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

body {
  font-family: "Press Start 2P", cursive;
  background-color: black;
  color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.5;
}

a {
  color: cyan;
  text-decoration: none;
}

.router-link-exact-active {
  text-decoration: underline;
}

input[type="text"] {
  font-size: 1rem;
  outline: none;
  background-color: black;
  color: white;
  border: 2px solid white;
  font-family: inherit;
  padding: 0.5rem;
}

label {
  display: block;
  font-size: 0.875rem;
}

header {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: black;
  font-family: inherit;
  font-size: 1.25rem;
  padding: 0.5rem;
  border: 2px solid white;
  color: white;
  outline: none;
  cursor: pointer;
}

button:hover {
  border-color: cyan;
  color: cyan;
}

button:active {
  transform: scale(0.9);
}
</style>
