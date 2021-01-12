<template>
  <p>{{name}}</p>
  <input v-model="name"/>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'ToRefs',
  components: {

  },
  setup(){
    const userInfo = reactive({
      name: "张三",
      age: 10,
    });
    return {
    //   ...userInfo, //不是响应式数据
      ...toRefs(userInfo), //响应式数据
    }
  },
}
</script>
