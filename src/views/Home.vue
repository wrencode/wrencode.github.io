<template>
  <div class="home">
    <Confetti id="surprise" :class="getSurpriseClass(surprise)" />
    <a href="/">
      <WrencodeLogo id="wrencode-logo" />
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
import Confetti from "@/components/confetti";

export default {
  name: "Home",
  components: {
    WrencodeLogo,
    SocialMedia,
    Confetti,
  },
  beforeCreate() {
    this.resetSurprise();
  },
  unmounted() {
    this.resetSurprise();
  },
  props: {
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
      return surpriseClass;
    },
  },
};
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
.home {
  text-align: center;
}

#wrencode-logo {
  width: 30%;
  min-width: 250px;
}

h3 {
  margin: 40px 0 0;
}

.hide {
  display: none !important;
}

@media (prefers-color-scheme: dark) {
}
</style>
