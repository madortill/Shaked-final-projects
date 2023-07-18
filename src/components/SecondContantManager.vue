<template>
  <div id="secondContantManager">
      <div v-if="whichContant !== 0">
          <img src="../assets/images/bgCmd.png" id="bg-cmd"/>
          <div id="next-btn" v-if="showNext && whichContant !== 3 && whichContant !== 4" @click="nextText">_המשך</div>
          <div id="back-btn" v-if="showBack" @click="backText">_חזור</div>
          <div id="next-btn" v-if="showclose || whichContant === 3 || whichContant === 4" @click="closeText">_סיימתי</div>
      </div>
      <div id="firstArch" v-if="whichContant === 1">
          <div id="title">Lorem ipsum_</div>
          <p id="textWin" v-if="dropped && win === 'u' && page === 1">Lorem ipsum1</p>
          <p id="textWin" v-if="dropped && win === 'v' && page === 1">Lorem ipsum2</p>
          <div id="text" v-if="page === 0">Lorem ipsum</div>
              <div id="dragAndText" v-if="page === 1">
                  <div id="text">Lorem ipsum</div>
                  <div id="line"> גרור את הסוג הנכון לפה!</div>

                  <div id="draggable-container">
                      <div class="" draggable="true" @dragstart="onDragging" id="124" v-if="dragUniversal">
                          <p id="textBtn">Lorem ipsum</p>
                      </div>
                  </div>

                  <div id="draggable-container2">
                      <div class="" draggable="true" @dragstart="onDragging" id="123" v-if="dragHeavy">
                          <p id="textBtn">Lorem ipsum</p>
                      </div>
                  </div>

                  <div id="box-droppable" @drop="drop" @dragover="allowDrop">
                      <hr>
                  </div>
                  <p v-if="showTrue" id="correct-answer">נכון מאוד!</p>
                  <p v-if="showFalse" id="incorrect-answer">לא נכון!</p>
              </div>
              <div id="dragAndText" v-if="page === 2">
                  <div id="textTitle">Lorem ipsum</div>
                  <div id="text">Lorem ipsum</div>
              </div>
      </div>
      <div id="secondArch" v-if="whichContant === 2">
          <div id="title">Lorem ipsum_</div>
          <div id="text" v-if="page === 0">Lorem ipsum</div>
          <div v-if="page === 1">
              <div id="rightWhite" class="cards">
                  <p class="font" id="title2">Lorem ipsum</p>
                  <div class="font" id="text2">Lorem ipsum</div>
              </div>
              <div id="vs-text">.vs</div>
              <div id="leftWhite" class="cards">
                  <p class="font" id="title2">Lorem ipsum</p>
                  <div class="font" id="text2">Lorem ipsum</div>
              </div>
          </div>
      </div>
      <div id="ThirdArch" v-if="whichContant === 3">
          <div id="title3" class="font">_Lorem ipsum</div>
          <div id="text3" class="font">Lorem ipsum</div>
      </div>
      <div id="FourthArch" v-if="whichContant === 4">
          <div id="title3" class="font">_Lorem ipsum</div>
          <div id="text3" class="font">Lorem ipsum</div>
      </div>
      <arch-graph v-if="showGraph === 1" :whichContant="showGraph"></arch-graph>
      <arch-graph v-if="showGraph === 2" :whichContant="showGraph"></arch-graph>
      <arch-graph v-if="showGraph === 3" :whichContant="showGraph"></arch-graph>
      <arch-graph v-if="showGraph === 4" :whichContant="showGraph"></arch-graph>
  </div>        
</template>
 
<script>
import ArchGraph from '@/components/ArchGraph';

export default {
  name: 'second-contant-manager',
  components: {
      ArchGraph
  },
  props: ['whichContant'],
  data() {
      return {
          page: 0,
          showTrue: false,
          showFalse: false,
          showNext: true,
          dragUniversal: true,
          dragHeavy: true,
          showclose: false,
          showBack: false,
          dropped: false,
          win: '',
          showGraph: 0
  };
  },
  methods: {
      nextText() {
          this.page++;
          if(this.page === 1 && (!this.dragUniversal || !this.dragHeavy)) {
              this.showNext = true;
              this.showBack = true;
              this.dragUniversal = false;
              this.dragHeavy = false;
              this.dropped = true;
          }
          else if(this.page === 1) {
              this.showNext = false;
          }
          else if(this.page === 2) {
              this.showNext = false;
              this.showclose = true;
          }
          if(this.whichContant === 2 && this.page === 1) {
              this.showclose = true;
              this.showBack = true;
          }
      },
      backText() {
          this.page--;
          if(this.page === 0) {
              this.showBack = false;
          }
          else if(this.page !== 2) {
              this.showclose = false;
              this.showNext = true;
          }
          else if(this.page === 1) {
              this.dragUniversal = false;
              this.dragHeavy = false;
          }
          if(this.whichContant === 2 && this.page === 0) {
              this.showNext = true;
              this.showclose = false;
          }
      },
      closeText() {
          this.showGraph = this.whichContant;
          this.whichContant = 0;
          setTimeout(() => {
              this.$emit('close-text');
          }, 5000);
      },
      onDragging(ev) {
          ev.dataTransfer.setData("text", ev.target.id);
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
          ev.target.appendChild(document.getElementById(data));
          this.imgShow = false;
          if(data === '124') {
              this.showTrue = true;
              this.dragHeavy = false;
              this.win = 'u';
          }
          else {
              this.showFalse = true;
              this.dragUniversal = false;
              this.win = 'v';
          }
          this.showNext = true;
          this.showBack = true;
      },
  },
}
</script>

