const eventList = [
    "Concert A",
    "Concert B",
    "Festival C",
    "Live Show D",
    // más eventos
];

const resultsContainer = document.querySelector(".results");
const searchInput = document.querySelector(".search-bar");

const displayResults = function (events) {
    const resultsHTML = events.map(function (event) {
        return `<li onclick="selectEvent(this)">${event}</li>`;
    });
    resultsContainer.innerHTML = "<ul>" + resultsHTML.join("") + "</ul>";
};

searchInput.onkeyup = function (e) {
    let results = [];

    const query = searchInput.value.toLowerCase();

    if (query.length === 0) {
        resultsContainer.innerHTML = "";
    }

    if (query.length) {
        results = eventList.filter((event) => {
            return event.toLowerCase().includes(query);
        });
    }

    displayResults(results);
};

function selectEvent(event) {
    searchInput.value = event.innerText;
    resultsContainer.innerHTML = "";
}
