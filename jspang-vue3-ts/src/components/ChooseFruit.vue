<template>
	<h1>请选择你最喜欢的水果</h1>
	<button v-for="(oneFruit, index) of fruits" :key="index" @click="chooseMyLike(oneFruit), haha()">
		{{oneFruit}}
	</button>
	<h2>你最喜欢的水果是： {{myLike || '未选择'}}</h2>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
	setup() {
		const fruits = ref(['苹果', '橘子', '香蕉']);
		const myLike = ref("");
		function chooseMyLike(oneFruit: string): void{
			myLike.value = oneFruit;
		}
		function haha(){
			console.log('我也执行了哈哈哈');
			console.log(myLike.value);
		}
		return {fruits, myLike, chooseMyLike, haha};
	},
})
</script>
<style scoped>
button{
  margin-right: 20px;
  padding: 20px;
  font-size: 20px;
}
</style>