"use strict";

function Stack() {
	var arr = [];
	var head = -1;

	function top() {
		if(empty())
			throw new Error("Stack is empty");
		else
			return arr[head];
	}

	function push(el) {
		arr[++head] = el;
	}

	function pop() {
		if(empty())
			throw new Error("Stack is empty");

		var el = arr[head--];
		return el;
	}

	function empty() {
		if(head == -1)
			return true;
		return false;
	}

	return {
		push: push,
		top: top,
		pop: pop,
		empty: empty
	}
}