document.addEventListener("DOMContentLoaded", () => {
  const uploadContainer = document.querySelector("#upload-area");
  const fileInput = document.querySelector("#avatar");
  const uploadMessage = document.querySelector("#upload-message");

  //Handle click to open file input
  uploadContainer.addEventListener("click", () => {
    fileInput.click();
  });

  // Handle drag-and-drop events
  uploadContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadContainer.classList.add("drag-over");
  });

  uploadContainer.addEventListener("dragleave", () => {
    uploadContainer.classList.remove("drag-over");
  });

  uploadContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadContainer.classList.remove("drag-over");
    const file = e.dataTransfer.files[0];
    handleFile(file);
  });

  //Handle file input change
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    handleFile(file);
  });
});
