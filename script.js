const inputItem = Array.from(
  document.querySelectorAll("input[type='checkbox']")
);

const checkIfItemCompleted = (input) => {
  input.addEventListener("click", (event) => {
    const { parentElement, checked } = event.target;
    const { classList, previousElementSibling, nextElementSibling } =
      parentElement;

    const checkPrevAndNextSibling =
      nextElementSibling && previousElementSibling && 
      nextElementSibling.classList.contains("completed") &&
      previousElementSibling.classList.contains("completed");

    const prevItemHasCompleted =
      previousElementSibling &&
      !previousElementSibling.classList.contains("completed");

   
    if (checkPrevAndNextSibling) {
      event.target.checked = true;
      alert("Num vai fazer isso naumm....")
      return;
    }

    if(!previousElementSibling && nextElementSibling.classList.contains("completed")) {
      event.target.checked = true;
      alert("Num vai fazer isso naumm....")
      return;
    }

    if (prevItemHasCompleted) {
      alert("Etapa anterior não está com check");
      event.target.checked = false;
      return;
    }

    if (classList.contains("completed") && !checked) {
      classList.remove("completed");
      event.target.checked = false;
    } else {
      classList.add("completed");
      event.target.checked = true;
    }
  });
};

inputItem.forEach(checkIfItemCompleted);
