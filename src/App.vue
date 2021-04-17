<template>
  <div id="app">
    <TabMenu :model="items" />
    <router-view />
    <!--    <Home msg="Welcome to the future home of Wrencode, LLC!" />-->
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
import TabMenu from "primevue/tabmenu";

export default {
  name: "App",
  components: {
    TabMenu,
    // Home,
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: "/about",
        },
        {
          label: "Services",
          icon: "pi pi-fw pi-user-edit",
          to: "/services",
        },
        {
          label: "Clients",
          icon: "pi pi-fw pi-globe",
          to: "/clients",
        },
        {
          label: "Contact",
          icon: "pi pi-fw pi-envelope",
          to: "/contact",
        },
      ],
    };
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

/* light mode css */
body,
html {
  background: #ffffff;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

#app {
  color: #4a4139;
  background: #ffffff;
}

.p-tabmenuitem:not(.p-highlight) {
  background: #ffffff !important;
  color: #4a4139 !important;
}

.p-menuitem-icon,
.p-menuitem-text,
.p-submenu-icon {
  color: #4a4139 !important;
}

#app {
  font-family: "Source Code Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.p-tabmenu {
  position: absolute;
  top: 0;
  width: 100%;
  border: 0 !important;
  /*background: white !important;*/
  display: flex;
  justify-content: space-around;
}

.p-tabmenu-nav {
  width: 100% !important;
  border: 0 !important;
  display: flex;
  justify-content: space-around;
}

.p-tabmenuitem {
  display: inline-flex !important;
  /*border-radius: 0 0 10px 10px !important;*/
  border-radius: 0 0 0 0 !important;
  /*background: transparent !important;*/
}

.p-menuitem-link {
  background: transparent !important;
}

.p-highlight {
  transition: none !important;
}

.p-tabmenuitem.p-highlight .p-menuitem-text,
.p-tabmenuitem.p-highlight .p-menuitem-icon {
  color: saddlebrown !important;
}

.p-tabmenuitem:not(.p-highlight):hover .p-menuitem-text,
.p-tabmenuitem:not(.p-highlight):hover .p-menuitem-icon {
  color: saddlebrown !important;
}

.p-tabmenu .p-tabmenu-nav li .p-menuitem-link {
  transition: background-color 0.2s;
  border-radius: 0;
}
.p-tabmenu .p-tabmenu-nav li .p-menuitem-link > .p-ink {
  background-color: rgba(206, 147, 216, 0.16);
}
.p-tabmenu .p-tabmenu-nav li .p-menuitem-link:focus {
  background-color: rgba(206, 147, 216, 0.12);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenu-ink-bar {
  display: block;
  position: absolute;
  bottom: 0;
  height: 4px !important;
  background-color: saddlebrown !important;
  transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
}

/*.p-menuitem {*/
/*  background: #4a4139;*/
/*  color: #ffffff !important;*/
/*}*/

/*.p-menuitem-icon,*/
/*.p-menuitem-text,*/
/*.p-submenu-icon {*/
/*  color: #ffffff !important;*/
/*}*/

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

  #app {
    color: rgba(255, 255, 255, 60);
    background: #4a4139;
  }

  .p-tabmenuitem:not(.p-highlight) {
    background: #4a4139 !important;
    color: #eeeeee !important;
  }

  .p-menuitem-icon,
  .p-menuitem-text,
  .p-submenu-icon {
    color: #eeeeee !important;
  }

  .p-tabmenuitem.p-highlight .p-menuitem-text,
  .p-tabmenuitem.p-highlight .p-menuitem-icon {
    color: lightsalmon !important;
  }

  .p-tabmenuitem:not(.p-highlight):hover .p-menuitem-text,
  .p-tabmenuitem:not(.p-highlight):hover .p-menuitem-icon {
    color: lightsalmon !important;
    transition: 0.5s !important;
  }

  .p-tabmenu .p-tabmenu-nav .p-tabmenu-ink-bar {
    display: block;
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: lightsalmon !important;
    transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
  }
}
</style>
