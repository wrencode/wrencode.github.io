<template>
  <img alt="Wrencode Logo" src="./assets/sm-fg_hx-brdr_sq.png" />
  <Home msg="Welcome to the future home of Wrencode, LLC!" />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=SourceCodePro&display=swap'); */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a4139;
  margin-top: 60px;
}

@font-face {
  font-family: "Source Code Pro";
  src: local("SourceCodePro-Regular"),
    url(./fonts/SourceCodePro/SourceCodePro-Regular.ttf) format("truetype");
}
</style>
