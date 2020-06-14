var hello = new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://google.com',
	},
	methods: {
		sayHello: function () {
			return this.title;
		},
	},
});

var exercise = new Vue({
	el: '#exercise',
	data: {
		name: 'Matias',
		age: 43,
		total: '',
		link: '/img/kitty.jpg',
	},
	methods: {
		myName: function () {
			return this.name;
		},
		myAge: function () {
			return this.age;
		},
		displayNumbers: function () {
			return (this.total = this.age * 3);
		},
		randomNumber: function () {
			return Math.random();
		},
	},
});

var button = new Vue({
	el: '#button-test',
	data: {
		counter: 0,
		x: 0,
		y: 0,
	},
	methods: {
		increase: function (step) {
			this.counter += step;
		},
		updateCoordinates(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
	},
});
