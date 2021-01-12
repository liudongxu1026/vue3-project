<template>
	<p>num：{{num}}</p>
	<p>count：{{count}}</p>
	<p>arr：{{arr}}</p>
	<!-- <p>{{num}}</p> -->
	<button @click="stopFn">停止</button>
</template>
<script>
import { reactive, toRefs, watch } from 'vue';
export default {
	name: 'watch',
	setup(){
		let info = reactive({
			count: 1,
			num: 10,
			arr: [0,1,2],
		})
		// 监听info，当info中的任意字段改变时，会触发当前watch
		watch(info, (nVal, oVal)=>{
			console.log('旧的', oVal);
			console.log('新的', nVal);
			console.log('---');
			// console.log('新的和当前是否一致', info === oVal, info === nVal, oVal === nVal);
		});
		let timer = setInterval(()=>{
			// info.arr[0]++;
			info.num++;
			// info.count++;
		}, 1000);
		let stopFn = ()=>{
			clearInterval(timer)
			// console.log(1);
		};
		return {
			...toRefs(info),
			stopFn,
		};
	},
}
</script>