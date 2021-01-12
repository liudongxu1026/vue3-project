<template>
	<p>num：{{num}}</p>
	<p>count：{{count}}</p>
	<p>{{title}}</p>
</template>
<script>
import { inject, reactive, toRefs, watchEffect } from 'vue';
export default {
	name: 'watchEffect',
	setup(){
		const info = reactive({
			count: 1,
			num: 10,
		})
		const title = inject('title');
		// watchEffect 懒执行，只有数据源改变时才会触发这个方法
		watchEffect(()=>{
			// console.log('num', info.num);
			console.log('count', info.count);
		});
		setInterval(()=>{
			info.num++;
			// info.count++;
		}, 1000);
		return {
			...toRefs(info),
			title,
		};
	},
}
</script>