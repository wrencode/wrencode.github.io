<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      Wrencode, LLC focuses on the implementation and optimization of modern
      technology to help you soar to new heights!
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/company/wrencode/"
          target="_blank"
          rel="noopener"
        >
          Wrencode, LLC on LinkedIn!
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
