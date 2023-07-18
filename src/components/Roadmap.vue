<template>
  <div id="roadmap">
    <img src="../assets/images/iconMap.png" id="mapIcon" @click="openNav"/>
    <div v-for="(m, index) in mouses" :key="index" class="roadmap" >
      <mouse v-if="showMouse" :visit="been" :mouseNum="index" :text="m"></mouse>
    </div>
    <!-- <mouse :visited="true" :current="current" :text="'splunk'"></mouse>
    <mouse :visited="visited" :current="current"></mouse>
    <mouse :visited="visited" :current="current"></mouse> -->
  </div>
</template>
   
<script>
import Mouse from '@/components/Mouse';
export default {
  name: 'roadmap',
  components: { Mouse },
  props: ['been'],
  data() {
    return {
      showMouse: false,
      mouses: ['splunk','SOTF','Architecture','Arch graph','types', 'spl']
        // {
        //   name: 'splunk',
        //   visited: false,
        //   current: false
        // },
        // {
        //   name: 'SOTF',
        //   visited: false,
        //   current: false
        // },
        // {
        //   name: 'Architecture',
        //   visited: false,
        //   current: false
        // },
        // {
        //   name: 'Arch graph',
        //   visited: false,
        //   current: false
        // },
        // {
        //   name: 'types',
        //   visited: false,
        //   current: false
        // },
        // {
        //   name: 'spl',
        //   visited: false,
        //   current: false
        // }]
    }
  },
  methods: {
    openNav(){
      console.log(9);
      if(this.showMouse){
        this.showMouse=false;
      }
      else {
        this.showMouse=true;
      }
    }
  }
}
</script>
  
<style>
#mapIcon {
  position: relative;
  top: -3vh;
  right: -3vw;
  width: 10vw;
  height: 18vh;
}

/* .roadmap {
  position: relative;
  top: 10vh;
  right: -10vw;
} */

/* .rightMouse {
  right: 0vw;
} */

</style>