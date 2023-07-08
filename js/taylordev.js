const element = document.getElementById("start");
element.addEventListener("click", start);
var counter = 0
let randomSong;

function start() {
    document.getElementById("start").style.display="none";
    document.getElementById("album-select").style.visibility="visible";
    document.getElementById("song-select").style.visibility="visible"; 
    document.getElementById("check-button").style.visibility="visible";
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
  const randomStartIndex = Math.floor(Math.random() * (lyricsWords.length - ( 20 - counter)));

  
  const randomWordCount = 20 - counter;

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
      document.getElementById("counter").innerHTML ="Score: " + counter;
      document.getElementById("words").innerHTML ="Words: " + (20 - counter);
      if (counter === 20){
        //win
        if ($('.hero .hero-text h2').length == 1) {
          var typed_strings =  ", There is no, fucking way, you mannaged to win, without cheating, either way, congrats!";
          var typed = new Typed('.hero .hero-text h2', {
              strings: typed_strings.split(','),
              typeSpeed: 60,
              backSpeed: 20,
              loop: false,
              showCursor: false
          });
        }
      } else{
        selectSong();
      }

    } else {
      let errorMessage
      switch (counter){
        case 0:
          errorMessage = `,Really?,${counter}, let's blame the game`;
          break;
        case 1:
          errorMessage = `,${counter} Point, I know you can do a lot better than that`;
          break;
        case 2:
          errorMessage = `,${counter} Points, thats kind of disapointing`;
          break;
        case 3:
          errorMessage = `,${counter} Points, are you starting to get the hang of it?`;
          break;
        case 4:
          errorMessage = `${counter}... Te puse`;
          break;
        case 5:
          errorMessage = `${counter} Points, thats a special number...`;
          break;
        case 6:
          errorMessage = `${counter} Points, you are getting the hang of it`;
          break;
        case 7:
          errorMessage = `${counter} Points, That's good!`;
          break;
        case 8:
          errorMessage = `${counter} Points, I guess can't get much better than this`;
          break;
        case 9:
          errorMessage = `${counter} Points, You did great!`;
          break;
        case 10:
          errorMessage = `${counter} Points! Thats fucking cool!`;
          break;
        case 11:
          errorMessage = `${counter} ;)` ;
          break;
        case 12:
          errorMessage = `${counter} Points! Keep going! `;
          break;
        case 13:
          errorMessage = `${counter} Points, You can blame the unlucky number`;
          break;
        case 14:
          errorMessage = `${counter} Points! That's my girl!`;
          break;
        case 15:
          errorMessage = `${counter} Points! You are on fire!`;
          break;
        case 16:
          errorMessage = `${counter} Points! Thats so good that you shoud probably take a break`;
          break;
        case 17:
          errorMessage = `${counter} Points! Not gonna lie, Thats impressive`;
          break;
        case 18:
          errorMessage = `${counter} Points! YOU ARE SO CLOSE!, congrats!`;
          break;
        case 19:
          errorMessage = `${counter}! OMG, HOW DID YOU DO THAT???`;
          break;
      }
        // Typed Initiate
      if ($('.hero .hero-text h2').length == 1) {
        var typed_strings =  errorMessage;
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(','),
            typeSpeed: 60,
            backSpeed: 20,
            loop: false,
            showCursor: false
        });
      }
      counter = 0;
      document.getElementById("counter").innerHTML ="Score: " + counter;
      document.getElementById("words").innerHTML ="Words: " + (20 - counter);
      console.log("Selected song does not match the random song.");
      setTimeout(() => {
        selectSong();
      }, 12000);
    }

  }
