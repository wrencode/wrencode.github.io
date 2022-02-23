<!--suppress ALL -->
<template>
  <div id="app">
    <Menubar :model="items" v-on:click="onClickMenubar" :key="darkMode">
      <template #start>
        <a href="/">
          <WrencodeLogo class="menubar-logo" />
        </a>
        <p class="menubar-title">Wrencode, LLC</p>
        <ToggleButton
          v-model="darkMode"
          class="p-button-icon-only p-button-rounded menubar-switch-mode-button"
          onIcon="pi pi-sun"
          offIcon="pi pi-moon"
          v-tooltip.bottom="'Switch Dark/Light Mode'"
        />
        <div id="menubar-switch-view-button-filler" />
        <Button
          label="Show Desktop View"
          id="menubar-desktop-view-button"
          class="p-button-icon-only p-button-rounded menubar-switch-view-button"
          @click="showDesktopView"
          v-tooltip.bottom="'Show Desktop View'"
        >
          <i class="pi pi-desktop"></i>
        </Button>
        <Button
          label="Show Mobile View"
          id="menubar-mobile-view-button"
          class="p-button-icon-only p-button-rounded menubar-switch-view-button hide-button"
          @click="showMobileView"
          v-tooltip.bottom="'Show Mobile View'"
        >
          <i class="pi pi-mobile"></i>
        </Button>
      </template>
      <!--      <template #end>-->
      <!--        Test-->
      <!--      </template>-->
    </Menubar>
    <br />
    <br />
    <router-view :darkMode="darkMode" :setMode="setMode" :surprise="surprise" :resetSurprise="resetSurprise" />
  </div>
  <Button
    label="Back to Top"
    id="back-to-top-button"
    class="p-button-icon-only p-button-rounded p-button-outlined hide-button"
    @click="onClickBackToTop"
    v-tooltip.top="'Back to Top'"
  >
    <i class="pi pi-arrow-up"></i>
  </Button>
  <footer class="footer">
    <SocialMedia class="footer-social-media" />
    <p>Copyright © {{ getYear() }} Wrencode, LLC. All rights reserved.</p>
    <Button
      class="p-button-rounded p-button-sm footer-surprise"
      label="konami?"
      @click="activateSurprise"
      v-if="isHome"
    />
  </footer>
</template>

<script>
import Menubar from "primevue/menubar"
import ToggleButton from "primevue/togglebutton"
import Button from "primevue/button"
import WrencodeLogo from "@/components/svg/wrencode-logo"
import SocialMedia from "@/components/svg/social-media"

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
]
let keySequence = []

