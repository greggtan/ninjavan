<template>
  <q-page class="">
       <q-card >
        <q-tabs
          v-model="tab"
          
          class="text-grey"
          active-color="ninja-red"
          indicator-color="ninja-red"
          align="justify"
          narrow-indicator
        >
          <q-tab name="toDeliver" :label="`To Deliver (${toDeliver.length + toDeliver2.length + toDeliver3.length  })`" />
          <q-tab name="Completed" :label="`Completed (1)`" />
          <q-tab name="Failed" :label="`Failed (0)`" />
        </q-tabs>

        <q-separator class=""/>
        <div v-if="tab=='toDeliver'" class="flex justify-between items-center q-mx-md q-mt-md no-wrap q-mb-sm">
          <q-input dense rounded outlined v-model="search" style="width:50vw;">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-select dense filled v-model="model" :options="options" behavior="menu" />
        </div>
        

        <q-tab-panels v-model="tab" animated style="height:88vh;overflow-y:scroll">
          <!-- to deliver panel -->
          <q-tab-panel name="toDeliver">
            <div class="" v-if="model=='List View'" v-for="item of toDeliver" :key="item.id">
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

            <div class="" v-if="model=='Cluster View'">
              <q-list bordered class="rounded-borders ">
                <q-expansion-item
                  expand-separator
                  icon="local_shipping"
                  label="Route 1109556"
                  header-style="font-size:5vw;background:#c52133;color:white;"
                  default-opened
                  expand-icon-class="text-white"
                >
                  <template v-slot:header>
                    <q-item-section avatar>
                      
                      <q-icon name="place" style="font-size:7vw;margin-left:2vw"></q-icon>
                    </q-item-section>

                    <q-item-section>
                      Cluster 1 (4 Left)
                    </q-item-section>
                  </template>
                  
                  <div class="" style="max-height:33vh; overflow-y:scroll">
                      <div class="" v-for="item of toDeliver" :key="item.id" style="">
                        <q-item clickable v-ripple class="flex column" to="/deliveryDetails">
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
                  </div>
                  
                  
                </q-expansion-item>
                
                <q-separator />

                <q-expansion-item
                  expand-separator
                  label="Route 1109556"
                  header-style="font-size:5vw;background:#c52133;color:white"
                  class="q-t-md"
                  expand-icon-class="text-white"
                >
                  <template v-slot:header>
                    <q-item-section avatar>
                      
                      <q-icon name="place" style="font-size:7vw;margin-left:2vw"></q-icon>
                    </q-item-section>

                    <q-item-section>
                       Cluster 2 (3 Left)
                    </q-item-section>

                    
                  </template>
                  
                  <div class="" style="max-height:33vh; overflow-y:scroll">
                      <div class="" v-for="item of toDeliver2" :key="item.id" style="">
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
                  </div>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  default-opened
                  label="Route 1109556"
                  header-style="font-size:5vw;background:#c52133;color:white"
                  
                  expand-icon-class="text-white"
                >
                  <template v-slot:header>
                    <q-item-section avatar>
                      
                      <q-icon name="place" style="font-size:7vw;margin-left:2vw"></q-icon>
                    </q-item-section>

                    <q-item-section>
                      Cluster 3 (1 Left)
                    </q-item-section>

                    
                  </template>
                  
                  <!-- add code here -->
                  <div class="" style="max-height:33vh; overflow-y:scroll">
                      <div class="" v-for="item of toDeliver3" :key="item.id" style="">
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
                  </div>
                </q-expansion-item>
              </q-list>
            </div>



          </q-tab-panel>

          <!-- completed panel -->
          <q-tab-panel name="Completed">
            <div class="" v-for="item of completed" :key="item.id">
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

          <!-- failed panel -->
          
        </q-tab-panels>
      </q-card>


      

      <q-btn round color="red-5" style="position:fixed; right:12vw; bottom:12vh; z-index:100; width:80px " to="/map">
          <img src="~assets/googlemaps.png" style="width:100%;height:100%">
      </q-btn>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      search:'',
       model: 'Cluster View',
      options: [
        'Cluster View', 'List View', 'Distance', 'Priority'
      ],
      tab: 'toDeliver',
      toDeliver:[
        
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


      ],
      toDeliver2:[{
          id:1,
          distance:'5.53km',
          cod:true,
          time:'9AM - 10PM',
          location:'Toa Payoh East Blk 247 (129582)',
          name:'Greg',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRG5'
        },
        {
          id:2,
          distance:'5.55km',
          cod:true,
          time:'9AM - 10PM',
          location:'Toa Payoh East Blk 241 (123374)',
          name:'Jayden',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRG5'
        },
        {
          id:3,
          distance:'5.58km',
          cod:true,
          time:'9AM - 10PM',
          location:'Toa Payoh East Blk 207 (123393)',
          name:'Yimah',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRG5'
        },],
        toDeliver3:[{
          id:1,
          distance:'9.23km',
          cod:false,
          time:'9AM - 10PM',
          location:'Frontech Centre #02-34 (144844)',
          name:'Devil',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRA99'
        },
        ],
      completed:[{
          id:1,
          distance:'1.53km',
          cod:false,
          time:'9AM - 10PM',
          location:'2 Sembawang Hills Drive (575881)',
          name:'Angel',
          noOfPackages:1,
          packageID: 'SGNJVAPPDELTRG5'
        },],
    }
  },
  
}
</script>
