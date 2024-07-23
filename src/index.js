function generatePoem(event) {
  new Typewriter("#poem", {
    strings: "The poem begins",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("click", generatePoem);
