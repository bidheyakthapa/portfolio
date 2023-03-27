function downloadCV() {
  let link = document.createElement("a");
  link.download = "Bidheyak Thapa's CV.pdf";
  link.href = "Bidheyak Thapa's CV.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

document.getElementById("download-btn").addEventListener("click", downloadCV);
