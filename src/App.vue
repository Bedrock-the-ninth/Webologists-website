<template>
  <div>
    <main-app class="mainTemplate"></main-app>
  </div>
</template>

<script>
// //Vanilla JS:
// function randomNavColor() {
//   //There will be a function that returns a color in a random way
// }

// Importing components:
import MainApp from "./components/TheMainApp.vue";

export default {
  components: {
    MainApp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Indie Flower", cursive;
}
.mainTemplate {
  background-color: #f4f4f9;
}
ul {
  list-style: none;
}
</style>

<style lang="scss">
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/brands";
</style>