import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const buttonMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];
  function openMenu(event) {
    menuList.classList.add("active");
    buttonMenu.classList.add("active");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("active");
      buttonMenu.classList.remove("active");
    });
  }
  if (buttonMenu) {
    eventos.forEach((user) => {
      buttonMenu.addEventListener("click", openMenu);
    });
  }
}
