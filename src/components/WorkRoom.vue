<template>
  <div id="workRoom">
    <!-- <roadmap ></roadmap> -->
    <img src="../assets/images/clock-real.png" v-show="!showAnimPage" id="clock" @click="showContant(1)"
      :class="animation" />
    <img src="../assets/images/coffeBefore.png" v-show="!showAnimPage && !showAfter" id="coffeebefore" />
    <img src="../assets/images/coffe.png" v-show="!showAnimPage && showAfter" id="coffee" @click="showContant(2)"
      :class="animationCoffee" />
    <div id="black-shadow" v-if="showBlack"></div>
    <div id="instructions" v-if="showInsrtu">
      <h1>אנחנו חייבים למהר ולהתחיל, אבל רגע לפני... בואו נבין איך נעבור בחדרים!</h1>
      <h1>בכל חדר יהיה פריט מיוחד שאותו תצטרכו לאסוף וללחוץ עליו. לאחר שתאספו את כל הפריטים המיוחדים מהחדר יהיה עליכם
        לעשות פעולה מסוימת על מנת לעבור לחדר הבא. שימו לב לשינויים הקטנים!</h1>
      <p id="instru-map">אל תדאגו תוכלו תמיד לחזור אחורה</p>
      <p id="instru-map">בלחיצה על</p>
      <img src="../assets/images/iconMap.png" id="icon-roadmap" />
      <button class="custom-btn btn-12"><span @click="showWarning">#התחלנו</span><span>באלי להתחיל</span></button>
    </div>
    <div id="warning" v-if="showWarn">
      <img src="../assets/images/warning.png" id="warning-img" />
      <button id="btn-warning" @click="closeWarning">סבבה נזכרנו</button>
    </div>
    <first-contant-manager :whichContant="1" v-if="showContantClue === 1" id="up"
      @close-text="closeContant"></first-contant-manager>
    <first-contant-manager :whichContant="2" v-if="showContantClue === 2" id="up"
      @close-text="closeContant"></first-contant-manager>

    <p v-show="showUsb" id="nextMessage">גרור אליי את הכונן!</p>

    <div id="box-droppable1" @drop="drop" @dragover="allowDrop" v-show="!showAnimPage">
      <!-- <h3>Droppable area:</h3> -->
      <hr>
    </div>
    <div id="draggable-container1" v-show="showUsb && !showAnimPage">
      <!-- <h3>Draggable area:</h3> -->
      <hr>

      <div draggable="true" @dragstart="onDragging" id="123">
        <img src="../assets/images/usb.png" id="usb" v-show="showUsb" />
      </div>
    </div>

    <div class="fram-div"><vue-iframe v-if="showAnimPage" id="animate" src="/animations/1-2room/transition1.html" />
    </div>
  </div>
</template>
 
<script>
import FirstContantManager from '@/components/FirstContantManager';
// import Roadmap from '@/components/Roadmap';
export default {
  name: 'work-room',
  components: {
    FirstContantManager,
    // Roadmap
  },
  data() {
    return {
      showInsrtu: true,
      showWarn: false,
      showBlack: true,
      showContantClue: 0,
      animation: '',
      clickedClock: false,
      clickedCoffe: false,
      animationCoffee: '',
      showUsb: false,
      showAnimPage: false,
      showAfter: false,
    };

  },
  methods: {
    showWarning() {
      this.showInsrtu = false;
      this.showWarn = true;
    },
    closeWarning() {
      this.showWarn = false;
      this.showBlack = false;
      setTimeout(() => {
        if (!this.clickedClock) {
          this.animation = 'clock-anim';
        }
      }, 3000);
    },
    showContant(number) {
      if (number === 1) {
        this.animation = '';
        this.clickedClock = true;
        this.showBlack = true;
        this.showContantClue = number;
      }
      else if (number === 2 && this.clickedClock) {
        this.animationCoffee = '';
        this.showBlack = true;
        this.clickedCoffe = true;
        this.showContantClue = number;
      }
    },
    closeContant(number) {
      this.showContantClue = 0;
      this.showBlack = false;
      this.showAfter = true;
      if (number === 1) {
        setTimeout(() => {
          if (!this.clickedCoffe) {
            this.animationCoffee = 'animation-coffee';
          }
        }, 3000);
      }
      else {
        this.showUsb = true;
      }
      this.$emit("doneSubj");
    },
    onDragging(ev) {
      console.log(ev);
      ev.dataTransfer.setData("text", ev.target.id);
      //   this.$store.commit('module/namespace', status);
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop(ev) {
      ev.preventDefault();
      let data = ev.dataTransfer.getData("text");
      console.log(data);
      ev.target.appendChild(document.getElementById(data));
      this.imgShow = false;
      this.nextPage();
    },
    nextPage() {
      this.showAnimPage = true;
      setTimeout(() => {
        this.$emit("done");
      }, 4500);
    }
  },
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

#draggable-container1 {
  /* background: #000; */
  height: 6vh;
  width: 4vw;
  position: absolute;
  right: -5vw;
  top: 30vh;
  z-index: 2;
  animation: usbAnimate 1.5s forwards;
}

#box-droppable1 {
  position: absolute;
  left: 17vw;
  top: 41vh;
  width: 16vw;
  height: 13vh;
  z-index: 2;
  /* border-style: solid; */
}

