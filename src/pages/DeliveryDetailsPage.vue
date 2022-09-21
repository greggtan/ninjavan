<template>
  <q-page class="">

      <q-banner class="bg-grey-3 text-black" >
        <div class="flex justify-center items-center" style="font-size:4vw">
          <q-icon name="priority_high" color="red" style="font-size:5vw" ></q-icon>
          <div class="">Deliver between 9 AM - 10 PM</div>
        </div>
      </q-banner>

      <div class="q-mx-md">

        <div class="flex items-center q-my-md">
          <q-avatar class="q-mr-md" style="width:60px;height:60px">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <div class="">
            <div class="" style="font-size:7vw">ANGEL</div>
            <div class="" style="font-size:4.5vw">+65 91699464</div>
          </div>
        </div>
        
        
        <div class="" style="font-size:4.5vw; font-weight:500">Address: <span style="font-weight:300">2 Sembawang Hills Drive  </span></div>
        <div class="q-mt-sm" style="font-size:4.5vw; font-weight:500">Postal: <span style="font-weight:300">575881</span></div>
        <div class="q-mt-sm" style="font-size:4.5vw; font-weight:500">Message: <span style="font-weight:300">Please Call Before Delivery!</span></div>
        

        <div class="text-grey q-mt-md" style="font-size:4vw; font-weight:500">Shipper</div>
        <div class="flex items-center q-gutter-x-md" style="font-size:4.5vw"> 
          <img src="~assets/ninja-circle.png" alt="" style="width:60px">
          <div class="" style="font-weight:500">NinjaTruck</div>  
        </div>

        <div class="flex no-wrap justify-around items-center q-gutter-x-sm q-mt-md">
          <q-btn class="dark-bg text-white" icon="phone" label="Call"  />
          <q-btn class="dark-bg text-white" icon="chat" label="Message" />
          <q-btn class="dark-bg text-white" icon="gps_fixed" label="GPS" />
        </div>
    

      </div>
      <q-separator class="q-my-md"></q-separator>

      <div class="q-px-md">
        <div class="flex justify-between items-center dark-bg text-white q-px-md q-py-sm" style="border-radius:5px">
          <div class="" style="font-size:5vw">To Deliver</div>
          <q-chip square color="red" text-color="white" icon="local_shipping" label="1 Parcel" />
        </div>

        <div class="">
          
          <div class="q-mt-sm" style="font-size:4.5vw; font-weight:500">Parcel ID: <span style="font-weight:300">SGNJVAPPDELTRG5 </span></div>
          <div class="" style="font-size:4.5vw; font-weight:500">Size: <span style="font-weight:300">Small </span></div>
        </div>


      </div>

      <div class="flex justify-between items-center q-px-md no-wrap absolute-bottom q-mb-lg">
        <q-btn class="bg-red text-white " icon="close" label="Fail" to="/delivery" style="width:45vw;font-size:4.5vw" />
        <q-btn class="bg-green text-white" icon="done" label="Proceed" to="/deliverySettings" style="width:45vw; font-size:4.5vw"/>
      </div>
      



  </q-page>
</template>

<script>
export default {
  data () {
    return {
      a:'Delivery details Page'
    }
  },
  
}
</script>
