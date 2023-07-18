<template>
  <div id="mouse">
    <div id="mouses" @mouseover="showAll" @mouseleave="dontShowAll" :class="all">
      <h3 :class="all" id="name">{{ text }}</h3>
      <img :src="src" id="mouseImg" :class="all">
    </div>
  </div>
</template>
   
<script>
import { computed } from 'vue';


export default {
  name: "mouse",
  props: ['visit', 'mouseNum', 'text'],
  data() {
    return {
      // src: require("@/assets/images/visitedMouse.png"),
      all: '',
    }
  },
  methods: {
    showAll(){
      this.all="all";
    },
    dontShowAll(){
      this.all='';
    }
  },
  computed: {
    src(){
      if (this.visit>=this.mouseNum){
        return  require("@/assets/images/visitedMouse.png");
      }
      if (this.visit+1===this.mouseNum){
        return  require("@/assets/images/currentMouse.png");
      }
      if (this.visit<this.mouseNum){
        return  require("@/assets/images/notVisitedMouse.png");
      }
    }
  }
}
</script>
  
<style>
#mouseImg {
  width: 15vw;
  height: 5vh;
  position: relative;

}

#name {
  color: white;
  position: relative;
  top: 2vh;
  right: 1vw;
  left: 10vw;
}

#mouses {
  position: relative;
  top: 2vh;
  /* right: 1vw; */
  left: 10vw;
  width: 15vw;
  height: 9vh;
}

.all {
  right: 0vw;
}
</style>