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
  const tempHeight = el1.style.height;
  const tempValue = el1.textContent;
  el1.style.height = el2.style.height;
  el1.textContent = el2.textContent;
  el2.style.height = tempHeight;
  el2.textContent = tempValue;
}

// Merge function for merge sort
async function merge(bars, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArray = new Array(n1);
  const rightArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArray[i] = {
      height: parseInt(bars[left + i].style.height),
      value: parseInt(bars[left + i].textContent),
    };
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = {
      height: parseInt(bars[mid + 1 + j].style.height),
      value: parseInt(bars[mid + 1 + j].textContent),
    };
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (leftArray[i].value <= rightArray[j].value) {
      bars[k].style.background = "cyan";
      bars[k].style.height = `${leftArray[i].height}px`;
      bars[k].textContent = leftArray[i].value;
      await waitforme(delay);
      playSound(); // Play sound when merging bars
      i++;
    } else {
      bars[k].style.background = "cyan";
      bars[k].style.height = `${rightArray[j].height}px`;
      bars[k].textContent = rightArray[j].value;
      await waitforme(delay);
      playSound(); // Play sound when merging bars
      j++;
    }
    k++;
  }

  while (i < n1) {
    bars[k].style.background = "cyan";
    bars[k].style.height = `${leftArray[i].height}px`;
    bars[k].textContent = leftArray[i].value;
    await waitforme(delay);
    playSound(); // Play sound when merging bars
    i++;
    k++;
  }

  while (j < n2) {
    bars[k].style.background = "cyan";
    bars[k].style.height = `${rightArray[j].height}px`;
    bars[k].textContent = rightArray[j].value;
    await waitforme(delay);
    playSound(); // Play sound when merging bars
    j++;
    k++;
  }
}

// Merge sort function
async function mergeSort(bars, left, right) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  await mergeSort(bars, left, mid);
  await mergeSort(bars, mid + 1, right);

  await merge(bars, left, mid, right);

  for (let i = left; i <= right; i++) {
    bars[i].style.background = "grey";
  }
}

// Event listener for the sorting button
const sortBtn = document.querySelector(".mergeSort");
sortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();

  const bars = document.querySelectorAll(".bar");
  await mergeSort(bars, 0, bars.length - 1);

  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

// Call createBars function to generate bars initially
const container = document.querySelector(".container");
createBars(container, 20); // Change the number of bars as needed
