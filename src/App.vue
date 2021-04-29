<template>
  <div id="app">
    <Menubar :model="items">
      <template #start>
        <a href="/">
          <WrencodeLogo class="menubar-logo" />
        </a>
        <p class="menubar-title">Wrencode, LLC</p>
        <div id="menubar-switch-view-button-filler" />
        <Button
          label="Show Desktop View"
          id="menubar-desktop-view-button"
          class="p-button-icon-only p-button-rounded menubar-switch-view-button"
          @click="showDesktopView"
          v-tooltip.top="'Show Desktop View'"
        >
          <i class="pi pi-desktop"></i>
        </Button>
        <Button
          label="Show Mobile View"
          id="menubar-mobile-view-button"
          class="p-button-icon-only p-button-rounded menubar-switch-view-button hide-button"
          @click="showMobileView"
          v-tooltip.top="'Show Mobile View'"
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
    <router-view :surprise="surprise" :resetSurprise="resetSurprise" />
  </div>
  <Button
    label="Back to Top"
    id="back-to-top-button"
    class="p-button-icon-only p-button-rounded p-button-outlined hide-button"
    @click="onClick"
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
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import WrencodeLogo from "@/components/svg/wrencode-logo";
import SocialMedia from "@/components/svg/social-media";

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
  "a",
];
let keySequence = [];

