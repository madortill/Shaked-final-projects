<template>
  <div id="CyberFarmRoom">
    <div class="fram-div"><vue-iframe v-if="showAnimPage" id="animate" src="/animations/2-3room/transition2.html" />
    </div>
    <img :src="srcChair" id="chair" @click="showContant(1)" v-show="showRegularChair&& !showAnimPage" :class="animation[0]" />
    <img src="../assets/images/reverseChair.png" id="chair" v-show="!showRegularChair && !showAnimPage" />
    <img src="../assets/images/generator.png" id="generator" v-if="show >= 3&& !showAnimPage" @click="showContant(3)" />
    <img src="../assets/images/wheel.png" id="wheel" v-if="show >= 3&& !showAnimPage" :class="animation[2]" />
    <img src="../assets/images/comp.png" id="comp" v-if="show >= 2&& !showAnimPage" @click="showContant(2)" :class="animation[1]" />
    <img src="../assets/images/server.png" id="server" v-if="show >= 4&& !showAnimPage" @click="showContant(4)" :class="animation[3]" />
    <div id="black-shadow" v-if="showBlack"></div>
    <div id="end-text" @click="nextPage" v-if="showEndText&& !showAnimPage">לחץ עליי</div>
    <second-contant-manager :whichContant="1" v-if="showContantClue === 1"
      @close-text="closeContant"></second-contant-manager>
    <second-contant-manager :whichContant="2" v-if="showContantClue === 2"
      @close-text="closeContant"></second-contant-manager>
    <second-contant-manager :whichContant="3" v-if="showContantClue === 3"
      @close-text="closeContant"></second-contant-manager>
    <second-contant-manager :whichContant="4" v-if="showContantClue === 4"
      @close-text="closeContant"></second-contant-manager>

  </div>
</template>
 
<script>
import SecondContantManager from '@/components/SecondContantManager';

export default {
  name: 'cyber-farm-room',
  components: {
    SecondContantManager,
  },
  data() {
    return {
      showRegularChair: true,
      showBlack: false,
      showContantClue: 0,
      clicked: [false, false, false, false],
      animation: ['', '', '', ''],
      srcChair: require("@/assets/images/chair.png"),
      show: 1,
      showEndText: false,
      showAnimPage: false,
    };

  },
  methods: {
    endRoom() {

    },
    showContant(number) {
      if (number === 1) {
        this.srcChair = require("@/assets/images/chair.png");
        this.clicked[0] = true;
      }
      this.showBlack = true;
      this.showContantClue = number;
      for (let i = 0; i <= number; i++) {
        if (this.clicked[i]) {
          this.animation[i] = '';
          continue;
        }
        else {
          this.show++;
        }
      }
    },
    switchSrcChair() {
      (this.srcChair === require("@/assets/images/chair.png") ? this.srcChair = require("@/assets/images/reverseChair.png") : this.srcChair = require("@/assets/images/chair.png"));
    },
    closeContant() {
      if (!this.clicked[this.showContantClue]) {
        this.animation[this.showContantClue] = `anim${this.showContantClue}`;
      }
      if (this.showContantClue !== 0) {
        this.animation[this.showContantClue - 1] = '';
      }
      if (this.showContantClue === 4) {
        this.showEndText = true;
      }
      this.showContantClue = 0;
      this.showBlack = false;
    },
    nextPage() {
      this.showAnimPage = true;
      setTimeout(() => {
        this.showAnimPage = false;
        this.$emit("done");
        this.$emit("doneSubj");
        this.$emit("doneSubj");
      }, 4500);
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.clicked[0]) {
        this.animation[0] = 'chairAnim';
        setInterval(this.switchSrcChair(), 1500);
      }
    }, 3000);
  }

}
</script>

<style scoped>
* {
  margin: 0;
  direction: rtl;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma;
  font-weight: 400;
  text-align: center;
}

.fram-div {
  overflow: hidden;
  position: absolute;
  display: block;
  top: 0vh;
  height: 100vh;
  width: 100vw;
  z-index: 1.5;
}

#end-text {
  position: absolute;
  top: 47vh;
  left: 42vw;
  color: white;
}

#wheel {
  position: absolute;
  top: 80.5vh;
  right: 41.5vw;
  height: 4.7vh;
  width: 2vw;
  transform: rotate(0deg);
}

.anim2 {
  animation: anim2 1.5s infinite;
}

@keyframes anim2 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#CyberFarmRoom {
  height: 100vh;
  width: 112vw;
  background-image: url('../assets/images/bgFarmRoom.png');
  background-size: 112vw 100vh;
  position: absolute;
  background-repeat: no-repeat;
  margin: 0% !important;
}

#server {
  height: 18vh;
  width: 15.3vw;
  position: absolute;
  top: 54.5vh;
  left: 25.6vw;
}

.anim3 {
  animation: anim3 1.5s infinite;
}

@keyframes anim3 {
  0% {
    height: 18vh;
    width: 15.3vw;
    left: 25.6vw;
    top: 54.5vh;
  }

  100% {
    height: 20vh;
    width: 17.3vw;
    left: 24.5vw;
    top: 54vh;
  }
}

#comp {
  height: 25vh;
  width: 14vw;
  position: absolute;
  top: 55vh;
  right: 30vw;
}

#chair {
  height: 49vh;
  width: 18vw;
  position: absolute;
  top: 51vh;
  right: 4.5vw;
  opacity: 1;
  src: url("../assets/images/chair.png");
}

.chairAnim {
  animation: chairAnim 1.5s infinite;
}

@keyframes chairAnim {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.anim1 {
  animation: anim1 1.5s infinite;
}

@keyframes anim1 {
  0% {
    opacity: 1;
    height: 25vh;
    width: 14vw;
  }

  100% {
    opacity: 0;
    height: 26vh;
    width: 15vw;
  }
}

#generator {
  height: 37.5vh;
  width: 16vw;
  position: absolute;
  top: 66vh;
  right: 32.5vw;
}

#black-shadow {
  background-color: black;
  opacity: 0.5;
  height: 100vh;
  width: 112vw;
  position: absolute;
  z-index: 3;
}

#up {
  position: absolute;
  z-index: 5;
}</style>