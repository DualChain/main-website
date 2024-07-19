/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef featuresData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {featuresData[]}
 */
export const featuresData = [
	{
		imgSrc: '',
		title: 'Carbon Activity',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Calculate carbon footprint of your activities and get suggestions to reduce it.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '',
		title: 'Conscious Index',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			'Trading Index that helps you to make conscious decisions based on the impact of the companies.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '',
		title: 'Decentralized Exchange',
		skills: ['React', 'CSS'],
		descripcion:
			'Decentralized Exchange that allows you to trade cryptocurrencies as we adopt the decentralized future while remaining climate conscious.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '',
		title: 'Conscious Trader',
		skills: ['React', 'CSS'],
		descripcion:
			'Adopting AI capabilities to develop a trader that focuses on conscious trading.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '',
		title: 'Newsletter',
		skills: ['React', 'CSS'],
		descripcion:
			'Dualchain newsletter that keeps you updated with the latest news and updates on the conscious philanthropic world.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '',
		title: 'Sustainable Air Fuel',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Sustainable Air Fuel that allows you to calculate the carbon footprint of your flights and offset it, while introducing you to sustainable alternatives.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getfeatures = featuresData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
