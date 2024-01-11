const mainBanner = document.getElementById("main-banner");

function intersection(targetToObserve) {
  const callback = ([{ isIntersecting }]) => {
    if (isIntersecting) return;
    mainBanner.style.opacity = "1";
    observer.disconnect();
  };
  const observer = new IntersectionObserver(callback);
  observer.observe(targetToObserve);
}

if (!localStorage.getItem("doNotShoMainBanner")) {
  setTimeout(intersection(document.querySelector("#top-banner-wrapper")), 0);
}

const closeMainBannerBtn = document.getElementById("main-banner__close-btn");

closeMainBannerBtn.addEventListener("click", () => {
  mainBanner.style.opacity = "0";
});
