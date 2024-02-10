document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("tab-active");
    });

    document.querySelectorAll(".content").forEach((content) => {
      content.classList.remove("active");
    });

    if (tab.classList.contains("tab-griffondor")) {
      document.querySelector(".griff").classList.add("active");
    }

    if (tab.classList.contains("tab-poufsouffle")) {
      document.querySelector(".pouf").classList.add("active");
    }

    if (tab.classList.contains("tab-serdaigle")) {
      document.querySelector(".serd").classList.add("active");
    }

    if (tab.classList.contains("tab-serpentard")) {
      document.querySelector(".serp").classList.add("active");
    }

    tab.classList.add("tab-active");
  });
});
