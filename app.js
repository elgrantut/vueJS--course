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
