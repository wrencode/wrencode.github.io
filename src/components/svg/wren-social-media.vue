<template>
  <ul>
    <li>
      <a href="mailto:wren@wrencode.com" target="_blank" rel="noopener" v-tooltip.bottom="'Email Wren'">
        <svg class="email-circle" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/email-circle.svg#email-circle" />
        </svg>
      </a>
      <a href="https://github.com/uberfastman" target="_blank" rel="noopener" v-tooltip.bottom="'Wren on GitHub'">
        <svg class="github-circle" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/github-circle.svg#github-circle" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/wren-rudolph/"
        target="_blank"
        rel="noopener"
        v-tooltip.bottom="'Wren on LinkedIn'"
      >
        <svg class="linkedin-circle" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/linkedin-circle.svg#linkedin-circle" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WrenSocialMedia"
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
}

svg {
  fill: var(--wren);
  width: 75px;
  height: 75px;
  transition: transform 0.2s; /* Animation */
}

svg.dark-mode {
  fill: var(--cactus-wren);
}

svg:hover {
  fill: var(--red-hawk);
  transform: scale(1.25); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

svg.dark-mode:hover {
  fill: var(--toucan);
}

@media (prefers-color-scheme: dark) {
  svg use {
    fill: var(--cactus-wren);
  }

  svg.light-mode use {
    fill: var(--wren);
  }

  svg:hover use {
    fill: var(--toucan);
  }

  svg.light-mode:hover use {
    fill: var(--red-hawk);
  }
}
</style>
