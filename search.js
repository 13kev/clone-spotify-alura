
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

// call api function by search input
function requestApi (searchTerm) {
    fetch(` http://localhost:300/artists?name_like=${searchTerm}"`)
    .then((response)) => response.json())
    .then((results) => displayResults(results));
}
// by input, displays artists name and images
function displayResults (results) {
    hidePlaylists();
    const artistImage = document.getElementById("artist-image");
    const artistName = document.getElementById("artist-name");

    results.forEach((element) => {
        artistImage.src = element.urlImage;
        artistName.innerText = element.name;
    })
    resultArtist.classList.remove("hidden");
}
// hide playlists content
function hidePlaylists() {
    playlistContainer.classList.add("hidden");
}

// if found, remove hidden from both elements and display the result
searchInput.addEventListener('input', function() {
    const = searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
})
