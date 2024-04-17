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

// Selection sort function
async function selectionSort() {
  const bars = document.querySelectorAll(".bar");
  const n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      const height1 = parseInt(bars[minIndex].style.height);
      const height2 = parseInt(bars[j].style.height);

      bars[minIndex].style.background = "cyan";
      bars[j].style.background = "cyan";

      if (height2 < height1) {
        minIndex = j;
      }

      await waitforme(delay);
    }

    if (minIndex !== i) {
      playSound(); // Play sound when swapping bars
      swap(bars[minIndex], bars[i]);
    }

    bars[i].style.background = "blue";
    bars[minIndex].style.background = "green";
  }
  bars[n - 1].style.background = "blue";
}

// Event listener for the sorting button
const sortBtn = document.querySelector(".selectionSort");
sortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await selectionSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

// Call createBars function to generate bars initially
const container = document.querySelector(".container");
createBars(container, 20); // Change the number of bars as needed
