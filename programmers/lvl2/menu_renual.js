function solution(orders, course) {
	const orderedCountMap = new Map();
	const maxCountMap = new Map();
	const courseSet = new Set(course);

	function combination(result, index, str) {
		if (courseSet.has(result.length)) {
			let count = orderedCountMap.get(result) || 0;
			orderedCountMap.set(result, ++count);

			const max = maxCountMap.get(result.length) || 0;
			if (max < count) {
				maxCountMap.set(result.length, count);
			}
		}

		for (let i = index; i < str.length; i++) {
			combination(result + str[i], i + 1, str);
		}
	}

	orders.map((order) => order.split("").sort().join("")).forEach((el) => combination("", 0, el));

	return course
		.map((length) => {
			const max = maxCountMap.get(length);
			return Array.from(orderedCountMap)
				.filter((e) => e[0].length === length && e[1] >= 2 && e[1] === max)
				.map((e) => e[0]);
		})
		.flatMap((e) => e)
		.sort();
}

function solution2(orders, course) {
	const ordered = {};
	const candidates = {};
	const maxNum = Array(10 + 1).fill(0);
	const createSet = (arr, start, len, foods) => {
		if (len === 0) {
			ordered[foods] = (ordered[foods] || 0) + 1;
			if (ordered[foods] > 1) candidates[foods] = ordered[foods];
			maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
			return;
		}

		for (let i = start; i < arr.length; i++) {
			createSet(arr, i + 1, len - 1, foods + arr[i]);
		}
	};

	orders.forEach((od) => {
		// arr.sort는 기본적으로 사전식 배열
		const sorted = od.split("").sort();
		// 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
		// course에 있는 길이만 만들면 된다.
		course.forEach((len) => {
			createSet(sorted, 0, len, "");
		});
	});

	const launched = Object.keys(candidates).filter(
		(food) => maxNum[food.length] === candidates[food]
	);

	return launched.sort();
}