export default {
  name: "App",
  components: {
    SocialMedia,
    Menubar,
    Button,
    WrencodeLogo,
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("keydown", this.freezeScroll);
    window.addEventListener("keyup", this.konami);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("keydown", this.freezeScroll);
    window.removeEventListener("keyup", this.konami);
  },
  methods: {
    onClick() {
      // let rootElement = document.documentElement;

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // rootElement.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
    },
    onScroll() {
      let rootElement = document.documentElement;
      let backToTopButton = document.getElementById("back-to-top-button");

      console.log("scroll height:", rootElement.scrollHeight);
      console.log("client height:", rootElement.clientHeight);
      console.log("scroll top:", rootElement.scrollTop);

      // if (rootElement.scrollHeight > rootElement.clientHeight + 300) {
      if (rootElement.scrollTop > 65) {
        backToTopButton.classList.remove("hide-button");
        backToTopButton.classList.add("show-button");
      } else {
        backToTopButton.classList.remove("show-button");
        backToTopButton.classList.add("hide-button");
      }
    },
    onMenubarItemClick(menubarItemName) {
      this.hideBackToTopButton();
      this.makeMenubarItemActive(menubarItemName);
    },
    hideBackToTopButton() {
      let backToTopButton = document.getElementById("back-to-top-button");
      backToTopButton.classList.remove("show-button");
      backToTopButton.classList.add("hide-button");
    },
    makeMenubarItemActive(menubarItemName) {
      let menubarItems = document.getElementsByClassName("menubar-item");
      for (let menubarItem of menubarItems) {
        menubarItem.classList.remove("menubar-item-active");
      }

      let selectedMenubarItem = document
        .getElementsByClassName(`menubar-item-${menubarItemName}`)
        .item(0);
      selectedMenubarItem.classList.add("menubar-item-active");
    },
    // isCompact() {
    //   return window.matchMedia("(max-width: 960px)");
    // },
    showDesktopView() {
      let menubarDesktopViewButton = document.getElementById(
        "menubar-desktop-view-button"
      );
      menubarDesktopViewButton.classList.add("hide-button");
      let menubarMobileViewButton = document.getElementById(
        "menubar-mobile-view-button"
      );
      menubarMobileViewButton.classList.remove("hide-button");

      let app = document.getElementById("app");
      app.style.minWidth = "960px";

      document.getElementsByClassName("p-menubar").forEach((elem) => {
        elem.style.position = "absolute";
        elem.style.minWidth = "960px";
        elem.style.padding = "0.5rem";
      });
      document
        .getElementsByClassName("p-menubar-button")
        .forEach((elem) => (elem.style.display = "none"));
      document.getElementsByClassName("p-menubar-root-list").forEach((elem) => {
        elem.style.position = "relative";
        elem.style.display = "inline-flex";
        elem.style.boxShadow = "none";
      });
      document
        .getElementsByClassName("p-menuitem")
        .forEach((elem) => (elem.style.width = "initial"));
    },
    showMobileView() {
      let menubarDesktopViewButton = document.getElementById(
        "menubar-desktop-view-button"
      );
      menubarDesktopViewButton.classList.remove("hide-button");
      let menubarMobileViewButton = document.getElementById(
        "menubar-mobile-view-button"
      );
      menubarMobileViewButton.classList.add("hide-button");

      let app = document.getElementById("app");
      app.style.removeProperty("min-width");

      document.getElementsByClassName("p-menubar").forEach((elem) => {
        elem.style.removeProperty("position");
        elem.style.removeProperty("min-width");
        elem.style.removeProperty("padding");
      });
      document
        .getElementsByClassName("p-menubar-button")
        .forEach((elem) => elem.style.removeProperty("display"));
      document.getElementsByClassName("p-menubar-root-list").forEach((elem) => {
        elem.style.removeProperty("position");
        elem.style.removeProperty("display");
        elem.style.removeProperty("box-shadow");
      });
      document
        .getElementsByClassName("p-menuitem")
        .forEach((elem) => elem.style.removeProperty("width"));
    },
    getYear() {
      return new Date().getFullYear();
    },
    freezeScroll(e) {
      if (
        keySequence[0] === "ArrowUp" &&
        keySequence[1] === "ArrowUp" &&
        e.key === "ArrowDown"
      ) {
        e.preventDefault();
      }
    },
    konami(e) {
      keySequence.push(e.key);

      let keySequenceStr = keySequence.join("");
      let konamiSliceStr = konamiCode.slice(0, keySequence.length).join("");

      if (keySequenceStr === konamiCode.join("")) {
        this.activateSurprise();
      } else if (keySequenceStr === konamiSliceStr) {
        // pass
      } else {
        if (e.key === "ArrowUp") {
          keySequence = ["ArrowUp"];
        } else {
          keySequence = [];
        }
      }
    },
    activateSurprise() {
      this.surprise = true;
    },
    resetSurprise() {
      this.surprise = false;
    },
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
          command: this.onMenubarItemClick.bind(this, "home"),
          class: "menubar-item menubar-item-home",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: "/about",
          command: this.onMenubarItemClick.bind(this, "about"),
          class: "menubar-item menubar-item-about",
        },
        {
          label: "Services",
          icon: "pi pi-fw pi-user-edit",
          to: "/services",
          command: this.onMenubarItemClick.bind(this, "services"),
          class: "menubar-item menubar-item-services",
        },
        {
          label: "Clients",
          icon: "pi pi-fw pi-globe",
          to: "/clients",
          command: this.onMenubarItemClick.bind(this, "clients"),
          class: "menubar-item menubar-item-clients",
        },
        {
          label: "Contact",
          icon: "pi pi-fw pi-envelope",
          to: "/contact",
          command: this.onMenubarItemClick.bind(this, "contact"),
          class: "menubar-item menubar-item-contact",
        },
      ],
      surprise: false,
    };
  },
  computed: {
    isHome() {
      return this.$route.name === "Home";
    },
  },
};
</script>

<!--suppress CssUnusedSymbol -->
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

root {
  font-family: "Source Code Pro", Roboto, sans-serif;
}

body,
html {
  background: #aba18c; /* cactus wren */
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

#app {
  color: #4a4139;
  font-weight: 600;
  font-size: 14pt;
  background: #aba18c;
  font-family: "Source Code Pro", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 20px 10px;
  text-align: center;
  min-height: 80vh;
  flex: 1 0 auto;
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
}

.p-menubar:not(.p-menubar-mobile-active) {
  background: #aba18c !important;
  position: absolute;
  top: 0;
  border: 0 !important;
  /*justify-content: space-around;*/
}

