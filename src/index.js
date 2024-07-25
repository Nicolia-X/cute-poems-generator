function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "38fd65bf84o27e30f1bfb1a6d59t9604";
  let prompt = `User instructions: Generate a cute poem about ${instructionsInput.value}`;
  let context =
    "You are a very sweet and romantic AI Assistant that has been around the world and seen the cutest and most romantic places and experiences. Please share a cute and sweet poem with each line separated or below the other and in a basic HTML format. Keep the answer short, do not give the poem a heading and make sure to use the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a cute poem about ${instructionsInput.value}</div>`;
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