export default {
  name: "App",
  components: {
    Menubar,
    ToggleButton,
    Button,
    WrencodeLogo,
    SocialMedia
  },
  created() {
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("keydown", this.freezeScroll)
    window.addEventListener("keyup", this.konami)
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("keydown", this.freezeScroll)
    window.removeEventListener("keyup", this.konami)
  },
  methods: {
    onScroll() {
      let rootElement = document.documentElement
      let backToTopButton = document.getElementById("back-to-top-button")

      // console.log("scroll height:", rootElement.scrollHeight);
      // console.log("client height:", rootElement.clientHeight);
      // console.log("scroll top:", rootElement.scrollTop);

      // if (rootElement.scrollHeight > rootElement.clientHeight + 300) {
      if (rootElement.scrollTop > 65) {
        backToTopButton.classList.remove("hide-button")
        backToTopButton.classList.add("show-button")
      } else {
        backToTopButton.classList.remove("show-button")
        backToTopButton.classList.add("hide-button")
      }
    },
    onClickBackToTop() {
      // let rootElement = document.documentElement;

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      })

      // rootElement.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
    },
    onClickMenubar() {
      this.setMode()
    },
    onClickMenubarItem(menubarItemName) {
      // this.$gtag(
      //     "config",
      //     window.GA_MEASUREMENT_ID,
      //     {
      //       page_path: `/${menubarItemName}`
      //     }
      // );
      this.hideBackToTopButton()
      this.makeMenubarItemActive(menubarItemName)
    },
    hideBackToTopButton() {
      let backToTopButton = document.getElementById("back-to-top-button")
      backToTopButton.classList.remove("show-button")
      backToTopButton.classList.add("hide-button")
    },
    makeMenubarItemActive(menubarItemName) {
      let menubarItems = document.getElementsByClassName("menubar-item")
      for (let menubarItem of menubarItems) {
        menubarItem.classList.remove("menubar-item-active")
      }

      let selectedMenubarItem = document.getElementsByClassName(`menubar-item-${menubarItemName}`).item(0)
      selectedMenubarItem.classList.add("menubar-item-active")
    },
    // isCompact() {
    //   return window.matchMedia("(max-width: 960px)");
    // },
    setMode() {
      // let allElements = document.getElementsByTagName("*");
      // let allElements = document.body.querySelectorAll("*");
      let allElements = document.querySelectorAll("*")

      if (this.darkMode) {
        for (let element of allElements) {
          element.classList.remove("light-mode")
          element.classList.add("dark-mode")
        }
      } else {
        for (let element of allElements) {
          element.classList.remove("dark-mode")
          element.classList.add("light-mode")
        }
      }
    },
    showDesktopView() {
      let menubarDesktopViewButton = document.getElementById("menubar-desktop-view-button")
      menubarDesktopViewButton.classList.add("hide-button")
      let menubarMobileViewButton = document.getElementById("menubar-mobile-view-button")
      menubarMobileViewButton.classList.remove("hide-button")

      let app = document.getElementById("app")
      app.style.minWidth = "960px"

      document.getElementsByClassName("p-menubar").forEach((elem) => {
        elem.style.position = "absolute"
        elem.style.minWidth = "970px" // ten additional pixels to accomodate the 10px right padding of #app
        elem.style.padding = "0.5rem"
      })
      document.getElementsByClassName("p-menubar-button").forEach((elem) => (elem.style.display = "none"))
      document.getElementsByClassName("p-menubar-root-list").forEach((elem) => {
        elem.style.position = "relative"
        elem.style.display = "inline-flex"
        elem.style.boxShadow = "none"
      })
      document.getElementsByClassName("p-menuitem").forEach((elem) => (elem.style.width = "initial"))
    },
    showMobileView() {
      let menubarDesktopViewButton = document.getElementById("menubar-desktop-view-button")
      menubarDesktopViewButton.classList.remove("hide-button")
      let menubarMobileViewButton = document.getElementById("menubar-mobile-view-button")
      menubarMobileViewButton.classList.add("hide-button")

      let app = document.getElementById("app")
      app.style.removeProperty("min-width")

      document.getElementsByClassName("p-menubar").forEach((elem) => {
        elem.style.removeProperty("position")
        elem.style.removeProperty("min-width")
        elem.style.removeProperty("padding")
      })
      document.getElementsByClassName("p-menubar-button").forEach((elem) => elem.style.removeProperty("display"))
      document.getElementsByClassName("p-menubar-root-list").forEach((elem) => {
        elem.style.removeProperty("position")
        elem.style.removeProperty("display")
        elem.style.removeProperty("box-shadow")
      })
      document.getElementsByClassName("p-menuitem").forEach((elem) => elem.style.removeProperty("width"))
    },
    getYear() {
      return new Date().getFullYear()
    },
    freezeScroll(e) {
      if (keySequence[0] === "ArrowUp" && keySequence[1] === "ArrowUp" && e.key === "ArrowDown") {
        e.preventDefault()
      }
    },
    konami(e) {
      keySequence.push(e.key)

      let keySequenceStr = keySequence.join("")
      let konamiSliceStr = konamiCode.slice(0, keySequence.length).join("")

      if (keySequenceStr === konamiCode.join("")) {
        this.activateSurprise()
      } else if (keySequenceStr === konamiSliceStr) {
        // pass
      } else {
        if (e.key === "ArrowUp") {
          keySequence = ["ArrowUp"]
        } else {
          keySequence = []
        }
      }
    },
    activateSurprise() {
      this.surprise = true
    },
    resetSurprise() {
      this.surprise = false
    }
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
          command: this.onClickMenubarItem.bind(this, "home"),
          class: "menubar-item menubar-item-home"
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: "/about",
          command: this.onClickMenubarItem.bind(this, "about"),
          class: "menubar-item menubar-item-about"
        },
        {
          label: "Services",
          icon: "pi pi-fw pi-user-edit",
          to: "/services",
          command: this.onClickMenubarItem.bind(this, "services"),
          class: "menubar-item menubar-item-services"
        },
        {
          label: "Clients",
          icon: "pi pi-fw pi-globe",
          to: "/clients",
          command: this.onClickMenubarItem.bind(this, "clients"),
          class: "menubar-item menubar-item-clients"
        },
        {
          label: "Contact",
          icon: "pi pi-fw pi-envelope",
          to: "/contact",
          command: this.onClickMenubarItem.bind(this, "contact"),
          class: "menubar-item menubar-item-contact"
        }
      ],
      darkMode: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
      surprise: false
    }
  },
  computed: {
    isHome() {
      return this.$route.name === "Home"
    }
  },
  watch: {
    darkMode() {
      this.setMode()
    }
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style>
/*@import url('https://fonts.googleapis.com/css?family=Source%20Code%20Pro');*/

@font-face {
  font-family: "Source Code Pro";
  src: local("Source Code Pro"), url("./assets/fonts/SourceCodePro/SourceCodePro-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

:root {
  --wren: #4a4139;
  --wren-transparency-80: rgba(74, 65, 57, 0.8);
  --wren-transparency-75: rgba(74, 65, 57, 0.75);
  --wren-transparency-70: rgba(74, 65, 57, 0.7);
  --wren-transparency-50: rgba(74, 65, 57, 0.5);
  --wren-transparency-25: rgba(74, 65, 57, 0.25);
  --cactus-wren: #aba18c;
  --cactus-wren-transparency-80: rgba(171, 161, 140, 0.8);
  --cactus-wren-transparency-75: rgba(171, 161, 140, 0.75);
  --cactus-wren-transparency-70: rgba(171, 161, 140, 0.7);
  --cactus-wren-transparency-50: rgba(171, 161, 140, 0.5);
  --cactus-wren-transparency-25: rgba(171, 161, 140, 0.25);
  --toucan: #f09651;
  --red-hawk: #7e3227;
  --midnight-blue: #191970;
  --sunshine-yellow: #fffd37;
  --logo-height-client: 70px;
}

root {
  font-family: "Source Code Pro", Roboto, sans-serif;
}

body,
html {
  background: var(--cactus-wren);
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

body.dark-mode,
html.dark-mode {
  background: var(--wren) !important;
}

body {
  display: flex;
  flex-direction: column;
}

#app {
  color: var(--wren);
  font-weight: 600;
  font-size: 14pt;
  background: var(--cactus-wren);
  font-family: "Source Code Pro", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 20px 10px;
  text-align: center;
  min-height: 80vh;
  flex: 1 0 auto;
}

#app.dark-mode {
  color: var(--cactus-wren) !important;
  background: var(--wren) !important;
}

/*@media screen and (max-width: 960px) {*/

/*  #app {*/
/*    min-width: 960px !important;*/
/*  }*/

/*  .p-menubar {*/
/*    position: absolute !important;*/
/*  }*/

/*  .p-menubar .p-menubar-button {*/
/*    display: none !important;*/
/*  }*/

/*  .p-menubar .p-menubar-root-list {*/
/*    position: relative !important;*/
/*    display: inline-flex !important;*/
/*    box-shadow: none !important;*/
/*  }*/

/*  .p-menubar .p-menubar-root-list .p-menuitem {*/
/*    width: initial !important;*/
/*  }*/
/*}*/

.p-menubar {
  left: 0;
  height: 65px !important;
  width: 100% !important;
  justify-content: space-between;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25) !important;
  z-index: 1000; /* keep menubar on top */
}

.p-menubar:not(.p-menubar-mobile-active) {
  background: var(--cactus-wren) !important;
  position: absolute;
  top: 0;
  border: 0 !important;
  /*justify-content: space-around;*/
}

.p-menubar:not(.p-menubar-mobile-active).dark-mode {
  background: var(--wren) !important;
}

.p-menubar-mobile-active {
  background: var(--cactus-wren) !important;
  position: absolute !important;
  top: 0;
  width: 100%;
  border: 0 !important;
  display: flex;
  justify-content: space-between;
}

.p-menubar-mobile-active.dark-mode {
  background: var(--wren) !important;
}

.p-menubar-start {
  font-family: "Source Code Pro", Roboto, sans-serif;
  color: var(--wren) !important;
  background: var(--cactus-wren) !important;
  min-width: 255px !important;
  width: 255px !important;
  white-space: nowrap;
  font-weight: 600 !important;
  display: block !important;
  margin-right: 20px !important;
  justify-content: left !important;
}

.p-menubar-start.dark-mode {
  color: var(--cactus-wren) !important;
  background: var(--wren) !important;
}

.menubar-logo {
  height: 65px;
  width: 45px;
  display: inline-block;
  vertical-align: middle;
}

.menubar-title {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
}

.menubar-switch-mode-button {
  display: inline-block !important;
  margin-left: 10px !important;
  background: transparent !important;
  border: none !important;
  vertical-align: middle !important;
  box-shadow: none !important;
}

.menubar-switch-mode-button .p-button-icon {
  display: inline-block !important;
  vertical-align: middle !important;
  /*color: var(--wren) !important;*/
}

.menubar-switch-mode-button .pi-moon {
  color: var(--midnight-blue) !important;
}

.menubar-switch-mode-button .pi-moon:hover {
  color: var(--red-hawk) !important;
}

.menubar-switch-mode-button .pi-sun {
  color: var(--sunshine-yellow) !important;
}

.menubar-switch-mode-button .pi-sun:hover {
  color: var(--toucan) !important;
}

.menubar-switch-mode-button .p-button-label {
  display: none !important;
}

#menubar-switch-view-button-filler {
  display: inline-block;
  vertical-align: middle;
  width: 2.357rem;
}

