function initialiseMenu() {
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  let open = false;

  function showMenu() {
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  }

  function hideMenu() {
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
  }

  function handleMenuButtonClicked() {
    open = !open;

    if (open) {
      menuOpen.classList.add("hidden");
      menuClose.classList.remove("hidden");
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("translate-x-0");
    } else {
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
      mobileMenu.classList.add("translate-x-full");
      mobileMenu.classList.remove("translate-x-0");
    }
  }

  if (menuOpen && menuClose) {
    menuOpen.addEventListener("click", handleMenuButtonClicked);
    menuClose.addEventListener("click", handleMenuButtonClicked);
  }

  menuLinks.addEventListener("click", hideMenu, true);
}
