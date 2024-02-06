// BOM DIA | BOA TARDE | BOA NOITE

// get reference of element with ID "greetings"
const greetingElement = document.getElementById("greetings");

// get current hour of system
const currentHour = new Date().getHours();

// define greetings based on current hour
// if (current hour >= 5 && currentHour < 12) {
//   greetingElement.textContent = "Bom dia";
// } else if (currentHour >= 12 && currentHour < 18) {
//   greetingElement.textContent = "Boa tarde";
// } else {
//   greetingElement.textContent = "Boa noite"; 

// simpler way to loop
const greetingMessage = 
    currentHour >= 5 && currentHour < 12
        ? "Bom dia"
        : currentHour >= 12 && currentHour < 18
        ? "Boa tarde"
        : "Boa noite";

greetingElement.textContent = greetingMessage;

// inteligent grid
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => { // changes at the size of the element
    const containerWidth = container.offsetWidth; // total width of the container, including padding, border and fill
    const numColums = Math.floor(container.Width /  200); // column number based of container width

    // min width 200px and max 1fr
    container. .gridTemplateColumns = `repeat(${numColums}, minmax(200px, 1fr))`;

    console.log({ container });
    console.log({ numColumns});
});

// observing change of the element 
observer.observe(container);