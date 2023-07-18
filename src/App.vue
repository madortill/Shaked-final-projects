<template>
  <div id="app">
    
      <open-screen v-if="room===1" @done="switchRoom"></open-screen>
      <work-room v-if="room===2" @done="switchRoom" @doneSubj="addMouse"></work-room>
      <cyber-farm-room v-if="room===3" @done="switchRoom" @doneSubj="addMouse"></cyber-farm-room>
      <roadmap v-if="room>1 && room<5" id="roadmap" :been="been"></roadmap>
      <class-room v-if="room===4" @done="switchRoom" @doneSubj="addMouse"></class-room>
      <end-screen v-if="room===5"></end-screen>
      
  </div>
</template>
 
<script>
import OpenScreen from '@/components/OpenScreen';
import EndScreen from '@/components/EndScreen';
import ClassRoom from '@/components/ClassRoom';
import WorkRoom from '@/components/WorkRoom';
import Roadmap from '@/components/Roadmap';
import CyberFarmRoom from '@/components/CyberFarmRoom';
export default {
  
  name: "app",
  components: { OpenScreen, EndScreen, ClassRoom, WorkRoom, Roadmap, CyberFarmRoom },
  data() {
    return {
      room: 1,
      been: -1,
    };
  },
  methods: {
    addMouse(){
      this.been++;
    },
    switchRoom(){
      this.room++;
    }
  }
}
</script>

<style>
#roadmap {
  position: absolute;
}

</style>