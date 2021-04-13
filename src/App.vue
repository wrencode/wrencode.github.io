<template>
  <a href="https://www.wrencode.com">
    <picture>
      <source
        srcset="./assets/images/logo/wrencode-logo-vector-color-ffffff.svg"
        media="(prefers-color-scheme: dark)"
      />
      <img
        src="./assets/images/logo/wrencode-logo-vector-color-4a4139.svg"
        alt="Wrencode Logo"
        width="500"
        height="500"
      />
    </picture>
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

@media (prefers-color-scheme: dark) {
  /* dark mode css */
  body,
  html {
    background: #4a4139;
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
  }

  /*noinspection ALL*/
  #app {
    font-family: "Source Code Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background: #4a4139;
    margin-top: 60px;
  }
}

@media (prefers-color-scheme: light) {
  /* light mode css */
  body,
  html {
    background: #ffffff;
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
  }

  /*noinspection ALL*/
  #app {
    font-family: "Source Code Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #4a4139;
    background: #ffffff;
    margin-top: 60px;
  }
}
</style>
