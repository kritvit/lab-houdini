
window.CSS.registerProperty({
	name: '--random-color',
	syntax: '<color>',
	inherits: false,
	initialValue: (function () {

		const colors = [
			'aquamarine',
			'brown',
			'chartreuse',
			'crimson',
			'darkcyan',
			'darkseagreen',
			'deeppink',
			'gold',
			'greenyellow',
			'lightpink',
			'mediumvioletred',
			'moccasin',
			'tomato'
		];

		const color = colors[Math.floor(Math.random()*colors.length)];

		return color;

	}())
});
