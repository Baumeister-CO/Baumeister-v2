function initialiseMenu() {
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const toggleBar = document.getElementById("toggle");

  let open = false;

  function handleMenuButtonClicked() {
    open = !open;
  
    if (open) {
      menuOpen.classList.add("hidden");
      menuClose.classList.remove("hidden");
      toggleBar.classList.remove("hidden")
    } else {
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
      toggleBar.classList.add("hidden")
    }
  }

  if (menuOpen && menuClose) {
    menuOpen.addEventListener("click", handleMenuButtonClicked);
    menuClose.addEventListener("click", handleMenuButtonClicked);
  }
}

initialiseMenu();

