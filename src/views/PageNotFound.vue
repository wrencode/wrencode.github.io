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
};
</script>

<style scoped>
.page-not-found {
  text-align: center;
  border-style: solid;
  border-width: 4px;
  border-color: #4a4139;
  border-radius: 5px;
}

a {
  color: #4a4139;
}

a:hover {
  color: #7e3227;
}

@media (prefers-color-scheme: dark) {
  .page-not-found {
    border-color: #aba18c;
  }

  a {
    color: #aba18c;
  }

  a:hover {
    color: #f09651;
  }
}
</style>