.menubar-switch-view-button {
  display: none !important;
  background: transparent !important;
  border: none !important;
  color: var(--wren) !important;
  vertical-align: middle !important;
}

.menubar-switch-view-button.dark-mode {
  color: var(--cactus-wren) !important;
}

.menubar-switch-view-button:hover {
  color: var(--red-hawk) !important;
}

.menubar-switch-view-button.dark-mode:hover {
  color: var(--toucan) !important;
}

@media screen and (max-width: 960px) {
  #menubar-switch-view-button-filler {
    display: none !important;
  }

  .menubar-switch-view-button {
    display: inline-block !important;
  }
}

.p-menubar-root-list {
  background: var(--cactus-wren) !important;
  width: 100% !important;
  border: 0 !important;
  display: inline-flex;
}

.p-menubar-root-list.dark-mode {
  background: var(--wren) !important;
}

@media screen and (max-width: 960px) {
  .p-menubar-mobile-active .p-menubar-root-list {
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25) !important;
  }
}

.p-menubar-button {
  color: var(--wren) !important;
}

.p-menubar-button.dark-mode {
  color: var(--cactus-wren) !important;
}

.p-menubar-button:focus {
  box-shadow: none !important;
}

.p-menubar-button:hover {
  color: var(--red-hawk) !important; /* red hawk */
  background: var(--cactus-wren) !important;
  transition: 0.5s !important;
  transform: scale(1.25);
}

