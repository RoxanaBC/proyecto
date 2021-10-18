/****** Menu Hamburguesa *********/
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".bar-nav");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".bar-nav")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/****** Menu desplejable Mobile *********/
((d) => {
  const $SubMenuBtn = d.querySelectorAll(".submenu-btn");
  for (let i = 0; i < $SubMenuBtn.length; i++) {
    $SubMenuBtn[i].addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        const $subMenu = this.nextElementSibling;
        const $height = $subMenu.scrollHeight;
        if ($subMenu.classList.contains("desplegar")) {
          $subMenu.classList.remove("desplegar");
          $subMenu.removeAttribute("style");
        } else {
          $subMenu.classList.add("desplegar");
          $subMenu.style.height = $height + "px";
        }
      }
    });
  }
})(document);
