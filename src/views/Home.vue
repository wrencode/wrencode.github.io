<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <a href="https://www.wrencode.com">
      <WrencodeLogo />
    </a>
    <p>
      Wrencode, LLC focuses on the implementation and optimization of modern
      technology to help you soar to new heights!
    </p>
    <h3>Find Wrencode at:</h3>
    <SocialMedia />
  </div>
</template>

<script>
import WrencodeLogo from "@/components/svg/wrencode-logo";
import SocialMedia from "@/components/svg/social-media";

export default {
  name: "Home",
  components: {
    WrencodeLogo,
    SocialMedia,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}

@media (prefers-color-scheme: dark) {
}
</style>
