<template>
  <div id="firstContantManager">
      <div id="first" v-if="whichContant === 1">
          <img src="../assets/images/clockBg.png" id="clock-bg"/>
          <h1 id="title1">Lorem ipsum</h1>
          <div v-for="(text, index) in text1" :key="index" id="text" :class="`text${index}`">{{ text }}</div>
          <button id="continue-btn" @click="closeBtn">בוא נמשיך</button>
      </div>
      <div id="second" v-if="whichContant === 2">
          <img src="../assets/images/coffeBg.png" id="coffee-bg"/>
          <h1 id="title2">Lorem ipsum</h1>
          <div id="first-coffee" v-show="page === 1">
              <div v-for="(text, index) in text2" :key="index" id="sec-text" :class="`secText${index}`">{{ text }}</div>
          </div>
          <div id="second-coffee" v-show="page === 2">
              <div class="flip-card" id="card1">
                  <div class="flip-card-inner">
                      <div class="flip-card-front">
                          <div>Lorem ipsum</div>
                      </div>
                      <div class="flip-card-back">
                          <div>Lorem ipsum</div> 
                      </div>
                  </div>
              </div>
              <div class="flip-card" id="card2">
                  <div class="flip-card-inner">
                      <div class="flip-card-front">
                          <div>Lorem ipsum</div>
                      </div>
                      <div class="flip-card-back">
                          <div>Lorem ipsum</div> 
                      </div>
                  </div>
              </div>
              <div class="flip-card" id="card3">
                  <div class="flip-card-inner">
                      <div class="flip-card-front">
                          <div>Lorem ipsum</div>
                      </div>
                      <div class="flip-card-back">
                          <div>Lorem ipsum</div> 
                      </div>
                  </div>
              </div>
          </div>
          <img src="../assets/images/back-arrow.png" id="back-arrow" v-show="page === 2" @click="backText"/>
          <img src="../assets/images/next-arrow.png" id="next-arrow" v-show="page >= 1" @click="nextText"/>
          <div id="next-text" v-show="showFinish">סיימתי!</div>
      </div>
  </div>
</template>
 
<script>

export default {
  name: 'first-contant-manager',
  props: ['whichContant'],
  data() {
      return {
    text1: ["Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum"],
          closeText: false,
          text2: ["Lorem ipsum", "Lorem ipsum"],
          page: 1,
          showFinish: false,
          clickedNext: 0
      };
  },
  methods: {
      closeBtn() {
          this.$emit('close-text', 1);
      },
      backText() {
          this.page = 1;
          this.clickedNext--;
          this.showFinish = false;
      },
      nextText() {
          this.page = 2;
          this.clickedNext++;
          if(this.page === 2) {
              this.showFinish = true;
          }
          if(this.clickedNext === 2) {
              this.$emit('close-text', 2);
          }
      }
  },
}
</script>

<style scoped>
#clock-bg {
  height: 105vh;
  width: 80vw;
  position: relative;
  top: 5vh;
  right: 8vw;
  z-index: 0;
}

#next-text {
  height: 2vh;
  width: 8vw;
  position: relative;
  right: 64vw;
  top: -21.5vh;
}

#back-arrow {
  position: relative;
  right: -4.5vw;
  top: -17vh;
}

#card1 {
  position: absolute;
  right: 35vw;
  top: 25vh;
}

#card2 {
  position: absolute;
  right: 55vw;
  top: 42vh;
}

#card3 {
  position: absolute;
  right: 35vw;
  top: 60vh;
}

#next-arrow {
  position: relative;
  right: 34vw;
  top: -17vh;
}

#sec-text {
  font-size: xx-large;
}

.secText1 {
  position: absolute;
  top: 38vh;
  right: 35vw;
  width: 35vw;
}
.secText0 {
  position: absolute;
  top: 23vh;
  right: 35vw;
  width: 35vw;
}

#coffee-bg {
  height: 95vh;
  width: 70vw;
  position: relative;
  top: 4vh;
  right: 9vw;
  z-index: 0;
  margin-right: 7vh;
}

#continue-btn {
  background-color: #203864;
  color: #ffffff;
  position: absolute;
  top: 70vh;
  right: 43vw;
  z-index: 1;
  height: 4vh;
  width: 10vw;
  border-radius: 1vh;
  border: 0px solid bisque;
}

#text {
  font-size: x-large;
}
.text0 {
  position: absolute;
  top: 27vh;
  right: 31vw;
  width: 34vw;
}

.text1 {
  position: absolute;
  top: 38vh;
  right: 25vw;
  width: 48vw;
}

.text2 {
  position: absolute;
  top: 54vh;
  right: 23vw;
  width: 50vw;
}

#title1 {
  right: 44vw;
}

#title2 {
  right: 39vw;
}

h1 {
  position: absolute;
  top: 15vh;
  font-weight: bold;
  font-size: xxx-large;
}

.flip-card {
background-color: transparent;
width: 15vw;
height: 20vh;
perspective: 1000px;
/* position: absolute;
top: 10vh; */
border-radius: 3vh;
}

.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.flip-card-front {
background-color: #2B669E;
color: rgb(255, 255, 255);
}

.flip-card-back {
background-color: #2B669E;
color: white;
transform: rotateY(180deg);
}
</style>