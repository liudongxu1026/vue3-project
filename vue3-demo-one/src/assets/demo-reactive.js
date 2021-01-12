function ref(value){
	return reactive({value});
}
function reactive(obj){
	// 不是对象(数组、对象)就返回
	if(typeof obj !== 'object') return;
	// * 如果是数组
	if(obj instanceof Array){
		// 如果是数据，判断数组中的每一个元素是不是对象
		obj.forEach((item, index)=>{
			// 是对象(数组、对象)就处理一下，不是对象就不管了
			if(typeof item === 'object') obj[index] = reactive(item);
		});
	}else{ // *如果是对象
		Object.keys(obj).forEach((key)=>{
			// 是对象(数组、对象)就处理一下，不是对象就不管了
			if(typeof obj[key] === 'object') obj[key] = reactive(obj[key]);
		});
	}
	return new Proxy(obj, {
		get(obj, key){
			return obj[key];
		},
		set(obj, key, value){
			console.log('更新ui 哈哈哈');
			obj[key] = value;
			return true; // 我干完了,干的成功
		},
	});
}

let state = reactive({a: {b: 1, c: {d: 2}}})
state.a.b = 2; // 会更新ui
state.a.c.d = 888; // 会更新ui
console.log(state); //{ a: { b: 2, c: { d: 888 } } }

let state = reactive([1,2, {a: 1}])
state[0] = 11; // 会更新ui
state[2].a = 'abc'; // 会更新ui
console.log(state); // [ 11, 2, { a: 'abc' } ]



