<template>
  <q-page class="">
      <div class=""></div>
      <q-banner class="bg-grey-3 text-black" >
        <div class="flex no-wrap" style="font-size:4vw">
          <q-icon name="priority_high" color="red" style="font-size:7vw" ></q-icon>
          <div class="">Ensure that the delivery / pick up details are selected correctly</div>
        </div>
      </q-banner>

      <div class="q-mx-md">
        <div class="bg-red text-white q-px-md q-py-sm flex justify-between items-center q-mt-md">
          <div class="" style="font-size:5vw">Delivered {{headerVal}} of 1</div>
          <div class="q-gutter-x-sm">
          
            
          </div>
        </div>

        

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>1. SGNJVAPPDELTRG5</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-checkbox v-model="val"  color="green" />
            </q-item-section>
            
          </q-item>


          <div class="q-mt-md q-mb-md " style="font-size:5.5vw">Select Receipient</div>
          <div class="flex justify-center" style="width:100%">
            <q-btn-toggle
              v-model="model"
              push
              
              toggle-color="red"
              :options="[
                {label: 'Angel', value: 'one', slot: 'one'},
                {label: 'Substitute', value: 'two', slot: 'two'},
                {label: 'Placed at Location', value: 'three', slot: 'three'}
              ]"
            >
            
            </q-btn-toggle>
          </div>
          


      </div>

     
      <q-btn :disable="!val" class="bg-green text-white absolute-bottom q-mb-lg q-mx-auto" icon="done" label="Proceed" to="/receiptPage" style="width:90vw; font-size:4.5vw" />
    
      
      

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      a:'Delivery settings Page',
      val:false,
      model:'one',
      
    }
  },

  computed:{
    headerVal: function(){
      if (this.val == false){
        return 0
      }
      else{
        return 1
      }
    }
  }
  
}
</script>
