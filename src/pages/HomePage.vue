<template>
  <q-page class="">
    <!-- <div class="simple-page">
      <Container @drop="onDrop" lock-axis="y">
        <Draggable v-for="item in items" :key="item.id">
          <div class="draggable-item" style="cursor:all-scroll">
            {{item.data}}
          </div>
        </Draggable>
      </Container>
    </div> -->

    <!-- <q-btn round color="secondary" icon="place"  style="position:fixed; right:10vw; bottom:5vh; z-index:100; font-size:6vw " /> -->

    <div class="q-mb-md text-white ninja-red" >
      <Lottie
                :options="defaultSunOptions"
                v-on:animCreated="handleAnimation"
              style="width:30vw"  
      />
      <div class="text-center q-pb-md" style="font-size:6vw;font-weight:300">Good Morning Greg!</div>
    </div>
    
    <q-list bordered class="rounded-borders q-mx-md">
      <q-expansion-item
        expand-separator
        icon="local_shipping"
        label="Route 1109556"
        header-style="font-size:5vw;"
        default-opened
        
      >
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="local_shipping" style="background:#3E5463" text-color="white" />
          </q-item-section>

          <q-item-section>
            Route 1109556
          </q-item-section>

          
        </template>
        <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
      done-color="green"
      flat
      
    >
      <q-step
        :name="1"
        title="Collect Parcels for Route 1105996"
        icon="email"
        
        :done="step > 1"
        
      >
        <div class="q-pa-md q-pb-lg" style="background:#3E5463; color:#F2F5F7; border-radius:5px; ">
            <div class="">
              
            </div>
            <div class="" style="font-size:4.5vw;font-weight:500">Warehouse Package Progress</div>
            <div class="" style="font-size:3.5vw;color:yellow; font-weight:300">Estimated Time to Arrive: <animated-number :value="estimatedArrivalTime" :formatValue="formatToPrice" :duration="duration"/> mins</div>
            <div class="flex items-center q-mt-xs">
              <div class="" style="font-size:4.5vw">Ready : </div>
              <div class="q-ml-xs" style="font-size:6.5vw">
                <animated-number :value="currentPackages" :formatValue="formatToPrice" :duration="duration"/> / 
                <animated-number :value="totalPackages" :formatValue="formatToPrice" :duration="duration"/>
              </div>
            </div>

            <q-linear-progress rounded size="20px" :value="packagesProgress" stripe color="green" class="q-mt-sm" />
            

        </div>

     
      </q-step>

      <q-step
        :name="2"
        title="Scan Parcels"
        icon="photo_camera"
        :done="step > 2"
      >
      <div class="flex justify-center items-center q-mb-md " style="border-radius:10px">
        <q-btn style="background:#3E5463" no-caps @click="scanQR()">
          <div class="flex column justify-around items-center text-white">
            <q-icon name="qr_code_scanner" style="font-size:28vw" />
            <div class="" style="font-size:3.5vw; color:#">Scan Parcel QR Code</div>
          </div>
        </q-btn>
      </div>
      
      <q-card >
        <q-tabs
          v-model="tab"
          
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="toScan" :label="`To Scan (${toScan.length})`" />
          <q-tab name="finishedScan" :label="`Finished Scan (${finishedScan.length})`" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated style="height:40vh;overflow-y:scroll">
          <!-- to scan panel -->
          <q-tab-panel name="toScan">
            <div class="" v-for="item of toScan" :key="item.id">
              <q-item clickable v-ripple class="flex column">
                <div class="flex justify-between items-center " style="width:100%; color:grey">
                  <div class="" style="font-size:15px">
                    {{item.distance}}
                    <q-badge v-if="item.cod == true" color="red" style="font-size:15px;padding:5px">
                    COD
                    </q-badge>
                  </div>
                  <div class="">{{item.time}}</div>
                </div>
                <div class="q-my-sm" style="font-size:16px;font-weight:500">{{item.location}}</div>
                
                <div class="flex justify-between items-center" style="width:100%; font-size:15px" >
                  <div class="">{{item.name}}</div>
                  <div class="flex items-center" style="font-size:16px; color:red">
                    <q-icon name="local_shipping"></q-icon> 
                    <div class="q-ml-sm">{{item.noOfPackages}}</div> 
                  </div>
                </div>
                
                <div class="">{{item.packageID}}</div>

              </q-item>

              <q-separator />
            </div>

          </q-tab-panel>

          <!-- finished scan panel -->
          <q-tab-panel name="finishedScan">
            <div class="" v-for="item of finishedScan" :key="item.id">
              <q-item clickable v-ripple class="flex column">
                <div class="flex justify-between items-center " style="width:100%; color:grey">
                  <div class="" style="font-size:15px">
                    {{item.distance}}
                    <q-badge v-if="item.cod == true" color="red" style="font-size:15px;padding:5px">
                    COD
                    </q-badge>
                  </div>
                  <div class="">{{item.time}}</div>
                </div>
                <div class="q-my-sm" style="font-size:16px;font-weight:500">{{item.location}}</div>
                
                <div class="flex justify-between items-center" style="width:100%; font-size:15px" >
                  <div class="">{{item.name}}</div>
                  <div class="flex items-center" style="font-size:16px; color:red">
                    <q-icon name="local_shipping"></q-icon> 
                    <div class="q-ml-sm">{{item.noOfPackages}}</div> 
                  </div>
                </div>
                
                <div class="">{{item.packageID}}</div>

              </q-item>

              <q-separator />
            </div>


          </q-tab-panel>

          
        </q-tab-panels>
      </q-card>



        <q-stepper-navigation>
          <q-btn @click="enterPasswordDialog = !enterPasswordDialog" color="primary" label="Enter Password" />
          
        </q-stepper-navigation>
      </q-step>

      

      <q-step
        :name="3"
        :title="`Deliver Parcels (0/9)`"
        icon="local_shipping"
        
      >
        

        <q-stepper-navigation>
          <q-btn color="primary" label="Enter Password" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
      
    </q-stepper>
      </q-expansion-item>
      
      <q-separator />
      <q-expansion-item
        expand-separator
        icon="local_shipping"
        
        header-style="font-size:5vw"

      >
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="local_shipping" style="background:#3E5463" text-color="white" />
          </q-item-section>

          <q-item-section>
            Route 1109556
          </q-item-section>

          
        </template>
       
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="local_shipping"
        
        header-style="font-size:5vw"

      >
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="local_shipping" style="background:#3E5463" text-color="white" />
          </q-item-section>

          <q-item-section>
            Route 1109557
          </q-item-section>

          
        </template>
       
      </q-expansion-item>
    </q-list>


    <q-dialog v-model="deliveryPopup">
      <q-card class="q-px-md q-pb-md">
        <Lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
            style="width:70vw"
        />

        <div class="" v-if="currentPackages==7">
          <div class="text-center " style="font-size:3.3vw">
          Your packages are now <span style="color:green">80%</span> ready! 
          </div>
          <div class="text-center q-my-md" style="font-size:4.3vw; font-weight:600">Please proceed to the pickup point in <span style="color:green">10-15 minutes</span></div>
        </div>
        
        <div class="" v-else>
          <div class="text-center q-mt-md" style="font-size:3.3vw">
          Your packages are now <span style="color:green">all</span> ready for collection! 
          </div>
          <div class="text-center q-my-md text-green" style="font-size:4.3vw; font-weight:600">Please proceed to Lot 11B</div>
        </div>

        
        <q-btn unelevated label="On The Way!" class="full-width q-mt-md text-white q-py-xs" no-caps  style="border-radius:5px; background-color:#3E5463" @click="handleClosePopup()" v-close-popup/>


      </q-card>
    </q-dialog>

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
            Parcel <span style="color: lightgreen">successfully</span> scanned!
          </div>
        </div>

        <q-card-actions align="right">
          <q-btn v-if="toScan.length>0" flat label="close" color="green" v-close-popup />
          <q-btn v-else flat label="close" color="green" @click="enterPasswordDialog=!enterPasswordDialog" />

        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="enterPasswordDialog">
      <q-card style="width:90vw" class="q-px-lg q-py-md">
        <div class="flex column justify-center items-center">
          <div class="" style="width: 60vw">
            <Lottie
              :options="defaultPasswordOptions"
              v-on:animCreated="handleAnimation"
              
            />
          </div>

          <div
            class="text-center q-mb-md"
            style="font-size: 4.7vw; width: 100%"
          >
            Enter password from Warehouse Manager: 
          </div>

          <q-input outlined v-model="password" lazy-rules  ref="password" label="Password" autofocus style="width:100%"
          :rules="[ val => val== 'abc' || 'Password Incorrect!']"
           />

        </div>

        <q-card-actions align="right">
          <q-btn  label="Go" color="green" @click="handleRedirect()"  />
        </q-card-actions>
      </q-card>
    </q-dialog>

    
    
  </q-page>
  
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "./utils";
import AnimatedNumber from "animated-number-vue";
import Lottie from "vue-lottie";
import * as animationData from './deliveryVan.json';
import * as animationDataSuccess from "./success.json";
import * as sunData from "./sun.json";
import * as passwordData from "./password.json";
export default {
  data () {
    return {
      step: 1,
      currentPackages:4,
      totalPackages:9,
      estimatedArrivalTime:30,
      packagesProgress:0,
      duration:300,
      deliveryPopup:false,
      defaultOptions: {
        animationData: animationData.default,
        loop: 0,
        autoplay: true,
      },
      defaultSunOptions: {
        animationData: sunData.default,
        loop: 0,
        autoplay: true,
      },
      defaultPasswordOptions: {
        animationData: passwordData.default,
        loop: true,
        autoplay: true,
      },
      defaultSuccessOptions: {
        animationData: animationDataSuccess.default,
        loop: false,
        autoplay: true,
      },
      animationSpeed: 2,
      tab: 'toScan',

      toScan:[
        {
          id:1,
          distance:'1.53km',
          cod:false,
          time:'9AM - 10PM',
          location:'2 Sembawang Hills Drive (575881)',
          name:'Angel',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRG5'
        },
        {
          id:2,
          distance:'1.55km',
          cod:true,
          time:'9AM - 10PM',
          location:'122 Jalan Leban (575827)',
          name:'Monica',
          noOfPackages:2,
          packageID: 'SGNJVAPPDELTRG7'
        },
        {
          id:3,
          distance:'1.50km',
          cod:false,
          time:'9AM - 10PM',
          location:'130 Jalan Leban (575849)',
          name:'Chow',
          noOfPackages:2,
          packageID: 'SGNJVAPPDELTRG8'
        },
        {
          id:4,
          distance:'1.62km',
          cod:true,
          time:'9AM - 10PM',
          location:'15 Jalan Kuras (575826)',
          name:'Gordon',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRG5'
        },
        {
          id:5,
          distance:'1.59km',
          cod:false,
          time:'9AM - 10PM',
          location:'99B Jalan Kuras (575810)',
          name:'Lisa',
          noOfPackages:2,
          packageID: 'SGNJVAPPDELTRG6'
        },
        {
          id:6,
          distance:'1.51km',
          cod:false,
          time:'9AM - 10PM',
          location:'118 Lor 1 Toa Payoh Level 4 Unit 1 (310118)',
          name:'Monica',
          noOfPackages:2,
          packageID: 'SGNJVAPPDELTRG6'
        },
        {
          id:7,
          distance:'1.53km',
          cod:true,
          time:'9AM - 10PM',
          location:'118 Lor 1 Toa Payoh Level 4 Unit 1 (310118)',
          name:'Angel',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRG5'
        },
        {
          id:8,
          distance:'1.55km',
          cod:false,
          time:'9AM - 10PM',
          location:'99B Lor 2 Toa Payoh Level 1 Unit 7 (311099)',
          name:'Monica',
          noOfPackages:2,
          packageID: 'SGNJVAPPDELTRG6'
        },
        {
          id:9,
          distance:'1.50km',
          cod:false,
          time:'9AM - 10PM',
          location:'99B Lor 2 Toa Payoh Level 1 Unit 7 (311099)',
          name:'Monica',
          noOfPackages:2,
          packageID: 'SGNJVAPPDELTRG6'
        },
        


      ],

      finishedScan:[],
      successDialog:false,
      enterPasswordDialog:false,
      password:'',


      
    }
  },
  components: { Container, Draggable, AnimatedNumber,Lottie },
  methods: {  
    onDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);
    },
    formatToPrice(outstandingLoans) {
      return `<span>${Number(outstandingLoans).toFixed(0)}</span>`;
    },
    handleAnimation: function (anim) {
        this.anim = anim;
    },
    increment(){
      
        this.packagesProgress += 0.1
        this.currentPackages ++;
    },
    handleClosePopup(){
      if (this.currentPackages ==7){
        setTimeout( ()=>{
          this.increment()
            this.estimatedArrivalTime -= 6
        }, 2000);

        setTimeout( ()=>{
          this.increment()
            this.estimatedArrivalTime -= 6
            this.deliveryPopup = true
        }, 4000);

        // setTimeout( ()=>{
        //   this.increment()
        //     this.estimatedArrivalTime -= 3
        // }, 6000);
        // setTimeout( ()=>{
        //   this.increment()
        //     this.estimatedArrivalTime -= 3
        // }, 8000);

        // setTimeout( ()=>{
        //   this.increment()
        //     this.deliveryPopup = true
        // }, 10000);
      }
      
      if (this.currentPackages == 9){
        this.step = 2
        this.deliveryPopup = false
      }
      
    },
    scanQR(){
      this.successDialog = true
      this.finishedScan.push(this.toScan.shift())

      if (this.toScan.length == 0){
        // this.step = 3
       
      }
    },
    handleRedirect(){
      if (this.password != 'abc'){
        this.$refs.password.validate()
      }
      else{
        this.$router.push('/delivery')
      }
    }
  },

  mounted(){
    this.packagesProgress = 0.5

    
      setTimeout( ()=>{
        this.increment()
          this.estimatedArrivalTime -= 6
      }, 2000);
    
      setTimeout( ()=>{
        this.increment()
          this.estimatedArrivalTime -= 6
      }, 4000);

      

      setTimeout( ()=>{
        this.increment()
          this.deliveryPopup = true
          this.estimatedArrivalTime -= 6
      }, 6000);





  }
  
}
</script>
