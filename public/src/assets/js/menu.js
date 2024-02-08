document.addEventListener('DOMContentLoaded', function () {
	// Définition des variables
	let mainMenu = document.getElementById('main-menu');
	let menuImage = document.getElementById('menu-image');
	let menuIcon = document.getElementById('menu-icon');
	let menuLinks = mainMenu.querySelectorAll('a');

	// Lorsque l'image du menu est cliquée
	menuImage.addEventListener('click', function () {
		// Vérification de la visibilité du menu
		let isMenuVisible = mainMenu.style.display === 'block';

		// Modification de la visibilité du menu
		mainMenu.style.display = isMenuVisible ? 'none' : 'block';

		// Vérification de la valeur actuelle de l'attribut src
		let currentSrc = menuIcon.getAttribute('src');
		let newSrc = '';

		// Détermination de la nouvelle valeur de l'attribut src
		if (currentSrc === '/src/assets/img/menu.svg') {
			newSrc = '/src/assets/img/close.svg';
		} else {
			newSrc = '/src/assets/img/menu.svg';
		}

		// Modification de la valeur de l'attribut src
		menuIcon.setAttribute('src', newSrc);
	});

	// Obtenir les liens dans le menu

	// Ajout d'un gestionnaire d'événements à chaque lien
	menuLinks.forEach((link) => {
		link.addEventListener('click', function (event) {
			// Suppression de la classe active de tous les liens
			menuLinks.forEach((link) => {
				link.classList.remove('active');
			});
			// Ajout de la classe active au lien sur lequel on a cliqué
			this.classList.add('active');
		});
	});

	// Fermer le menu lorsqu'un lien est cliqué
	menuLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			isMenuVisible = 'none';
			// Vérification de la valeur actuelle de l'attribut src
			let currentSrc = menuIcon.getAttribute('src');
			let newSrc = '';

			// Détermination de la nouvelle valeur de l'attribut src
			if (currentSrc === '/img/menu.svg') {
				newSrc = '/src/assets/img/close.svg';
			} else {
				newSrc = '/src/assets/img/menu.svg';
			}
		});
	});

	// Valeur initiale de la propriété display
	mainMenu.style.display = 'none';
});
