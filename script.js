// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/Rambo Phonk 2.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

// Array of songs with their names and file paths
let songs = [
  {
    songName: "Rambo Phonk 2, New Path ",
    filePath: "songs/Rambo Phonk 2.mp3",
    coverPath: "song-cover/1.jpg",
  },
  {
    songName: "Vortex, Untouchable",
    filePath: "songs/Vortex.mp3",
    coverPath: "song-cover/unnamed.png",
  },
  {
    songName: "Brazillian Phonk, BeepBeep",
    filePath: "songs/Brazillain Phonk.mp3",
    coverPath: "song-cover/download.jpeg",
  },
  {
    songName: "Drift Phonk, NeverEnding",
    filePath: "songs/Drift Phonk.mp3",
    coverPath: "song-cover/unnamed (1).png",
  },
  {
    songName: "Madness, Absolution",
    filePath: "songs/Madness.mp3",
    coverPath: "song-cover/noob.webp",
  },
  {
    songName: "Drift Rush, BigDrop",
    filePath: "songs/Drift Rush.mp3",
    coverPath: "song-cover/ok.jpg",
  },
  {
    songName: "Safer, TinCap",
    filePath: "songs/Safer.mp3",
    coverPath: "song-cover/eyes.png",
  },
  {
    songName: "Night Drive, Untouchable",
    filePath: "songs/Night drive.mp3",
    coverPath: "song-cover/blue.webp",
  },
  {
    songName: "Speed, Family",
    filePath: "songs/Speed.mp3",
    coverPath: "song-cover/unnamed.jpg",
  },
  {
    songName: "Midnight Mosh, Dragons",
    filePath: "songs/Midnight Mosh.mp3",
    coverPath: "song-cover/purple.png",
  },
];

// Function to play the next song
const playNextSong = () => {
  if (songIndex < songs.length - 1) {
    songIndex++;
    playSong();
  } else {
    songIndex = 0; // Loop back to the first song
    playSong();
  }
};

// Function to play a specific song
const playSong = () => {
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
};

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    playSong();
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to the 'ended' event for playing the next song
audioElement.addEventListener("ended", playNextSong);

// ... (your existing event listeners)

// Function to initialize song items
const initializeSongItems = () => {
  songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element
      .getElementsByClassName("songItemPlay")[0]
      .addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = i;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        playSong();
      });
  });
};

// Function to make all plays inactive
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

// Initialize song items
initializeSongItems();
