//
// ROOM 1
//

//Finding most recently published book
function findMostRecentBook(books) {
  return books.reduce((first, current) => {
    return new Date(current.published) > new Date(first.published)
      ? current
      : first;
  });
}

//updating dom with a click
document.addEventListener("DOMContentLoaded", () => {
  // 🪲 Bug: Incorrect ID used for attaching the event listener  - Fixed
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("./books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // 🪲 Bug: Incorrect element ID - Fixed
        document.getElementById("room1Result").textContent =
          mostRecentBook.title;
      });
  });

  //
  // ROOM 2
  //

  // comparing 2 sets of data to return values in common
  function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic - Fixed
    const intersection = new Set([...setA].filter((item) => setB.has(item)));
    return intersection;
  }

  //displaying the data in common of 2 new sets to the DOM with a click event
  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    // 🪲 Bug: What's mssing from JS concepts? - Fixed
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // 🪲 Bug: Incorrect function call - Fixed
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  //
  // ROOM 3
  //

  //Loop function to go through the steps in directions.json, and to wait
  //for 1 sec after each loop with an wait promise
  async function navigateLabyrinth(directions) {
    for (let direction of directions) {
      // 🪲 Bug: No delay - Fixed
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
  }

  // 🪲 Bug: Asynchronous function ? - Fixed
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("./directions.json")
      .then((response) => response.json())
      .then((directions) => {
        navigateLabyrinth(directions).then((message) => {
          // 🪲 Bug: Incorrect method - Fixed
          document.getElementById("room3Result").textContent = message;
        });
      });
  });
});
