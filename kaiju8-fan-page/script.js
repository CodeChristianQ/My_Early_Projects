document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".abilities");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const textDiv = document.getElementById(targetId);
      if (textDiv) {
        textDiv.style.display = textDiv.style.display === "block" ? "none" : "block";
      }
    });
  });
});
