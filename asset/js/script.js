import tagcloud from "https://cdn.jsdelivr.net/npm/TagCloud.min.js";


const language = [
	'HTML',
	'CSS',
	'JAVASCRIPT',
	'C++',
	'VUE JS',
	'REACT JS',
	'PYTHON',
	'SASS',
	'BOOTSTRAP',
	'JQUERY',
	'JAVA',
	'KOTLIN',
	'MONGODB',
	'FIGMA',
	'AdobeXD',
	'LIBRARIES',
];

tagcloud('.sphere', language, {
	radius: 240,
	maxspeed: 'normal',
	initSpeed: 'normal',
	direction: 135,
	keep: true,
});
