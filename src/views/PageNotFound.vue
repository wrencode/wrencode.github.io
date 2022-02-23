<!--suppress HtmlUnknownTarget -->
<template>
  <div class="page-not-found">
    <h1>Oops... 404!</h1>
    <h2>
      It looks like the page you're looking for does not exist... please contact
      <a href="/contact">Wren Rudolph</a> with any questions.
    </h2>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  props: {
    setMode: Function
  },
  mounted() {
    this.setMode()
  }
}
</script>

<style scoped>
.page-not-found {
  text-align: center;
  border-style: solid;
  border-width: 4px;
  border-color: var(--wren);
  border-radius: 5px;
}

.page-not-found.dark-mode {
  border-color: var(--cactus-wren);
}

a {
  color: var(--wren);
}

a.dark-mode {
  color: var(--cactus-wren);
}

a:hover {
  color: var(--red-hawk);
}

a.dark-mode:hover {
  color: var(--toucan);
}

@media (prefers-color-scheme: dark) {
  .page-not-found {
    border-color: var(--cactus-wren);
  }

  .page-not-found.light-mode {
    border-color: var(--wren);
  }

  a {
    color: var(--cactus-wren);
  }

  a.light-mode {
    color: var(--wren);
  }

  a:hover {
    color: var(--toucan);
  }

  a.light-mode:hover {
    color: var(--red-hawk);
  }
}
</style>