#usb {
  height: 6vh;
  width: 4vw;
  /* position: absolute;
  right: -5vw;
  top: 30vh;
  z-index: 2;
  animation: usbAnimate 1.5s forwards; */
}

#nextMessage {
  color: white;
  position: absolute;
  top: 45vh;
  right: 72vw;
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

#workRoom {
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/images/bgWorkRoom.png');
  background-size: 100vw 100vh;
  position: absolute;
  background-repeat: no-repeat;
  margin: 0% !important;
}

@keyframes usbAnimate {
  0% {
    right: -5vw;
    top: 30vh;
  }

  100% {
    right: 5vw;
    top: 85vh;
  }
}

#coffee {
  position: absolute;
  top: 55vh;
  right: 9vw;
  z-index: 1;
  height: 8vh;
  width: 5vw;
}

#coffeebefore {
  position: absolute;
  top: 57vh;
  right: 10vw;
  z-index: 1;
  height: 4vh;
  width: 3vw;
}

.animation-coffee {
  animation: coffeeAnimate 3s infinite;
}

@keyframes coffeeAnimate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(20deg) translate(2vh, 1vh);
  }
}

#btn-warning {
  height: 4vh;
  width: 10vw;
  background-color: rgb(73, 155, 196);
  color: white;
  position: absolute;
  top: 36vh;
  right: 37vw;
  border-radius: 1vh;
  z-index: 4;
}

#warning-img {
  position: absolute;
  top: 10vh;
  right: 27vw;
  height: 35vh;
  width: 45vw;
  z-index: 4;
}

#btn-start {
  height: 5vh;
  width: 11vw;
  background-color: rgb(32, 56, 100);
  border-radius: 1vh;
  color: white;
  font-size: large;
  border: 0px solid blue;
  position: relative;
  top: 3vh;
  right: -2vw;
}

#clock {
  position: absolute;
  left: 2vw;
  top: 8vh;
  height: 29vh;
  width: 22vw;
  transform: rotate(0deg);
  z-index: 2;
}

.clock-anim {
  animation: clockAnimate 3s infinite;
}

@keyframes clockAnimate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#icon-roadmap {
  position: relative;
  top: -0.4vh;
  left: -12.5vw;
  height: 14vh;
  width: 7vw;
}

#instru-map {
  font-size: 2.5vh;
  position: relative;
  top: 7vh;
  margin-top: 1vh;
}

#instructions {
  height: 80vh;
  width: 80vw;
  background-color: rgba(1, 84, 147, 0.801);
  position: absolute;
  top: 10vh;
  left: 10vw;
  border-radius: 10vh;
  border: 1px solid white;
  color: white;
  z-index: 4;
}

h1 {
  opacity: 1;
  width: 65vw;
  position: relative;
  top: 7vh;
  right: 5vw;
  margin: 3vh;
  font-size: 4vh;
}

#up {
  z-index: 5;
  position: absolute;
}

#black-shadow {
  background-color: black;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  position: absolute;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
}

.btn-12 {
  position: relative;
  right: -2vw;
  bottom: 0vh;
  border: none;
  box-shadow: none;
  width: 180px;
  height: 90px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}

.btn-12 span {
  background: rgb(32, 56, 100);
  background: linear-gradient(0deg, rgb(32, 56, 100) 0%, rgb(32, 56, 100) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.btn-12 span:nth-child(1) {
  box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
</style>