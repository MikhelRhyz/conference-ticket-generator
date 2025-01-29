document.addEventListener("DOMContentLoaded", () => {
  const uploadContainer = document.querySelector("#upload-area");
  const fileInput = document.querySelector("#avatar");
  const uploadMessage = document.querySelector("#upload-message");

  // Handle click to open file input
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

  // Handle file input change
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    handleFile(file);
  });

  // Handle file upload
  function handleFile(file) {
    // Validate file type
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      uploadMessage.textContent = `Uploaded: ${file.name}`;

      // Clear previous preview (if any)
      const existingPreview = uploadContainer.querySelector("img");
      if (existingPreview) {
        existingPreview.remove();
      }

      // Preview the uploaded image
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.style.maxWidth = "100px";
        img.style.marginTop = "10px";
        uploadContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      uploadMessage.textContent = "Please upload a valid image (JPG or PNG)";
    }
  }
});
