<template>
  <div class="" style="background:white">
  

      <div class="text-center flex justify-center" style="position:fixed; top:10vh;width:100%">
        <img src="~assets/ninja.svg" alt="" style="width:70vw">

    </div>
          

  
      <div class="flex column justify-center" style="height:90vh">
        <div class="q-px-lg q-gutter-y-md">
            <q-input v-model="username" label="Username" outlined>
              
            </q-input>

            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              label="Enter your password"
              outlined
              input-style=""
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="eva-lock-outline" size="20px" />
              </template>
              <template v-slot:append>
                <q-icon
                  size="20px"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
      

        <div class="flex justify-center items-center column">
          <q-btn
            dense
            unelevated
            label="Log In"
            class="text-white q-py-xs"
            no-caps
            style="
              border-radius: 5px;
              background-color: #607d8b;
              width: 85vw;
              margin-top: 5vw;
            "
            @click="$router.push('/home')"
          />

          <q-btn
            dense
            unelevated
            label="Register as a driver with us today!"
            class="q-mt-xs q-py-xs"
            no-caps
            style="border-radius: 5px; width: 100%; font-size:12px;text-decoration:underline"
          />
        </div>

        <div class="text-center text-grey-7">or</div> 

        <div class="flex justify-center items-center">
          <q-btn color="grey" class="" outline   no-caps  style="width: 85vw;
                margin-top: 3vw;border-radius:5px; padding:3px 0px">
            <img src="~assets/google.png" alt="" style="width:20px; margin-right:10px">
            <span style="color:black">Sign in with Google</span>
          </q-btn>
        </div>
        
      </div>
          







      <div class=" absolute-bottom" style="">
            <Lottie
                :options="defaultOptions"
                v-on:animCreated="handleAnimation"
                
              />
        </div>
          
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from './van.json';
import VueTextTransition from 'vue-text-transition'

export default {
  components: {
      Lottie,
      VueTextTransition
    },
  data () {
    return {
     
      defaultOptions: {
        animationData: animationData.default,
        loop: 0,
        autoplay: true,
      },
      animationSpeed: 2,
      showTitle: false,
      isPwd: true,
      username: "",
      password: "",
    }
  },
  methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
    },

    mounted(){
      
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