.p-menubar-button.dark-mode:hover {
  color: var(--toucan) !important;
  background: var(--wren) !important;
}

.p-menuitem {
  background: transparent !important;
  color: var(--wren) !important;
  font-family: "Source Code Pro", Roboto, sans-serif;
}

.p-menuitem.dark-mode {
  color: var(--cactus-wren) !important;
}

.p-menuitem:after {
  display: block;
  content: "";
  border-bottom: solid 3px var(--red-hawk);
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

.p-menuitem.dark-mode:after {
  border-bottom: solid 3px var(--toucan);
}

.p-menuitem:hover:after {
  transform: scaleX(1);
}

.p-menuitem-link {
  background: transparent !important;
  justify-content: center;
}

.p-menuitem-link:focus {
  box-shadow: none !important;
}

.p-menuitem-icon,
.p-menuitem-text,
.p-submenu-icon {
  color: var(--wren) !important;
}

.p-menuitem-icon.dark-mode,
.p-menuitem-text.dark-mode,
.p-submenu-icon.dark-mode {
  color: var(--cactus-wren) !important;
}

.p-menuitem:hover .p-menuitem-icon,
.p-menuitem:hover .p-menuitem-text,
.p-menuitem:hover .p-submenu-icon {
  color: var(--red-hawk) !important;
  transition: 0.5s !important;
  transform: scale(1.15);
}

.p-menuitem:hover .p-menuitem-icon.dark-mode,
.p-menuitem:hover .p-menuitem-text.dark-mode,
.p-menuitem:hover .p-submenu-icon.dark-mode {
  color: var(--toucan) !important;
}

.menubar-item-active .p-menuitem-icon,
.menubar-item-active .p-menuitem-text,
.menubar-item-active .p-submenu-icon {
  color: var(--red-hawk) !important;
}

.menubar-item-active .p-menuitem-icon.dark-mode,
.menubar-item-active .p-menuitem-text.dark-mode,
.menubar-item-active .p-submenu-icon.dark-mode {
  color: var(--toucan) !important;
}

.p-grid {
  text-align: center;
}

.p-fieldset {
  font-family: "Source Code Pro", Roboto, sans-serif;
  /*background: var(--wren) !important; !* wren *!*/
  background: var(--wren-transparency-75) !important;
  display: flex; /* full width of page */
  /*display: inline-block; !* only width of contents *!*/
  justify-content: space-around;
  text-align: left;
  color: var(--wren);
  border: none !important;
  border-radius: 5px !important;
}

.p-fieldset.dark-mode {
  background: var(--cactus-wren-transparency-75) !important;
  color: var(--cactus-wren);
}

.p-fieldset-legend {
  background: var(--wren) !important;
  color: var(--cactus-wren) !important;
  border-radius: 5px !important;
  border: none !important;
  font-family: "Source Code Pro", Roboto, sans-serif !important;
}

.p-fieldset-legend.dark-mode {
  background: var(--cactus-wren) !important;
  color: var(--wren) !important;
}

.p-card {
  font-family: "Source Code Pro", Roboto, sans-serif !important;
  background: var(--cactus-wren) !important; /* cactus wren */
  color: var(--wren) !important;
  border-radius: 5px !important;
}

.p-card.dark-mode {
  background: var(--wren) !important;
  color: var(--cactus-wren) !important;
}

.p-card-subtitle {
  color: var(--wren-transparency-50) !important;
}

.p-card-subtitle.dark-mode {
  color: var(--cactus-wren-transparency-50) !important;
}

#back-to-top-button {
  background: var(--cactus-wren);
  color: var(--wren);
  border-color: var(--wren);
  z-index: 1;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

#back-to-top-button.dark-mode {
  background: var(--wren);
  color: var(--cactus-wren);
  border-color: var(--cactus-wren);
}

