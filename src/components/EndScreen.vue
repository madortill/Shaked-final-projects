<template>
  <div id="endScreen">
    <p> hxgedazee</p>
    <div v-if="textAnim">
      <div class="typewriter">
        <h1 v-if="type >= 0" style="top: 15vh;">{{ contant[0] }}</h1>
        <h1 v-if="type >= 1" style="top: 20vh;">{{ contant[1] }}</h1>
        <h1 v-if="type >= 2" style="top: 25vh;">{{ contant[2] }}</h1>
        <h1 v-if="type >= 3" style="top: 30vh;">{{ contant[3] }}</h1>
      </div>
    </div>
    <div class="fram-div"><vue-iframe v-if="animateEnd" id="animate"
        src="/animations/trofi/trofi.html" />
    </div>
  </div>
</template>
   
<script>

export default {
  name: "end-screen",
  components: {},
  data() {
    return {
      animateEnd: false,
      textAnim: false,
      contant: ["כל הכבוד עשיתם זאת!",
        "סיימתם לאסוף את הרמזים החשובים ",
        "ורכשתם את הידע על מנת לתקן את הבלגן ",
        "גאים בכם!"],
      type: 0,
    };
  },
  methods: {
    showAnim() {
      this.animateEnd = true;
      this.textAnim=false;
    },
    typeNext() {
      this.textAnim= true;
      setTimeout(() => {
        if (this.type < 4) {
          this.type++;
          this.typeNext();
        } else {
          this.showAnim();
        }
      }, 2000);
    }

  },
  mounted() {
    this.typeNext();
  }
}
</script>
  
<style scoped>
@font-face {
  font-family: attack;
  src: url("../assets/fonts/stopmotionFont.ttf");
}

* {
  margin: 0;
  overflow: hidden;
  direction: rtl;
  font-family: attack  !important;
  font-weight: 100;
  font-size: medium;
}

#endScreen {
  background-image: url("../assets/images/bgOpenScreen.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  height: 100vh;
  width: 100vw;
}

.fram-div {
  overflow: hidden;
  position: absolute;
  display: block;
  top: 0vh;
  height: 100vh;
  width: 100vw;
}

.typewriter h1 {
  position: absolute;
  display: block;
  right: 5vw;
  color: #fff;
  font-family: monospace;
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  border-right: .15em solid rgb(255, 255, 255);
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  /* margin: 0 auto; */
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em;
  /* Adjust as needed */
  animation:
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: rgba(255, 166, 0, 0)
  }
}
</style>