.p-menubar-mobile-active {
  background: #aba18c !important;
  position: absolute !important;
  top: 0;
  width: 100%;
  border: 0 !important;
  display: flex;
  justify-content: space-between;
}

.p-menubar-start {
  font-family: "Source Code Pro", Roboto, sans-serif;
  color: #4a4139 !important;
  background: #aba18c !important;
  min-width: 215px !important;
  width: 215px !important;
  white-space: nowrap;
  font-weight: 600 !important;
  display: block !important;
  margin-right: 20px !important;
  justify-content: left !important;
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

#menubar-switch-view-button-filler {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  width: 2.357rem;
}

.menubar-switch-view-button {
  display: none !important;
  margin-left: 10px !important;
  background: transparent !important;
  border: none !important;
  color: #4a4139 !important;
  vertical-align: middle !important;
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
  background: #aba18c !important;
  width: 100% !important;
  border: 0 !important;
  display: inline-flex;
}

@media screen and (max-width: 960px) {
  .p-menubar-mobile-active .p-menubar-root-list {
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.25) !important;
  }
}

.p-menubar-button {
  color: #4a4139 !important;
}

.p-menubar-button:focus {
  box-shadow: none !important;
}

.p-menubar-button:hover {
  color: #7e3227 !important; /* red hawk */
  background: #aba18c !important;
  transition: 0.5s !important;
  transform: scale(1.25);
}

.p-menuitem {
  background: transparent !important;
  color: #4a4139 !important;
  font-family: "Source Code Pro", Roboto, sans-serif;
}

.p-menuitem:after {
  display: block;
  content: "";
  border-bottom: solid 3px #7e3227;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
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
  color: #4a4139 !important;
}

.p-menuitem:hover .p-menuitem-icon,
.p-menuitem:hover .p-menuitem-text,
.p-menuitem:hover .p-submenu-icon {
  color: #7e3227 !important;
  transition: 0.5s !important;
  transform: scale(1.15);
}

.menubar-item-active .p-menuitem-icon,
.menubar-item-active .p-menuitem-text,
.menubar-item-active .p-submenu-icon {
  color: #7e3227 !important;
}

.p-grid {
  text-align: center;
}

.p-fieldset {
  font-family: "Source Code Pro", Roboto, sans-serif;
  /*background: #4a4139 !important; !* wren *!*/
  background: rgba(74, 65, 57, 0.75) !important; /* wren */
  display: flex; /* full width of page */
  /*display: inline-block; !* only width of contents *!*/
  justify-content: space-around;
  text-align: left;
  color: #4a4139;
  border: none !important;
  border-radius: 5px !important;
}

.p-fieldset-legend {
  background: #4a4139 !important;
  color: #aba18c !important;
  border-radius: 5px !important;
  border: none !important;
  font-family: "Source Code Pro", Roboto, sans-serif !important;
}

.p-card {
  font-family: "Source Code Pro", Roboto, sans-serif !important;
  background: #aba18c !important; /* cactus wren */
  color: #4a4139 !important;
  border-radius: 5px !important;
}

.p-card-subtitle {
  color: rgba(74, 65, 57, 0.5) !important; /* wren */
}

#back-to-top-button {
  background: #aba18c;
  color: #4a4139;
  border-color: #4a4139;
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

#back-to-top-button:hover {
  background: #7e3227;
  color: #aba18c;
  border-color: #7e3227;
}

.p-scrolltop.p-link {
  background: rgba(74, 65, 57, 0.7) !important;
}

.p-scrolltop.p-link:hover {
  background: rgba(74, 65, 57, 0.8) !important;
}

