<template>
  <div id="ArchGraph">
       <div id="black-bg"></div>
       <img src="../assets/images/arrows1.png" id="arrows-part1" v-show="whichContant >= 2"/>
       <img src="../assets/images/arrows3.png" id="arrows-part3" v-show="whichContant >= 3"/>
       <img src="../assets/images/arrows4.png" id="arrows-part4" v-show="whichContant >= 4"/>
       <img src="../assets/images/arrows31.png" id="arrows-part31" v-show="whichContant >= 4"/>
  </div>
</template>
 
<script>

export default {
  name: "arch-graph",
  props: ['whichContant'],
  data() {
    return {
      part: 0,
  };
  },
  
}
</script>

<style scoped>
#black-bg {
background-color: black;
opacity: 0.8;
height: 80vh;
width: 80vw;
position: absolute;
top: 12vh;
right: 17vw;
border-radius: 2vh;
}

#arrows-part31 {
position: absolute;
z-index: 3;
height: 27vh;
width: 2.5vw;
top: 37vh;
left: 69vw;
}

#arrows-part1 {
position: absolute;
z-index: 3;
height: 48vh;
width: 16vw;
top: 33vh;
left: 27vw;
}

#arrows-part3 {
position: absolute;
z-index: 3;
height: 18vh;
width: 16vw;
top: 37vh;
left: 53vw;
}

#arrows-part4 {
position: absolute;
z-index: 3;
height: 15vh;
width: 16vw;
top: 57vh;
left: 74vw;
}

#part1 {
position: absolute;
z-index: 4;
height: 60vh;
width: 10vw;
top: 23vh;
left: 20vw;
}

#part2 {
position: absolute;
z-index: 4;
height: 17vh;
width: 10vw;
top: 45vh;
left: 43vw;
}

#part3 {
position: absolute;
z-index: 4;
height: 12vh;
width: 15vw;
top: 25vh;
left: 60vw;
}

#part4 {
position: absolute;
z-index: 4;
height: 20vh;
width: 13vw;
top: 60vh;
left: 64vw;
}

#part4-1 {
position: absolute;
z-index: 4;
height: 20vh;
width: 13vw;
top: 40vh;
left: 81vw;
}

</style>