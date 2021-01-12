<template>
  <button v-for="(oneBtn,index) of btnList" :key="index" :class="{'cur': oneBtn.cpnt == nowBtn}" @click="setCpnt(oneBtn.cpnt)">{{oneBtn.name}}</button>
  <div class="cpnt-coat">
    <component :is="nowBtn" />
  </div>
</template>  

<script>
import ToRefs from './components/ToRefs.vue';
import Computed from './components/Computed.vue';
import Readonly from './components/Readonly.vue';
import WatchEffect from './components/WatchEffect.vue';
import Watch from './components/Watch.vue';
import { reactive, ref, provide } from 'vue';
export default {
  name: 'App',
  components: {
    ToRefs,
    Computed,
    Readonly,
    WatchEffect,
    Watch,
  },
  setup(){
    const ProvideTitle = 'new provide title';
    provide('title', ProvideTitle);
    const btnList = reactive([
      {name: "toRefs", cpnt: 'ToRefs'},
      {name: "computed", cpnt: 'Computed'},
      {name: "readonly", cpnt: 'Readonly'},
      {name: "watchEffect", cpnt: 'WatchEffect'},
      {name: "watch", cpnt: 'Watch'},
    ]);
    let nowBtn = ref(btnList[0].cpnt);
    const setCpnt = function(cpntName){
      nowBtn.value = cpntName;
    };
    return {btnList, nowBtn, setCpnt};
  },
}
</script>
<style scoped>
  button{
    margin-right: 10px;
    padding: 10px;
  }
  .cpnt-coat{
    margin-top: 30px;
  }
  .cur{
    color: #fff;
    background: #36bf73;
  }
</style>