.p-scrolltop .p-scrolltop-icon {
  color: #aba18c !important;
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

.p-tooltip.p-tooltip-left .p-tooltip-arrow {
  border-left-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip.p-tooltip-top .p-tooltip-arrow {
  border-top-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
  border-bottom-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip-text {
  color: #4a4139 !important;
  background: rgba(256, 256, 256, 0.75) !important;
  text-align: center !important;
}

.footer {
  margin-top: 50px;
  flex-shrink: 0;
  bottom: 0;
  color: rgba(74, 65, 57, 0.5);
  font-size: 8pt !important;
}

.footer-social-media svg {
  fill: rgba(74, 65, 57, 0.5) !important;
  width: 25px !important;
  height: 25px !important;
}

.footer-surprise {
  text-align: right !important;
  float: right !important;
  right: 0 !important;
  bottom: 0 !important;
  color: rgba(74, 65, 57, 0.25) !important;
  background: transparent !important;
  border: none !important;
  font-size: 6pt !important;
}

@media (prefers-color-scheme: dark) {
  /* dark mode css */
  body,
  html {
    background: #4a4139;
  }

  #app {
    color: #aba18c;
    background: #4a4139; /* wren */
  }

  .p-menubar:not(.p-menubar-mobile-active) {
    background: #4a4139 !important;
  }

  .p-menubar-mobile-active {
    background: #4a4139 !important;
  }

  .p-menubar-start {
    color: #aba18c !important;
    background: #4a4139 !important;
  }

  .menubar-switch-view-button {
    color: #aba18c !important;
  }

  .p-menubar-root-list {
    background: #4a4139 !important;
  }

  .p-menubar-button {
    color: #aba18c !important;
  }

  .p-menubar-button:hover {
    color: #f09651 !important; /* toucan */
    background: #4a4139 !important;
  }

  .p-menuitem {
    background: #4a4139;
    color: #aba18c !important;
  }

  .p-menuitem:after {
    border-bottom: solid 3px #f09651;
  }

  .p-menuitem-icon,
  .p-menuitem-text,
  .p-submenu-icon {
    color: #aba18c !important;
  }

  .p-menuitem:hover .p-menuitem-icon,
  .p-menuitem:hover .p-menuitem-text,
  .p-menuitem:hover .p-submenu-icon {
    color: #f09651 !important;
  }

  .menubar-item-active .p-menuitem-icon,
  .menubar-item-active .p-menuitem-text,
  .menubar-item-active .p-submenu-icon {
    color: #f09651 !important;
  }

  .p-fieldset {
    /*background: #aba18c; !* cactus wren *!*/
    background: rgba(171, 161, 140, 0.75) !important;
    color: #aba18c;
  }

  .p-fieldset-legend {
    background: #aba18c !important;
    color: #4a4139 !important;
  }

  .p-card {
    background: #4a4139 !important;
    color: #aba18c !important;
  }

  .p-card-subtitle {
    color: rgba(171, 161, 140, 0.5) !important; /* wren */
  }

  #back-to-top-button {
    background: #4a4139;
    color: #aba18c;
    border-color: #aba18c;
  }

  #back-to-top-button:hover {
    background: #f09651;
    color: #4a4139;
    border-color: #f09651;
  }

  .p-scrolltop.p-link {
    background: rgba(171, 161, 140, 0.7) !important;
  }

  .p-scrolltop.p-link:hover {
    background: rgba(171, 161, 140, 0.8) !important;
  }

  .p-scrolltop .p-scrolltop-icon {
    color: #4a4139 !important;
  }

  .p-tooltip.p-tooltip-right .p-tooltip-arrow {
    border-right-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip.p-tooltip-left .p-tooltip-arrow {
    border-left-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip.p-tooltip-top .p-tooltip-arrow {
    border-top-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
    border-bottom-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip-text {
    color: #aba18c !important;
    background: rgba(0, 0, 0, 0.75) !important;
  }

  .footer {
    color: rgba(171, 161, 140, 0.5);
  }

  .footer-social-media svg {
    fill: rgba(171, 161, 140, 0.5) !important;
    width: 25px !important;
    height: 25px !important;
  }

  .footer-surprise {
    color: rgba(171, 161, 140, 0.25) !important;
  }
}
</style>
