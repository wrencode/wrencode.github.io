<template>
  <a href="https://www.wrencode.com">
    <img alt="Wrencode Logo" src="./assets/images/logo/sm-fg_hx-brdr_sq.png" />
  </a>
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
/*@import url('https://fonts.googleapis.com/css?family=Source%20Code%20Pro');*/

@font-face {
  font-family: "Source Code Pro";
  src: local("Source Code Pro"),
    url("./assets/fonts/SourceCodePro/SourceCodePro-Regular.ttf")
      format("truetype");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "Source Code Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a4139;
  margin-top: 60px;
}
</style>
