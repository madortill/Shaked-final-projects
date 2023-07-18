<template>
  <div id="openScreen">
    <div class="fram-div"><vue-iframe v-if="animateStart" id="animate"
        src="/animations/startAnim/startAnim.html" />
    </div>
    <div v-if="textAnim">
      <div class="typewriter">
        <h1 v-if="type >= 0" style="top: 15vh;">{{ contant[0] }}</h1>
        <h1 v-if="type >= 1" style="top: 20vh;">{{ contant[1] }}</h1>
        <h1 v-if="type >= 2" style="top: 25vh;">{{ contant[2] }}</h1>
        <h1 v-if="type >= 3" style="top: 30vh;">{{ contant[3] }}</h1>
        <h1 v-if="type >= 4" style="top: 35vh;">{{ contant[4] }}</h1>
        <h1 v-if="type >= 5" style="top: 40vh;">{{ contant[5] }}</h1>
        <h1 v-if="type >= 6" style="top: 45vh;">{{ contant[6] }}</h1>
        <h1 v-if="type >= 7" style="top: 50vh;">{{ contant[7] }}</h1>
      </div>
    </div>
  </div>
</template>
   
<script>


export default {
  name: "open-screen",
  components: {},
  data() {
    return {
      animateStart: false,
      textAnim: false,
      contant: ["אתם לא תאמינו מה קרה!",
        "פרצו לנו ל---- בבסיס ובילגנו את כל הנתונים",
        "ניסינו לקרוא לסופרמן הוא לא החזיר תשובה...",
        "אתם היחידים שיכולים להציל את המצב",
        "בשביל זה תצטרכו לעבור בין חדרים שונים",
        "לאסוף רמזים שיעזרו לנו למצוא את הפושעים",
        "וללמוד לתקן את הבלגן שעשו",
        " סומכים עליכם!"],
      type: 0,
    };
  },
  methods: {
    showAnim() {
      this.animateStart = true;
      setTimeout(() => {
        this.animateStart = false;
        this.textAnim = true;
        this.typeNext()
      }, 3000);
    },
    typeNext() {
      console.log(this.type);

      setTimeout(() => {
        if (this.type < 8) {
          this.type++;
          this.typeNext();
        } else {
          this.$emit("done");
        }
      }, 2000);
    }

  },
  mounted() {
    this.showAnim();
  }
}


</script>
  
<style scoped>
@font-face {
  font-family: attack;
  src: url("../assets/fonts/stopmotionFont.ttf");
}

.typewriter{
  font-family: attack ;
  font-weight: 100;
  font-size: medium;
}

* {
  margin: 0;
  overflow: hidden;
  direction: rtl;
  font-family: attack ;
  font-weight: 100;
  font-size: large;
}

#openScreen {
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
  /* font-family: monospace; */
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
