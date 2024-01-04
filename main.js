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

const imgContainer = document.querySelector(".hero");
const img = imgContainer.querySelector(".img img");

function shadow(e) {
  const { width, height, top, left } = imgContainer.getBoundingClientRect();
  const walk = 30;
  const x = e.clientX - left;
  const y = e.clientY - top;

  const xWalk = ((x / width) * walk - walk / 2).toFixed(2);
  const yWalk = ((y / height) * walk - walk / 2).toFixed(2);

  img.style.boxShadow = `${xWalk}px ${yWalk}px 10px 3px rgba(250, 110, 22, 0.75)`;
}

imgContainer.addEventListener("mousemove", shadow);