#back-to-top-button:hover {
  background: var(--red-hawk);
  color: var(--cactus-wren);
  border-color: var(--red-hawk);
}

#back-to-top-button.dark-mode:hover {
  background: var(--toucan);
  color: var(--wren);
  border-color: var(--toucan);
}

.p-scrolltop.p-link {
  background: var(--wren-transparency-70) !important;
}

.p-scrolltop.p-link.dark-mode {
  background: var(--cactus-wren-transparency-70) !important;
}

.p-scrolltop.p-link:hover {
  background: var(--wren-transparency-80) !important;
}

.p-scrolltop.p-link.dark-mode:hover {
  background: var(--cactus-wren-transparency-80) !important;
}

.p-scrolltop .p-scrolltop-icon {
  color: var(--cactus-wren) !important;
}

.p-scrolltop .p-scrolltop-icon.dark-mode {
  color: var(--wren) !important;
}

.hide-button {
  display: none !important;
}

.show-button {
  display: inline-flex !important;
}

.p-tooltip.p-tooltip-right .p-tooltip-arrow {
  border-right-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip.p-tooltip-right .p-tooltip-arrow.dark-mode {
  border-right-color: rgba(0, 0, 0, 0.75) !important;
}

.p-tooltip.p-tooltip-left .p-tooltip-arrow {
  border-left-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip.p-tooltip-left .p-tooltip-arrow.dark-mode {
  border-left-color: rgba(0, 0, 0, 0.75) !important;
}

.p-tooltip.p-tooltip-top .p-tooltip-arrow {
  border-top-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip.p-tooltip-top .p-tooltip-arrow.dark-mode {
  border-top-color: rgba(0, 0, 0, 0.75) !important;
}

.p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
  border-bottom-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip.p-tooltip-bottom .p-tooltip-arrow.dark-mode {
  border-bottom-color: rgba(0, 0, 0, 0.75) !important;
}

.p-tooltip-text {
  color: var(--wren) !important;
  background: rgba(256, 256, 256, 0.75) !important;
  text-align: center !important;
}

.p-tooltip-text.dark-mode {
  color: var(--cactus-wren) !important;
  background: rgba(0, 0, 0, 0.75) !important;
}

.footer {
  margin-top: 50px;
  flex-shrink: 0;
  bottom: 0;
  color: var(--wren-transparency-50) !important;
  font-size: 8pt !important;
}

.footer.dark-mode {
  color: var(--cactus-wren-transparency-50) !important;
}

.footer-social-media svg {
  fill: var(--wren-transparency-50) !important;
  width: 25px !important;
  height: 25px !important;
}

.footer-social-media svg.dark-mode {
  fill: var(--cactus-wren-transparency-50) !important;
}

.footer-surprise {
  text-align: right !important;
  float: right !important;
  right: 0 !important;
  bottom: -10px !important;
  color: var(--wren-transparency-25) !important;
  background: transparent !important;
  border: none !important;
  font-size: 6pt !important;
}

.footer-surprise.dark-mode {
  color: var(--cactus-wren-transparency-25) !important;
}

@media (prefers-color-scheme: dark) {
  /* dark mode css */
  body,
  html {
    background: var(--wren);
  }

  body.light-mode,
  html.light-mode {
    background: var(--cactus-wren);
  }

  #app {
    color: var(--cactus-wren);
    background: var(--wren); /* wren */
  }

  #app.light-mode {
    color: var(--wren) !important;
    background: var(--cactus-wren) !important;
  }

  .p-menubar:not(.p-menubar-mobile-active) {
    background: var(--wren) !important;
  }

  .p-menubar:not(.p-menubar-mobile-active).light-mode {
    background: var(--cactus-wren) !important;
  }

  .p-menubar-mobile-active {
    background: var(--wren) !important;
  }

  .p-menubar-mobile-active.light-mode {
    background: var(--cactus-wren) !important;
  }

  .p-menubar-start {
    color: var(--cactus-wren) !important;
    background: var(--wren) !important;
  }

  .p-menubar-start.light-mode {
    color: var(--wren) !important;
    background: var(--cactus-wren) !important;
  }

  .menubar-switch-view-button {
    color: var(--cactus-wren) !important;
  }

  .menubar-switch-view-button.light-mode {
    color: var(--wren) !important;
  }

  .menubar-switch-view-button:hover {
    color: var(--toucan) !important;
  }

  .menubar-switch-view-button.light-mode:hover {
    color: var(--red-hawk) !important;
  }

  .p-menubar-root-list {
    background: var(--wren) !important;
  }

  .p-menubar-root-list.light-mode {
    background: var(--cactus-wren) !important;
  }

  .p-menubar-button {
    color: var(--cactus-wren) !important;
  }

  .p-menubar-button.light-mode {
    color: var(--wren) !important;
  }

  .p-menubar-button:hover {
    color: var(--toucan) !important; /* toucan */
    background: var(--wren) !important;
  }

  .p-menubar-button.light-mode:hover {
    color: var(--red-hawk) !important;
    background: var(--cactus-wren) !important;
  }

  .p-menuitem {
    background: var(--wren);
    color: var(--cactus-wren) !important;
  }

  .p-menuitem.light-mode {
    background: var(--cactus-wren);
    color: var(--wren) !important;
  }

  .p-menuitem:after {
    border-bottom: solid 3px var(--toucan);
  }

  .p-menuitem.light-mode:after {
    border-bottom: solid 3px var(--red-hawk);
  }

  .p-menuitem-icon,
  .p-menuitem-text,
  .p-submenu-icon {
    color: var(--cactus-wren) !important;
  }

  .p-menuitem-icon.light-mode,
  .p-menuitem-text.light-mode,
  .p-submenu-icon.light-mode {
    color: var(--wren) !important;
  }

  .p-menuitem:hover .p-menuitem-icon,
  .p-menuitem:hover .p-menuitem-text,
  .p-menuitem:hover .p-submenu-icon {
    color: var(--toucan) !important;
  }

  .p-menuitem:hover .p-menuitem-icon.light-mode,
  .p-menuitem:hover .p-menuitem-text.light-mode,
  .p-menuitem:hover .p-submenu-icon.light-mode {
    color: var(--red-hawk) !important;
  }

  .menubar-item-active .p-menuitem-icon,
  .menubar-item-active .p-menuitem-text,
  .menubar-item-active .p-submenu-icon {
    color: var(--toucan) !important;
  }

  .menubar-item-active .p-menuitem-icon.light-mode,
  .menubar-item-active .p-menuitem-text.light-mode,
  .menubar-item-active .p-submenu-icon.light-mode {
    color: var(--red-hawk) !important;
  }

  .p-fieldset {
    /*background: var(--cactus-wren); !* cactus wren *!*/
    background: var(--cactus-wren-transparency-75) !important;
    color: var(--cactus-wren);
  }

  .p-fieldset.light-mode {
    background: var(--wren-transparency-75) !important;
    color: var(--wren);
  }

  .p-fieldset-legend {
    background: var(--cactus-wren) !important;
    color: var(--wren) !important;
  }

  .p-fieldset-legend.light-mode {
    background: var(--wren) !important;
    color: var(--cactus-wren) !important;
  }

  .p-card {
    background: var(--wren) !important;
    color: var(--cactus-wren) !important;
  }

  .p-card.light-mode {
    background: var(--cactus-wren) !important;
    color: var(--wren) !important;
  }

  .p-card-subtitle {
    color: var(--cactus-wren-transparency-50) !important;
  }

  .p-card-subtitle.light-mode {
    color: var(--wren-transparency-50) !important;
  }

  #back-to-top-button {
    background: var(--wren);
    color: var(--cactus-wren);
    border-color: var(--cactus-wren);
  }

  #back-to-top-button.light-mode {
    background: var(--cactus-wren);
    color: var(--wren);
    border-color: var(--wren);
  }

  #back-to-top-button:hover {
    background: var(--toucan);
    color: var(--wren);
    border-color: var(--toucan);
  }

  #back-to-top-button.light-mode:hover {
    background: var(--red-hawk);
    color: var(--cactus-wren);
    border-color: var(--red-hawk);
  }

  .p-scrolltop.p-link {
    background: var(--cactus-wren-transparency-70) !important;
  }

  .p-scrolltop.p-link.light-mode {
    background: var(--wren-transparency-70) !important;
  }

  .p-scrolltop.p-link:hover {
    background: var(--cactus-wren-transparency-80) !important;
  }

  .p-scrolltop.p-link.light-mode:hover {
    background: var(--wren-transparency-80) !important;
  }

  .p-scrolltop .p-scrolltop-icon {
    color: var(--wren) !important;
  }

  .p-scrolltop .p-scrolltop-icon.light-mode {
    color: var(--cactus-wren) !important;
  }

  .p-tooltip.p-tooltip-right .p-tooltip-arrow {
    border-right-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip.p-tooltip-right .p-tooltip-arrow.light-mode {
    border-right-color: rgba(256, 256, 256, 0.75) !important;
  }

  .p-tooltip.p-tooltip-left .p-tooltip-arrow {
    border-left-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip.p-tooltip-left .p-tooltip-arrow.light-mode {
    border-left-color: rgba(256, 256, 256, 0.75) !important;
  }

  .p-tooltip.p-tooltip-top .p-tooltip-arrow {
    border-top-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip.p-tooltip-top .p-tooltip-arrow.light-mode {
    border-top-color: rgba(256, 256, 256, 0.75) !important;
  }

  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
    border-bottom-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow.light-mode {
    border-bottom-color: rgba(256, 256, 256, 0.75) !important;
  }

  .p-tooltip-text {
    color: var(--cactus-wren) !important;
    background: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip-text.light-mode {
    color: var(--wren) !important;
    background: rgba(256, 256, 256, 0.75) !important;
  }

  .footer {
    color: var(--cactus-wren-transparency-50) !important;
  }

  .footer.light-mode {
    color: var(--wren-transparency-50) !important;
  }

  .footer-social-media svg {
    fill: var(--cactus-wren-transparency-50) !important;
    width: 25px !important;
    height: 25px !important;
  }

  .footer-social-media svg.light-mode {
    fill: var(--wren-transparency-50) !important;
  }

  .footer-surprise {
    color: var(--cactus-wren-transparency-25) !important;
  }

  .footer-surprise.light-mode {
    color: var(--wren-transparency-25) !important;
  }
}
</style>
