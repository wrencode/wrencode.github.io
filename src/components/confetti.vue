<!-- Code snippets from: https://forum.webflow.com/t/add-falling-confetti-with-css/103687 -->
<template>
  <div class="confetti">
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
    <div class="confetto" />
  </div>
</template>

<script>
export default {
  name: "Confetti"
}
</script>

<style scoped>
.confetti {
  width: 100%;
  height: 100%;
}

.confetto {
  width: 15px;
  height: 15px;
  background-color: #f2d74e;
  position: absolute;
  left: 50%;
  animation: confetti 5s ease-in-out -2s infinite;
  transform-origin: left top;
}

.confetto:nth-child(1) {
  background-color: #f2d74e;
  left: 2%;
  animation-delay: 0s;
}

.confetto:nth-child(2) {
  background-color: #95c3de;
  left: 12%;
  animation-delay: -5s;
}

.confetto:nth-child(3) {
  background-color: #ff9a91;
  left: 22%;
  animation-delay: -3s;
}

.confetto:nth-child(4) {
  background-color: #f2d74e;
  left: 32%;
  animation-delay: -2.5s;
}

.confetto:nth-child(5) {
  background-color: #95c3de;
  left: 42%;
  animation-delay: -4s;
}

.confetto:nth-child(6) {
  background-color: #ff9a91;
  left: 52%;
  animation-delay: -6s;
}

.confetto:nth-child(7) {
  background-color: #f2d74e;
  left: 62%;
  animation-delay: -1.5s;
}

.confetto:nth-child(8) {
  background-color: #95c3de;
  left: 72%;
  animation-delay: -2s;
}

.confetto:nth-child(9) {
  background-color: #ff9a91;
  left: 82%;
  animation-delay: -3.5s;
}

.confetto:nth-child(10) {
  background-color: #f2d74e;
  left: 92%;
  animation-delay: -2.5s;
}

.confetto:nth-child(12) {
  background-color: #f2d74e;
  left: 4%;
  animation-delay: 0.8s;
}

.confetto:nth-child(14) {
  background-color: #95c3de;
  left: 14%;
  animation-delay: -5.8s;
}

.confetto:nth-child(16) {
  background-color: #ff9a91;
  left: 24%;
  animation-delay: -3.8s;
}

.confetto:nth-child(18) {
  background-color: #f2d74e;
  left: 34%;
  animation-delay: -3.3s;
}

.confetto:nth-child(20) {
  background-color: #95c3de;
  left: 44%;
  animation-delay: -4.8s;
}

.confetto:nth-child(19) {
  background-color: #ff9a91;
  left: 54%;
  animation-delay: -6.8s;
}

.confetto:nth-child(17) {
  background-color: #f2d74e;
  left: 64%;
  animation-delay: -2.3s;
}

.confetto:nth-child(15) {
  background-color: #95c3de;
  left: 74%;
  animation-delay: -2.8s;
}

.confetto:nth-child(13) {
  background-color: #ff9a91;
  left: 84%;
  animation-delay: -4.3s;
}

.confetto:nth-child(11) {
  background-color: #f2d74e;
  left: 94%;
  animation-delay: -3.3s;
}

.confetto:nth-child(21) {
  background-color: #f2d74e;
  left: 6%;
  animation-delay: 0.4s;
}

.confetto:nth-child(22) {
  background-color: #95c3de;
  left: 16%;
  animation-delay: -5.4s;
}

.confetto:nth-child(23) {
  background-color: #ff9a91;
  left: 26%;
  animation-delay: -3.4s;
}

.confetto:nth-child(24) {
  background-color: #f2d74e;
  left: 36%;
  animation-delay: -2.9s;
}

.confetto:nth-child(25) {
  background-color: #95c3de;
  left: 46%;
  animation-delay: -4.4s;
}

.confetto:nth-child(26) {
  background-color: #ff9a91;
  left: 56%;
  animation-delay: -6.4s;
}

.confetto:nth-child(27) {
  background-color: #f2d74e;
  left: 66%;
  animation-delay: -1.9s;
}

.confetto:nth-child(28) {
  background-color: #95c3de;
  left: 76%;
  animation-delay: -2.4s;
}

.confetto:nth-child(29) {
  background-color: #ff9a91;
  left: 86%;
  animation-delay: -3.9s;
}

.confetto:nth-child(30) {
  background-color: #f2d74e;
  left: 96%;
  animation-delay: -2.9s;
}

.confetto:nth-child(32) {
  background-color: #f2d74e;
  left: 8%;
  animation-delay: 0.6s;
}

.confetto:nth-child(34) {
  background-color: #95c3de;
  left: 18%;
  animation-delay: -5.6s;
}

.confetto:nth-child(36) {
  background-color: #ff9a91;
  left: 28%;
  animation-delay: -3.6s;
}

.confetto:nth-child(38) {
  background-color: #f2d74e;
  left: 38%;
  animation-delay: -3.1s;
}

.confetto:nth-child(40) {
  background-color: #95c3de;
  left: 48%;
  animation-delay: -4.6s;
}

.confetto:nth-child(39) {
  background-color: #ff9a91;
  left: 58%;
  animation-delay: -6.6s;
}

.confetto:nth-child(37) {
  background-color: #f2d74e;
  left: 68%;
  animation-delay: -2.1s;
}

.confetto:nth-child(35) {
  background-color: #95c3de;
  left: 78%;
  animation-delay: -2.6s;
}

.confetto:nth-child(33) {
  background-color: #ff9a91;
  left: 88%;
  animation-delay: -4.1s;
}

.confetto:nth-child(31) {
  background-color: #f2d74e;
  left: 98%;
  animation-delay: -3.1s;
}

.confetto:nth-child(41) {
  background-color: #f2d74e;
  left: 10%;
  animation-delay: 0.2s;
}

.confetto:nth-child(42) {
  background-color: #95c3de;
  left: 20%;
  animation-delay: -5.2s;
}

.confetto:nth-child(43) {
  background-color: #ff9a91;
  left: 30%;
  animation-delay: -3.2s;
}

.confetto:nth-child(44) {
  background-color: #f2d74e;
  left: 40%;
  animation-delay: -2.7s;
}

.confetto:nth-child(45) {
  background-color: #95c3de;
  left: 50%;
  animation-delay: -4.2s;
}

.confetto:nth-child(56) {
  background-color: #ff9a91;
  left: 60%;
  animation-delay: -6.2s;
}

.confetto:nth-child(47) {
  background-color: #f2d74e;
  left: 70%;
  animation-delay: -2.7s;
}

.confetto:nth-child(48) {
  background-color: #95c3de;
  left: 80%;
  animation-delay: -2.2s;
}

.confetto:nth-child(49) {
  background-color: #ff9a91;
  left: 90%;
  animation-delay: -3.7s;
}

.confetto:nth-child(50) {
  background-color: #f2d74e;
  left: 100%;
  animation-delay: -2.7s;
}

@keyframes confetti {
  0% {
    transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
  }
  25% {
    transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
  }
  50% {
    transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
  }
  75% {
    transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
  }
  100% {
    transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
  }
}
</style>
