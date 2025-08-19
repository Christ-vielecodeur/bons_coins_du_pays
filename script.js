// Données locales (simples)
const places = [
    {
        name: "Café Le Rose",
        address: "Rue de la Paix, Brazzaville",
        rating: 4.5,
        description: "Un café cosy avec de très bons cappuccinos."
    },
    {
        name: "Restaurant L’Espoir",
        address: "Avenue de la Cathédrale",
        rating: 4.8,
        description: "Spécialités locales et ambiance familiale."
    },
    {
        name: "Salon Glossy Hair",
        address: "Rue des Orchidées",
        rating: 4.2,
        description: "Salon de coiffure moderne et services de qualité."
    }
];

function displayPlaces() {
    const container = document.getElementById('places-list');
    container.innerHTML = '';

    places.forEach(place => {
        const div = document.createElement('div');
        div.className = 'place-card';

        div.innerHTML = `
            <h2>${place.name}</h2>
            <p><strong>Adresse :</strong> ${place.address}</p>
            <p><strong>Note :</strong> ${place.rating} / 5</p>
            <p>${place.description}</p>
        `;

        container.appendChild(div);
    });
}

displayPlaces();
