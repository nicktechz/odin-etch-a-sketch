const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
  modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
  if (clickedOutside) {
    if (e.target.classList.contains("modal-overlay"))
      modal.classList.add("hide");
  } else modal.classList.add("hide");
}

modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);

// DOM MANIPULATION VARIABLES
const sketchBox = document.getElementById("sketchBox");
const grid16Btn = document.getElementById("16grid");
const grid24Btn = document.getElementById("24grid");
const grid32Btn = document.getElementById("32grid");
const grid48Btn = document.getElementById("48grid");
const grid64Btn = document.getElementById("64grid");
const grid16BtnModal = document.getElementById("16gridModal");
const grid24BtnModal = document.getElementById("24gridModal");
const grid32BtnModal = document.getElementById("32gridModal");
const grid48BtnModal = document.getElementById("48gridModal");
const grid64BtnModal = document.getElementById("64gridModal");
const clearBtn = document.getElementById("clearBtn");

let gridSize = 16;
let isCurrentGrid = false;

grid16Btn.addEventListener("click", () => {
  gridSize = 16;
  resetGrid();
  createGrid(gridSize);
});

grid24Btn.addEventListener("click", () => {
  gridSize = 24;
  resetGrid();
  createGrid(gridSize);
});

grid32Btn.addEventListener("click", () => {
  gridSize = 32;
  resetGrid();
  createGrid(gridSize);
});
grid48Btn.addEventListener("click", () => {
  gridSize = 48;
  resetGrid();
  createGrid(gridSize);
});
grid64Btn.addEventListener("click", () => {
  gridSize = 64;
  resetGrid();
  createGrid(gridSize);
});
grid16BtnModal.addEventListener("click", () => {
  gridSize = 16;
  resetGrid();
  createGrid(gridSize);
  closeModal();
});

grid24BtnModal.addEventListener("click", () => {
  gridSize = 24;
  resetGrid();
  createGrid(gridSize);
  closeModal();
});

grid32BtnModal.addEventListener("click", () => {
  gridSize = 32;
  resetGrid();
  createGrid(gridSize);
  closeModal();
});
grid48BtnModal.addEventListener("click", () => {
  gridSize = 48;
  resetGrid();
  createGrid(gridSize);
  closeModal();
});
grid64BtnModal.addEventListener("click", () => {
  gridSize = 64;
  resetGrid();
  createGrid(gridSize);
  closeModal();
});

clearBtn.addEventListener("click", () => {
  resetGrid();
  createGrid(gridSize);
});

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.style.border = "1px solid black";
    gridItem.style.height = `${498 / gridSize}px`;
    gridItem.style.width = `${498 / gridSize}px`;
    gridItem.classList = "gridItem";
    sketchBox.appendChild(gridItem);
    gridItem.addEventListener("mouseenter", () => {
      gridItem.style.backgroundColor = "#eab308";
    });
  }
};

const resetGrid = () => {
  const gridItem = Array.from(document.getElementsByClassName("gridItem"));
  gridItem.forEach((element) => {
    element.remove();
  });
};

createGrid(16);
