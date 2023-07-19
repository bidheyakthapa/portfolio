function downloadCV() {
  let link = document.createElement("a");
  link.download = "Bidheyak Thapa's CV.pdf";
  link.href = "Bidheyak Thapa's CV.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

document.getElementById("download-btn").addEventListener("click", downloadCV);

const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
