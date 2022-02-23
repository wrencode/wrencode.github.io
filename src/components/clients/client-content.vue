<template>
  <div class="container">
    <p :key="index" v-for="(paragraph, index) in contents.description">
      <i>{{ paragraph }}</i>
    </p>
    <p><b>Completed & Ongoing Projects</b></p>
    <ul>
      <li :key="index" v-for="(project, index) in contents.projects">
        {{ project.name }}
        <ul>
          <li :key="index" v-for="(task, index) in project.tasks">
            {{ task }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClientContent",
  props: {
    contents: Object
  }
}
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
  /*padding-top: 70%;*/
  text-align: center;
}

.p-card-content p {
  text-align: left;
}

ul {
  text-align: left;
  margin-top: 0.5em;
}

li {
  margin-bottom: 0.5em;
}
</style>
