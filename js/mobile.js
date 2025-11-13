    function checkScreenSize() {
      const isMobile = window.innerWidth < 768;
      document.getElementById("mobileWarning").style.display = isMobile ? "flex" : "none";
      document.getElementById("desktopContent").style.display = isMobile ? "none" : "block";
    }
    window.addEventListener("load", checkScreenSize);
    window.addEventListener("resize", checkScreenSize);