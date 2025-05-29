let notifyButton = document.querySelector(".notify-button");
let notifyArea = document.querySelector(".notify-area");

const ShowDropdown = () => {
  notifyButton.classList.add("active");
  notifyArea.style.visibility = "visible";
}

const HideDropdown = () => {
  notifyButton.classList.remove("active");
  notifyArea.style.visibility = "hidden";
}

function ToggleNotifyDropdown (event) {
  var isInside = notifyButton.contains(event.target) || notifyArea.contains(event.target);
  
  return isInside ? ShowDropdown() : HideDropdown();
}

document.addEventListener("click", ToggleNotifyDropdown);