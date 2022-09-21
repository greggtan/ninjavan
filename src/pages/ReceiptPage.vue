<template>
  <q-page class="q-pa-md">
      <div class="q-mb-sm" style="font-size:6vw; font-weight:500">05/04/2022 8:30am</div>
      <div class="text-grey">I have received:</div>
     <q-input outlined v-model="text" dense/>

      <div class="text-grey q-mt-md">Customer's name:</div>
      <div class="q-mb-md" style="font-size:6.5vw">Angel</div>
      
      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="terms" color="green" size="lg"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>I declare that the transactions listed above are correct, and that I have received the above number of parcels in good condition</q-item-label>
        </q-item-section>
      </q-item>

      <div class="text-grey q-mt-md">Customer's Signature:</div>
      <div class="" style="border:1px solid grey; border-radius:8px; height:40vh; background:lightgrey"></div>

      <q-btn :disable="!terms" class="bg-green text-white absolute-bottom q-mb-lg q-mx-auto" label="Submit" @click="successDialog = !successDialog" style="width:90vw; font-size:4.5vw" />


       <q-dialog v-model="successDialog">
      <q-card style="width:90vw" class="q-px-lg q-py-md">
        <div class="flex column justify-center items-center">
          <div class="" style="width: 30vw">
            <Lottie
              :options="defaultSuccessOptions"
              v-on:animCreated="handleAnimation"
              
            />
          </div>

          <div
            class="text-center"
            style="font-size: 20px; width: 100%"
          >
            Parcel <span style="color: lightgreen">successfully</span> delivered!
          </div>
        </div>

        <q-card-actions align="right">
          <q-btn flat label="close" color="green" @click="handleFinish()"  />

        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationDataSuccess from "./success.json";
export default {
  data () {
    return {
      text:'1 Parcel',
      terms:false,
      defaultSuccessOptions: {
        animationData: animationDataSuccess.default,
        loop: false,
        autoplay: true,
      },
      successDialog:false
    }
    
  },
  components: {Lottie },
  methods: {  
    handleAnimation: function (anim) {
        this.anim = anim;
    },
    handleFinish(){
      this.$store.state.completed = true
      this.$router.push("/deliveryFinish")
    }
  }
  
}
</script>
