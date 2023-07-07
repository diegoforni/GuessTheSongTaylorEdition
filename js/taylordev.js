// Define the data
const data = [
  {
    album: "Taylor Swift",
    songs: [
      { name: "Tim McGraw", lyrics: "He said the way my blue eyes a lie" }, 
      { name: "Our Song", lyrics: "I was song" },
    ]
  },
  {
    album: "Fearless",
    songs: [
      { name: "Tim McGraw", lyrics: "He That's a lie" }, 
      { name: "Should've Said No", lyrics: "It's still have me" },
    ]
  }
];

// Selecting a random album
const randomAlbumIndex = Math.floor(Math.random() * data.length);
const randomAlbum = data[randomAlbumIndex];

// Selecting a random song from the album
const randomSongIndex = Math.floor(Math.random() * randomAlbum.songs.length);
const randomSong = randomAlbum.songs[randomSongIndex];

// Splitting the lyrics into words
const lyricsWords = randomSong.lyrics.split(" ");

// Selecting a random starting point for the consecutive words
const randomStartIndex = Math.floor(Math.random() * (lyricsWords.length - 1));

// Selecting a random number of consecutive words (between 3 and 6)
const randomWordCount = Math.floor(Math.random() * 4) + 3;

// Retrieving the consecutive words from the lyrics
const randomWords = lyricsWords.slice(randomStartIndex, randomStartIndex + randomWordCount);

// Joining the words into a single string
const randomPhrase = randomWords.join(" ");

// Logging the random phrase and the song it is from
console.log(`Random phrase: ${randomPhrase}`);
console.log(`Song: ${randomSong.name} (from the album: ${randomAlbum.album})`);

// Get references to the select element and the button
const songSelect = document.getElementById("song-select");
const checkButton = document.getElementById("check-button");

// Function to check if the selected song matches the random song
function checkSelectedSong() {
  const selectedSongName = songSelect.value;
  if (selectedSongName === randomSong.name) {
    console.log("Selected song matches the random song!");
  } else {
    console.log("Selected song does not match the random song.");
  }
}

// Add event listener to the button
checkButton.addEventListener("click", checkSelectedSong);

// Get reference to the album select element
const albumSelect = document.getElementById("album-select");

// Add a default option to the album select element
const defaultAlbumOption = document.createElement("option");
defaultAlbumOption.value = "";
defaultAlbumOption.text = "Select Album";
defaultAlbumOption.disabled = true;
defaultAlbumOption.selected = true;
albumSelect.appendChild(defaultAlbumOption);

// Populate the album select element
data.forEach(albumData => {
  const albumOption = document.createElement("option");
  albumOption.value = albumData.album;
  albumOption.text = albumData.album;
  albumSelect.appendChild(albumOption);
});

// Update the song select element based on the selected album
albumSelect.addEventListener("change", (event) => {
  const selectedAlbum = event.target.value;
  const selectedAlbumData = data.find(albumData => albumData.album === selectedAlbum);

  // Clear the song select element
  songSelect.innerHTML = "";

  // Populate the song select element with songs from the selected album
  selectedAlbumData.songs.forEach(songData => {
    const songOption = document.createElement("option");
    songOption.value = songData.name;
    songOption.text = songData.name;
    songSelect.appendChild(songOption);
  });
});
