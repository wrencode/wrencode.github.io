<template>
  <div class="home">
    <Confetti id="surprise" :class="getSurpriseClass(surprise)" />
    <a href="/">
      <WrencodeLogo id="wrencode-logo" class="bring-to-front-of-bg-img" />
      <!--suppress CheckImageSize -->
      <img
        :class="getSurpriseClass(surprise)"
        src="@/assets/images/misc/dancing-wren.gif"
        alt="Dancing wren!"
        width="300"
        height="300"
        v-tooltip.top="'It\'s time for a dance party!'"
      />
    </a>
    <p class="bring-to-front-of-bg-img">
      Wrencode, LLC focuses on the implementation and optimization of modern
      technology to help you soar to new heights!
    </p>
    <h3 class="bring-to-front-of-bg-img">Find Wrencode at:</h3>
    <SocialMedia class="bring-to-front-of-bg-img" />
  </div>
</template>

<script>
import WrencodeLogo from "@/components/svg/wrencode-logo";
import SocialMedia from "@/components/svg/social-media";
import Confetti from "@/components/confetti";

export default {
  name: "Home",
  components: {
    WrencodeLogo,
    SocialMedia,
    Confetti,
  },
  props: {
    setMode: Function,
    surprise: Boolean,
    resetSurprise: Function,
  },
  methods: {
    getSurpriseClass(surprise) {
      let surpriseClass = "hide";
      if (surprise) {
        document.getElementById("surprise")?.classList.remove(surpriseClass);
        document.getElementById("wrencode-logo")?.classList.add(surpriseClass);
        surpriseClass = "show";
        document.getElementById("surprise")?.classList.add(surpriseClass);
        document
          .getElementById("wrencode-logo")
          ?.classList.remove(surpriseClass);
      }
      return surpriseClass + " bring-to-front-of-bg-img";
    },
  },
  beforeCreate() {
    this.resetSurprise();
  },
  mounted() {
    this.setMode();
  },
  unmounted() {
    this.resetSurprise();
  },
};
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
.home {
  text-align: center;
}

.home:before {
  content: "";
  background-image: url("../assets/images/banners/wrencode-banner.png");
  background-size: contain;
  background-repeat: repeat-y;
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  /*bottom: 20vh;*/
  bottom: 15vh;
  opacity: 0.25;
}

#wrencode-logo {
  width: 30%;
  min-width: 250px;
}

h3 {
  margin: 40px 0 0;
}

.bring-to-front-of-bg-img {
  position: relative;
}

.hide {
  display: none !important;
}

@media (prefers-color-scheme: dark) {
}
</style>
