function shallowReactive(obj){
	return new Proxy(obj, {
		get(obj, key){
			return obj[key];
		},
		set(obj, key, value){
			obj[key] = value;
			return true; // 我干完了,干的成功
			
		},
	});
}