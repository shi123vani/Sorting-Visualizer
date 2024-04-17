// Preload the sound
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
oscillator.type = "sine";
oscillator.start();
oscillator.stop(audioContext.currentTime + 0.1); // Adjust the duration as needed

// Function to play sound
function playSound() {
  const oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);
  oscillator.type = "sine";
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.1); // Adjust the duration as needed
}

// Function to generate random numbers for bar heights
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to create bars with numbers inside
function createBars(container, count) {
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const value = generateRandomNumber(5, 500); // Adjust the range as needed
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    bar.textContent = value;
    container.appendChild(bar);
  }
}

// Function to swap two elements
function swap(el1, el2) {
  const temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;

  const tempText = el1.textContent;
  el1.textContent = el2.textContent;
  el2.textContent = tempText;
}

// Quick sort function
async function quickSort(bars, low, high) {
  if (low < high) {
    let pi = await partition(bars, low, high);

    await quickSort(bars, low, pi - 1);
    await quickSort(bars, pi + 1, high);
  }
}

async function partition(bars, low, high) {
  let pivot = parseInt(bars[high].style.height);
  let i = low - 1;

  for (let j = low; j < high; j++) {
    let heightJ = parseInt(bars[j].style.height);
    bars[j].style.background = "green";
    bars[high].style.background = "red";

    if (heightJ < pivot) {
      i++;
      swap(bars[i], bars[j]);
      await waitforme(delay);
      playSound(); // Play sound when swapping bars
    }
  }

  swap(bars[i + 1], bars[high]);
  await waitforme(delay);
  playSound(); // Play sound when swapping bars

  for (let k = low; k <= high; k++) {
    if (k !== i + 1) {
      bars[k].style.background = "brown";
    }
  }

  return i + 1;
}

// Event listener for the sorting button
const sortBtn = document.querySelector(".quickSort");
sortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();

  const bars = document.querySelectorAll(".bar");
  await quickSort(bars, 0, bars.length - 1);

  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

// Call createBars function to generate bars initially
const container = document.querySelector(".container");
createBars(container, 20); // Change the number of bars as needed
