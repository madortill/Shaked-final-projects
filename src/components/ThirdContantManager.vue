<template>
  <div id="ThirdContantManager">
    <div v-if="show" id="contant" class="myBox">
      <h1 style="text-align: center; font-size: xx-large;">{{ titles[object] }}</h1>
      <div v-for="pr in texts[object]" :key="pr">
        <p style="padding: 5vh;">{{ pr }}</p>
      </div>
      <button class="custom-btn btn-3" @click="closeContant"><span>קדימה להבא!</span></button>
    </div>
  </div>
</template>
   
<script>

export default {
  name: "third-contant-manager",
  props: ["object", "show"],
  data() {
    return {
      titles: ["Lorem ipsum", "Lorem ipsum"],
      texts: [[
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "1.Lorem ipsum ",
        "2.Lorem ipsum",
        "3.Lorem ipsum"],
      ["Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        'Lorem ipsum']],

    };
  },
  methods: {
    closeContant() {
      this.$emit("next");
    }
  }
}
</script>
  
<style scoped>
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
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

.btn-3 {
  background: rgb(0,172,238);
background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  margin: 2vw;
  font-size: large;
}
.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
   background: rgba(2,126,251,1);
  transition: all 0.3s ease;
}
.btn-3:before {
  height: 0%;
  width: 2px;
}
.btn-3:after {
  width: 0%;
  height: 2px;
}
.btn-3:hover{
   background: transparent;
  box-shadow: none;
}
.btn-3:hover:before {
  height: 100%;
}
.btn-3:hover:after {
  width: 100%;
}
.btn-3 span:hover{
   color: rgba(2,126,251,1);
}
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
   background: rgba(2,126,251,1);
  transition: all 0.3s ease;
}
.btn-3 span:before {
  width: 2px;
  height: 0%;
}
.btn-3 span:after {
  width: 0%;
  height: 2px;
}
.btn-3 span:hover:before {
  height: 100%;
}
.btn-3 span:hover:after {
  width: 100%;
}


.myBox {
  background-color: rgba(22, 32, 105, 0.9);
  border: none;
  padding: 1vh;
  margin-top: 10vh;
  margin-right: 15vw;
  width: 65vw;
  height: 500px;
  overflow: scroll;
  position: relative;
  top: 0vh;
  left: 0vw;
  border-radius: 2vw;
  color: white;
}

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 1.5vw;
  height: 0vh;

}

::-webkit-scrollbar-track {
  background: rgb(0, 23, 68);
  border-radius: 2vw;
}

::-webkit-scrollbar-thumb {
  border-radius: 2vw;
  background: rgb(68, 114, 196);

}

p {
  position: relative;
  font-size: x-large;
}


</style>