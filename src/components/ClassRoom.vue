<template>
  <div id="ClassRoom">
    <div id="black-shadow" v-if="showText"></div>
    <img @mouseleave="leave1" @mouseover="over1" @click="showContant" :style="style1" id="0" class="ob0"
      src="../assets/images/classRoomObject1.png" alt="object0" />
    <img v-show="objectsOpened !== 0" @mouseleave="leave2" @mouseover="over2" @click="showContant" :style="style2" id="1"
      class="ob1" src="../assets/images/classRoomObject2.png" alt="object1" />
    <img v-show="objectsOpened === 0" src="../assets/images/object1Movment.png" id="circleOb" :class="circleAnimation" />
    <img v-show="objectsOpened === 1 && showText === false" src="../assets/images/computerLight.png" id="lightOb"
      :class="lightAnimation" />
    <third-contant-manager :object="object" :show="showText" id="up" @next="closeContant"></third-contant-manager>
    <div v-show="objectsOpened >= 2 && !showText" id="nextMessage" @click="NextPage">לחץ כדי לעבור למסך הבא!</div>
    <div class="fram-div" v-if="startAnim"><vue-iframe id="animate" src="/animations/3-endRoom/transitionEnd.html" />
    </div>
  </div>
</template>
   
<script>
import ThirdContantManager from "@/components/ThirdContantManager"
export default {
  name: "class-room",
  components: { ThirdContantManager },
  data() {
    return {
      style1: "opacity: 0;",
      // widthOb: 6.5,
      // widthObString: "6.5vw",
      // heightOb: 10,
      // heightObString: "10vh",
      style2: "opacity: 0;",
      objectsOpened: 0,
      object: 0,
      showText: false,
      startAnim: false,
      circleAnimation: "",
      lightAnimation: ''
    };
  },
  methods: {
    over1() {
      this.style1 = "opacity: 1;";
    },
    leave1() {
      this.style1 = "opacity: 0;";
    },
    over2() {
      this.style2 = "opacity: 1;";
    },
    leave2() {
      this.style2 = "opacity: 0;";
    },
    showContant(event) {
      this.object = Number(event.currentTarget.id);
      this.showText = true;
      if (this.object === this.objectsOpened) {
        this.objectsOpened++;
      }
      this.circleAnimation = "";
      this.lightAnimation = "";
    },
    closeContant() {
      this.showText = false;
      setTimeout(() => {
        if (this.objectsOpened === 1) {
          this.lightAnimation = "lightAnim";
        }
      }, 3000);
      this.$emit("doneSubj");

    },
    NextPage() {
      this.startAnim = true;
      setTimeout(() => {
        this.startAnim = false;
        this.$emit("done");
      }, 1800);

    }
  },
  mounted() {
    setTimeout(() => {
      if (this.objectsOpened === 0) {
        this.circleAnimation = "circleAnim";
      }
    }, 3000);

  }
}
</script>
  
<style >
@font-face {
  font-family: body;
  src: url("../assets/fonts/calibri.ttf");
}

* {
  margin: 0;
  overflow: hidden;
  direction: rtl;
  font-family: body;
}

#ClassRoom {
  background-image: url("../assets/images/bgClassRoom.png");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  height: 100vh;
  width: 100vw;
}

#black-shadow {
  background-color: black;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  position: absolute;
}

#up {
  position: absolute;
  z-index: 1;
}

.ob0 {
  position: absolute;
  top: 9vh;
  right: 22.9vw;
  width: 6.5vw;
  height: 18.9vh;
}

.ob1 {
  position: absolute;
  top: 50vh;
  right: 34vw;
  width: 6.5vw;
  height: 10vh;
}

#nextMessage {
  position: absolute;
  top: 30vh;
  right: 8.2vw;
  width: 6.5vw;
  height: 10vh;
  text-align: center;
}

.fram-div {
  overflow: hidden;
  position: absolute;
  display: block;
  top: 0vh;
  height: 100vh;
  width: 100vw;
}

#circleOb {
  position: absolute;
  right: 23.5vw;
  top: 20.2vh;
  height: 6vh;
  width: 4vw;
  transform: rotate(0deg);
  z-index: 2;
}

.circleAnim {
  animation: circleAnimate 3s infinite;
}

@keyframes circleAnimate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#lightOb {
  position: absolute;
  right: 29.2vw;
  top: 43.3vh;
  height: 14vh;
  width: 10vw;
  z-index: 2;
  opacity: 0;
}

.lightAnim {
  animation: lightAnimate 2s infinite;
}

@keyframes lightAnimate {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>