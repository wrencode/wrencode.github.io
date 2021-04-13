<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      Wrencode, LLC focuses on the implementation and optimization of modern
      technology to help you soar to new heights!
    </p>
    <h3>Find Wrencode at:</h3>
    <ul>
      <li>
        <a href="https://github.com/wrencode" target="_blank" rel="noopener">
          <picture>
            <source
              srcset="../assets/images/social-media/github-square-ffffff.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../assets/images/social-media/github-square-4a4139.svg"
              alt="Wrencode on GitHub"
              width="75"
              height="75"
            />
          </picture>
        </a>
        <a
          href="https://www.linkedin.com/company/wrencode"
          target="_blank"
          rel="noopener"
        >
          <picture>
            <source
              srcset="../assets/images/social-media/linkedin-square-ffffff.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../assets/images/social-media/linkedin-square-4a4139.svg"
              alt="Wrencode on LinkedIn"
              width="75"
              height="75"
            />
          </picture>
        </a>
        <a href="https://twitter.com/wrencode" target="_blank" rel="noopener">
          <picture>
            <source
              srcset="../assets/images/social-media/twitter-square-ffffff.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../assets/images/social-media/twitter-square-4a4139.svg"
              alt="Wrencode on Twitter"
              width="75"
              height="75"
            />
          </picture>
        </a>
        <a
          href="https://www.facebook.com/wrencode"
          target="_blank"
          rel="noopener"
        >
          <picture>
            <source
              srcset="../assets/images/social-media/facebook-square-ffffff.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../assets/images/social-media/facebook-square-4a4139.svg"
              alt="Wrencode on Facebook"
              width="75"
              height="75"
            />
          </picture>
        </a>
        <a
          href="https://www.instagram.com/wrencode_llc"
          target="_blank"
          rel="noopener"
        >
          <picture>
            <source
              srcset="../assets/images/social-media/instagram-square-ffffff.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../assets/images/social-media/instagram-square-4a4139.svg"
              alt="Wrencode on Instagram"
              width="75"
              height="75"
            />
          </picture>
        </a>
        <a
          href="https://www.reddit.com/user/wrencode"
          target="_blank"
          rel="noopener"
        >
          <picture>
            <source
              srcset="../assets/images/social-media/reddit-square-ffffff.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../assets/images/social-media/reddit-square-4a4139.svg"
              alt="Wrencode on Reddit"
              width="75"
              height="75"
            />
          </picture>
        </a>
        <a
          href="https://www.youtube.com/channel/UCyg5T3IhUCZai0AXhmYeeRw"
          target="_blank"
          rel="noopener"
        >
          <picture>
            <source
              srcset="../assets/images/social-media/youtube-square-ffffff.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="../assets/images/social-media/youtube-square-4a4139.svg"
              alt="Wrencode on YouTube"
              width="75"
              height="75"
            />
          </picture>
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
  color: #4a4139;
  margin: 5px;
}
</style>
