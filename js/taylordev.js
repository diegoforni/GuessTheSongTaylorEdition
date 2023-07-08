const element = document.getElementById("start");
element.addEventListener("click", start);
var counter = 0
let words = 20
let randomSong;

function start() {
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("album-select").style.visibility="visible";
    document.getElementById("song-select").style.visibility="visible";
      // Typed Initiate
      if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = ",You will now be given, 20 words of a random song, Try to guess the song's title!";
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(','),
            typeSpeed: 60,
            backSpeed: 20,
            loop: false,
            showCursor: false
        });
    }
    setTimeout(() => {
      selectSong();
      }, 12000);
}


// Define the data
const data = [
  {
    album: "Taylor Swift",
    songs: [
      { name: "Tim McGraw", lyrics: "He said the way my blue eyes a lie juan juan sole pan ke as asd asd asd j s js dj" }, 
      { name: "Our Song", lyrics: "I was song He said the way my blue eyes a lie He said the way my blue eyes a lie as asd deas asd dasd sad xca sad fasx" },
    ]
  },
  {
    album: "Fearless",
    songs: [
      { name: "Tim McGraw", lyrics: "xvj xja xvk d xk d skkf s d f g s dk d said the way  said the way  said the way He That's a lie" }, 
      { name: "Should've Said No", lyrics: "It's still have me s sads sad asd asd f d g d g g g g g g d d d d as s asd sd" },
    ]
  }
];

// Get reference to the album select element
const albumSelect = document.getElementById("album-select");
// Get reference to the song select element
let songSelect = document.getElementById("song-select");

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

// Rest of the code...


function selectSong(){

  // Selecting a random album
  const randomAlbumIndex = Math.floor(Math.random() * data.length);
  const randomAlbum = data[randomAlbumIndex];

  // Selecting a random song from the album
  const randomSongIndex = Math.floor(Math.random() * randomAlbum.songs.length);
  randomSong = randomAlbum.songs[randomSongIndex];

  // Splitting the lyrics into words
  const lyricsWords = randomSong.lyrics.split(" ");

  // Selecting a random starting point for the consecutive words
  const randomStartIndex = Math.floor(Math.random() * (lyricsWords.length - words));

  
  const randomWordCount = words;

  // Retrieving the consecutive words from the lyrics
  const randomWords = lyricsWords.slice(randomStartIndex, randomStartIndex + randomWordCount);

  // Joining the words into a single string
  const randomPhrase = randomWords.join(" ");


  //Dar las letras despues de esperar un toque

    
  console.log(`Random phrase: ${randomPhrase}`);
  // Typed Initiate
  if ($('.hero .hero-text h2').length == 1) {
    var typed_strings = `,${randomPhrase}`;
    var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split(','),
        typeSpeed: 60,
        backSpeed: 20,
        loop: false,
        showCursor: false
    });
  }
  
  console.log(`Song: ${randomSong.name} (from the album: ${randomAlbum.album})`);



}
  // Get references to the select element and the button
  songSelect = document.getElementById("song-select");
  const checkButton = document.getElementById("check-button");

  // Function to check if the selected song matches the random song
  function checkSelectedSong() {
    const selectedSongName = songSelect.value;
    if (selectedSongName === randomSong.name) {
      console.log("Selected song matches the random song!");
      counter = counter + 1;
      document.getElementById("counter").innerHTML = counter;
      selectSong()
    } else {
      counter = 0;
      document.getElementById("counter").innerHTML = counter;
      console.log("Selected song does not match the random song.");
      selectSong()
    }

  }
