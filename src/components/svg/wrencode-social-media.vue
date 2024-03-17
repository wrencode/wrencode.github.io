<!--suppress XmlUnusedNamespaceDeclaration, HtmlUnknownAttribute -->
<template>
  <ul>
    <li>
      <a href="https://github.com/wrencode" target="_blank" rel="noopener" v-tooltip.bottom="'Wrencode on GitHub'">
        <svg class="github-square" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/github-square.svg#github-square" />
          Wrencode on GitHub
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/wrencode"
        target="_blank"
        rel="noopener"
        v-tooltip.bottom="'Wrencode on LinkedIn'"
      >
        <svg class="linkedin-square" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/linkedin-square.svg#linkedin-square" />
          Wrencode on LinkedIn
        </svg>
      </a>
      <a href="https://x.com/wrencode" target="_blank" rel="noopener" v-tooltip.bottom="'Wrencode on X'">
        <svg class="x-square" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/x-square.svg#x-square" />
          Wrencode on X
        </svg>
      </a>
      <a
        href="https://www.facebook.com/wrencode"
        target="_blank"
        rel="noopener"
        v-tooltip.bottom="'Wrencode on Facebook'"
      >
        <svg class="facebook-square" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/facebook-square.svg#facebook-square" />
          Wrencode on Facebook
        </svg>
      </a>
      <a
        href="https://www.instagram.com/wrencode_llc"
        target="_blank"
        rel="noopener"
        v-tooltip.bottom="'Wrencode on Instagram'"
      >
        <svg class="instagram-square" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/instagram-square.svg#instagram-square" />
          Wrencode on Instagram
        </svg>
      </a>
      <a
        href="https://www.reddit.com/user/wrencode"
        target="_blank"
        rel="noopener"
        v-tooltip.bottom="'Wrencode on Reddit'"
      >
        <svg class="reddit-square" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/reddit-square.svg#reddit-square" />
          Wrencode on Reddit
        </svg>
      </a>
      <a
        href="https://www.youtube.com/channel/UCyg5T3IhUCZai0AXhmYeeRw"
        target="_blank"
        rel="noopener"
        v-tooltip.bottom="'Wrencode on YouTube'"
      >
        <svg class="youtube-square" viewBox="0 0 500 500">
          <use xlink:href="@/assets/images/social-media/youtube-square.svg#youtube-square" />
          Wrencode on YouTube
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WrencodeSocialMedia"
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #4a4139;
  margin: 5px;
}

a.dark-mode {
  color: #aba18c;
}

svg {
  fill: #4a4139;
  width: 75px;
  height: 75px;
  transition: transform 0.2s; /* Animation */
}

svg.dark-mode {
  fill: #aba18c;
}

svg:hover {
  fill: #7e3227;
  transform: scale(1.25); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

svg.dark-mode:hover {
  fill: #f09651;
}

@media (prefers-color-scheme: dark) {
  svg use {
    fill: #aba18c;
  }

  svg.light-mode use {
    fill: #4a4139;
  }

  svg:hover use {
    fill: #f09651;
  }

  svg.light-mode:hover use {
    fill: #7e3227;
  }
}
</style>
