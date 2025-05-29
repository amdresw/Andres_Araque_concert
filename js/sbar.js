const eventList = [
    "Twenty One Pilots",
    "Muse",
    "Artic Monkeys",
    "Imagine Dragons",
    "Coldplay",
    "Daft Punk",
    "Zoé",
    // más eventos
];

const resultsContainer = document.querySelector(".results");
const searchInput = document.querySelector(".search-bar input");

const displayResults = function (events) {
    if (events.length > 0) {
        const resultsHTML = events.map(function (event) {
            return `<li onclick="selectEvent(this)">${event}</li>`;
        });
        resultsContainer.innerHTML = "<ul>" + resultsHTML.join("") + "</ul>";
        resultsContainer.classList.add("show"); // Muestra el menú emergente
    } else {
        resultsContainer.innerHTML = "<p>No results found</p>";
        resultsContainer.classList.remove("show"); // Oculta el menú si no hay resultados
    }
};

searchInput.onkeyup = function () {
    let results = [];
    const query = searchInput.value.toLowerCase();

    if (query.length === 0) {
        resultsContainer.innerHTML = "";
        resultsContainer.classList.remove("show"); // Oculta el menú si el campo está vacío
        return;
    }

    results = eventList.filter((event) => event.toLowerCase().includes(query));
    displayResults(results);
};

function selectEvent(event) {
    searchInput.value = event.innerText;
    resultsContainer.innerHTML = "";
    resultsContainer.classList.remove("show"); // Oculta el menú al seleccionar un resultado
}


searchInput.addEventListener("blur", function () {
    setTimeout(() => {
        resultsContainer.classList.remove("show");
    }, 200); // Tiempo para permitir seleccionar un resultado antes de ocultarlo
});

searchInput.addEventListener("focus", function () {
    if (searchInput.value.length > 0) {
        resultsContainer.classList.add("show");
    }
});
