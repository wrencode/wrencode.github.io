<template>
  <div id="app">
    <Menubar :model="items" />
    <br />
    <router-view :surprise="surprise" :resetSurprise="resetSurprise" />
    <br />
    <Button
      label="Back to Top"
      id="back-to-top-button"
      class="p-button-icon-only p-button-rounded p-button-outlined hide-button"
      @click="onClick"
      v-tooltip.top="'Back to Top'"
    >
      <i class="pi pi-arrow-up"></i>
    </Button>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
import Button from "primevue/button";

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
    Menubar,
    Button,
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

      // console.log("scroll height:", rootElement.scrollHeight)
      // console.log("client height:", rootElement.clientHeight)
      // console.log("scroll top:", rootElement.scrollTop)

      if (rootElement.scrollHeight > rootElement.clientHeight + 100) {
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
  min-height: 100%;
}

#app {
  color: #4a4139;
  font-weight: 600;
  font-size: 14pt;
  background: #aba18c;
  font-family: "Source Code Pro", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 50px 10px;
  text-align: center;
}

.p-menubar:not(.p-menubar-mobile-active) {
  background: #aba18c !important;
  position: absolute;
  top: 0;
  width: 25%;
  border: 0 !important;
  display: flex;
  /*justify-content: space-around;*/
}

.p-menubar-mobile-active {
  background: #aba18c !important;
  position: absolute !important;
  top: 0;
  width: 50%;
  border: 0 !important;
  display: flex;
  /*justify-content: space-around;*/
}

.p-menubar-root-list {
  background: #aba18c !important;
  width: 100% !important;
  border: 0 !important;
  display: inline-flex;
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
}

#back-to-top-button:hover {
  background: #7e3227;
  color: #aba18c;
  border-color: #7e3227;
}

.hide-button {
  display: none !important;
}

.show-button {
  display: inline-flex !important;
}

.p-tooltip.p-tooltip-top .p-tooltip-arrow {
  border-top-color: rgba(256, 256, 256, 0.75) !important;
}

.p-tooltip-text {
  color: #4a4139 !important;
  background: rgba(256, 256, 256, 0.75) !important;
  text-align: center !important;
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

  .p-menubar-root-list {
    background: #4a4139 !important;
  }

  .p-menubar-button {
    color: #aba18c !important;
  }

  .p-menubar-button:hover {
    color: #f09651 !important; /* toucan */
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

  .p-tooltip.p-tooltip-top .p-tooltip-arrow {
    border-top-color: rgba(0, 0, 0, 0.75) !important;
  }

  .p-tooltip-text {
    color: #aba18c !important;
    background: rgba(0, 0, 0, 0.75) !important;
  }
}
</style>
