const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input");
const keyCheckBox = document.querySelector(".keya-checkbox input");

let allKeys = [],
audio = new Audio("audio/k.wav");

const playTune = (key) => {
    audio.src = `audio/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() =>{
        clickedKey.classList.remove("active");
    }, 150)
}
// Loop through the keys 
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    // Calling a playtune function when object is clicked
    key.addEventListener("click", () => playTune(key.dataset.key));
});

handleVolume = (e) => {
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

hideCheckbox = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

volume.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
keyCheckBox.addEventListener("click", hideCheckbox);