<style scoped>
@font-face {
  font-family: miriam;
  src: url("../assets/fonts/mriamc.ttf");
}

#black-shadow {
  background-color: black;
  opacity: 0.5;
  height: 100vh;
width: 112vw;
  position: absolute;
  z-index: 3;
}

#title3 {
  position: absolute;
  top: 25vh;
  right: 23vw;
  z-index: 6;
  color: white;
  font-size: 4vh;
}

#text3 {
  position: absolute;
  top: 35vh;
  right: 28vw;
  z-index: 6;
  color: white;
  font-size: x-large;
  width: 55vw;
}

#vs-text {
  position: absolute;
  top: 53vh;
  color: white;
  right: 51vw;
  z-index: 6;
  font-size: 5vh;
  font-family: miriam;
}

#text2 {
  font-size: 2vh;
  margin-top: 6vh;
}

#title2 {
  font-size: 4vh;
}

#rightWhite {
  right: 25vw;
}

#leftWhite {
  right: 60vw;

}
.font {
  font-family: miriam;
}

.cards {
  background-color: white;
  height: 35vh;
  width: 25vw;
  position: absolute;
  top: 40vh;
  z-index: 6;
}

#textWin {
  position: absolute;
  top: 63vh;
  color: white;
  right: 31vw;
  z-index: 6;
  font-size: 2vh;
  font-family: miriam;
}

#back-btn {
  position: absolute;
  top: 77vh;
  color: white;
  right: 23vw;
  z-index: 6;
  font-size: 2vh;
  font-family: miriam;
}

#correct-answer {
  color: rgb(102, 221, 78);
  z-index: 6;
  position: absolute;
  top: 73vh;
  right: 80.5vw;
}

#incorrect-answer {
  color: rgb(231, 55, 55);
  z-index: 6;
  position: absolute;
  top: 73vh;
  right: 80.5vw;
}

#right {
  width: 10vw;
}

#left {
  width: 10vw;
}

#textBtn {
  color: white;
}

#draggable-container{
  width: 12vw;
  height: 5vh;
  padding: 10px;
  position: absolute;
  right: 30vw;
  z-index: 6;
  top: 72vh;
  background-color: rgb(107, 102, 102);
}

#draggable-container2{
  width: 12vw;
  height: 5vh;
  padding: 10px;
  position: absolute;
  right: 47vw;
  z-index: 6;
  top: 72vh;
  background-color: rgb(107, 102, 102);
}

#box-droppable {
  width: 28vw;
  height: 4vh;
  padding: 10px;
  position: absolute;
  z-index: 6;
  right: 25vw;
  top: 60vh;
}

#bg-cmd {
  height: 70vh;
  width: 70vw;
  position: absolute;
  top: 15vh;
  right: 20vw;
  z-index: 6;
}

.right {
  right: 25vw;
  left: 32vw;
}

.left {
  right: 45vw;
  left: 32vw;
}

.type-btn {
  background-color: white;
  position: absolute;
  z-index: 7;
  top: 75vh;
  width: 15vw;
  height: 4vh;
  font-family: miriam;
}

#next-btn {
  position: absolute;
  top: 77vh;
  color: white;
  right: 80vw;
  z-index: 6;
  font-size: 2vh;
  font-family: miriam;
}

#line {
  border-top: 1px solid white;
  position: absolute;
  z-index: 6;
  color: white;
  top: 67vh;
  right: 25vw;
  left: 32vw;
  width: 30vw;
  font-family: miriam;
}

#title {
  position: absolute;
  top: 22vh;
  left: 59vw;
  color: white;
  z-index: 6;
  font-size: 5vh;
  font-family: miriam;
  width: 30vw;
}

#text {
  position: absolute;
  z-index: 6;
  color: white;
  top: 32vh;
  right: 27vw;
  left: 32vw;
  font-size: x-large;
  font-family: miriam;
}

#textTitle {
  position: absolute;
  z-index: 6;
  top: 50vh;
  right: 40vw;
  font-size: 3vh;
  background-color: rgb(107, 102, 102);
  font-family: miriam;
  width: 25vw;
  height: 5vh;
  color: white;
}

</style>