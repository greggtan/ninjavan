<template>
  <div class="">

    <vue-text-transition :show="showTitle" name="test" :interval="10" class=" text-center" style="width:100%;position:fixed;bottom:20vh;font-size:6vw; ">Developed by Team Kaizen</vue-text-transition>

    <div class="text-center flex justify-center" style="position:fixed; top:20vh;width:100%">
        <img src="~assets/ninja.svg" alt="" style="width:70vw">

    </div>

      <div class=" flex justify-center" style="height:100vh;width:100vw ">
         
            
            <Lottie
                :options="defaultOptions"
                v-on:animCreated="handleAnimation"
                style="width:50vw"
              />
          
          
        </div>
          
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from './parcel2.json';
import VueTextTransition from 'vue-text-transition'

export default {
  components: {
      Lottie,
      VueTextTransition
    },
  data () {
    return {
      a:'Home Page',
      defaultOptions: {
        animationData: animationData.default,
        
        autoplay: true,
      },
      animationSpeed: 2,
      showTitle: false,
    }
  },
  methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },

      handleDirect(){
        
        setTimeout( ()=>{this.$router.push('/login')}, 1800);
      }
    },

    mounted(){
       this.showTitle = !this.showTitle
      this.handleDirect()
    }
  
}
</script>

<style lang="scss">
span {
  display: inline-block;
}

.v--vtt-test,
.v--vtt-test_odd {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 1s ease-in-out;
}

.v--vtt-test_visible,
.v--vtt-test_odd_visible {
  opacity: 1;
  transform: translateY(0);
}

.v--vtt-test_hidden {
  opacity: 0;
  transform: translateY(20px);
}

.v--vtt-test_odd_hidden {
  opacity: 0;
  transform: translateY(-20px);
}

</style>
