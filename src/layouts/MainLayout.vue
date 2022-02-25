<template>
  <q-layout view="lHh Lpr lFf">
    <q-header  v-show="!this.$route.fullPath.includes('/loading') && !this.$route.fullPath.includes('/login')" style="" class="ninja-red"> 
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center" style="font-size:6vw">
          {{title}}
        </q-toolbar-title>

      <q-btn
          v-show="!this.$route.fullPath.includes('/home')"
          flat
          round
          icon="arrow_back"
          @click="$router.go(-1)"
          class="absolute-right q-mr-sm"
        />
        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/home" active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item  clickable v-ripple active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="assessment" />
              </q-item-section>

              <q-item-section>
                My Performance
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="military_tech" />
              </q-item-section>

              <q-item-section>
                Top Performance Board
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="email" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="swap_horiz" />
              </q-item-section>

              <q-item-section>
                Parcel Transfer
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="sync" />
              </q-item-section>

              <q-item-section>
                Sync List
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="warning_amber" />
              </q-item-section>

              <q-item-section>
                Report Issue
              </q-item-section>
            </q-item>

             <q-item clickable v-ripple active-class="text-ninja-red">
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                App Tutorial
              </q-item-section>
            </q-item>

             <q-item clickable v-ripple active-class="text-ninja-red" to="/login">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Sign Out
              </q-item-section>
            </q-item>
          </q-list>


          <div style="position:fixed;bottom:0px;width:100% " class="q-pa-md text-white ninja-red">Make a report</div>
        </q-scroll-area>

        <div class="absolute-top text-white ninja-red" style="height: 150px;">
          <div class="absolute-bottom bg-transparent q-mb-md q-px-md">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="~assets/ninja.png">
            </q-avatar>
            <div class="text-weight-bold q-mt-xs">Welcome Ninja!</div>
            
            <div class="flex justify-between items-center">
              <div>opsjunrong-sg</div>
              <div class="flex items-center">
                <div class="">Pick! ID </div>
                <q-icon name="chevron_right" size="xs" />
              </div>
              
            </div>
            
          </div>
        </div>
    </q-drawer>

    <q-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="200">
      <router-view/>
    </transition>
    </q-page-container>

    <!-- <q-footer v-show="this.$route.fullPath != '/loading'"
    :class="'footerDiv'">
      <q-tabs v-model="tab" class="text-grey-10" active-color="primary">
        <q-route-tab
          name="home"
          icon="eva-home-outline"
          label=""
          class="q-py-sm"
          to="/home"
        />
        <q-route-tab
          name="Plan"
          icon="eva-calendar-outline"
          class="q-py-sm"
          to="/page2"
        />
        <q-route-tab
          name="News"
          icon="eva-book-open-outline"
          class="q-py-sm"
          to="/page3"
        />
        <q-route-tab
          name="Profile"
          icon="eva-question-mark-circle-outline"
          class="q-py-sm"
          to="/help"
        />
      </q-tabs>
    </q-footer> -->
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'



export default {
  name: 'MainLayout',
  
  data () {
    return {
      leftDrawerOpen: false,
      tab:'home'
    }
  },computed: {
    title() {
      //use this style for common layout things, add else ifs for diff buttons
      console.log(this.$route.fullPath)
      let currentPath = this.$route.fullPath;
      if (currentPath == "/home" ) {
        return "Dashboard";
      } else if (currentPath ==="/delivery" || currentPath =="/deliveryFinish") {
        return "Delivery List";
      } else if (currentPath.includes("/map")) {
        return "Map";
      } else if (currentPath.includes("/deliveryDetails")) {
        return "Delivery Details";
      } else if (currentPath.includes("/deliverySettings")) {
        return "Delivery Settings";
      }else if (currentPath.includes("/receiptPage")) {
        return "Receipt Page";
      }
    },
  },
  mounted(){
    this.$router.push('/loading')
  }
}
</script>

<style lang="scss">
.q-toolbar__title {
  font-size: 30px;
}

.q-footer {
  .q-tab__icon {
    padding-top:10px;
    padding-bottom:10px;
    font-size: 40px;
  }
}

.footerDiv{
  background-color: rgb(249, 249, 249);
  height:70px
}
</style>