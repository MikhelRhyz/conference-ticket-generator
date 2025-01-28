document.addEventListener("DOMContentLoaded", () => {
  const uploadContainer = document.querySelector("#upload-avatar");
  const fileInput = document.querySelector("#avatar");
  const uploadMessage = document.querySelector("#upload-message");

  //Handle click to open file input
  uploadContainer.addEventListener("click", ()=>{
    fileInput.click();
  });
});
