// const recipes = [
//     {
//         title: "Chicken Curry",
//         ingredients: ["Chicken", "Curry Powder", "Onion", "Garlic", "Tomato", "Coconut Milk", "Spices"],
//         instructions: "1. Cook chicken. 2. Sauté onions and garlic. 3. Add curry powder and spices. 4. Add chicken and coconut milk. 5. Simmer for 20 minutes.",
//         prepTime: "40 minutes",
//         image: "../images/Chicken-Curry.jpg"
//     },
//     {
//         title: "Vegan Tacos",
//         ingredients: ["Taco Shells", "Lettuce", "Tomato", "Avocado", "Black Beans", "Taco Seasoning"],
//         instructions: "1. Warm taco shells. 2. Sauté black beans with taco seasoning. 3. Assemble with lettuce, tomato, and avocado.",
//         prepTime: "20 minutes",
//         image: "../images/Vegan Tacos.jpg"
//     },
//     {
//         title: "Spaghetti Bolognese",
//         ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic", "Herbs", "Olive Oil"],
//         instructions: "1. Cook spaghetti. 2. Sauté beef with onions and garlic. 3. Add tomato sauce and herbs. 4. Simmer and serve with spaghetti.",
//         prepTime: "30 minutes",
//         image: "../images/Spaghetti Bolognese.jpg"
//     },
//     {
//         title: "Chocolate Cake",
//         ingredients: ["Flour", "Cocoa Powder", "Eggs", "Sugar", "Butter", "Vanilla", "Baking Powder"],
//         instructions: "1. Mix dry ingredients. 2. Beat eggs, butter, and sugar. 3. Combine wet and dry ingredients. 4. Bake for 35 minutes.",
//         prepTime: "50 minutes",
//         image: "../images/Chocolate Cake.jpg"

//     },
//     {
//         title: "Vegetable Stir-Fry",
//         ingredients: ["Broccoli", "Carrots", "Bell Pepper", "Soy Sauce", "Ginger", "Garlic", "Tofu"],
//         instructions: "1. Sauté ginger and garlic. 2. Add vegetables and tofu. 3. Stir-fry with soy sauce for 10 minutes.",
//         prepTime: "20 minutes",


//         image: "../images/Vegetable Stir-Fry.jpg"

//     },
//     {
//         title: "Grilled Cheese Sandwich",
//         ingredients: ["Bread", "Cheese", "Butter"],
//         instructions: "1. Butter the bread. 2. Place cheese between slices of bread. 3. Grill until golden brown on both sides.",
//         prepTime: "10 minutes",
//         image: "../images/Grilled Cheese Sandwich.jpg"
//     },
//     {
//         title: "Caesar Salad",
//         ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan Cheese"],
//         instructions: "1. Toss lettuce with Caesar dressing. 2. Add croutons and Parmesan.",
//         prepTime: "10 minutes",
//         image: "../images/Caesar Salad.jpg"
//     },
//     {
//         title: "bariis iyo hilib",
//         ingredients: ["Basal & Toon", "bariis", "hilib", "xawaaji"],
//         instructions: "1. Bariis & Biyo Ku dar. 2. xawaji ku dar . 4. hilibka ku dar.",
//         prepTime: " 1 hours",
//         image: "images/bariis.jpg"
//     },
//     {
//         title: "soor",
//         ingredients: ["budo soor", "biyo", "caano "],
//         instructions: "1. soor. 2. digsiga biyo ku shub . 4. walaaq ila ay ku karto.",
//         prepTime: " 20 minutes",
//         image: "images/soor.jpg"
//     },

// ];





// Initialize with all recipes



document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('recipes')) {
        displayRecipes(recipes);
    }
    if (document.getElementById('favorites')) {
        loadFavorites();
    }

});
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('favorites')) {
        loadFavorites();
    }
});

// Search functionality
function searchRecipe() {
    const query = document.getElementById('recipeSearch').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)


        .then(response => response.json())
        .then(data => {
            displayRecipes(data.meals || []);
        });
}

// Display recipes

function displayRecipes(recipes) {
    const container = document.getElementById('recipes');
    container.innerHTML = '';

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.strMealThumb || recipe.image}" alt="${recipe.strMeal || recipe.title}" class="recipe-image">
            <h3>${recipe.strMeal || recipe.title}</h3>
            <p>Category: ${recipe.strCategory || "Unknown"}</p>
            <p>Instructions: ${(recipe.strInstructions || "").substring(0, 100)}...</p>
            <button class="bookmark-btn" onclick='addToFavorites(${JSON.stringify(recipe).replace(/'/g, "&#39;")})'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1792 1792" fill="currentColor">
                    <path d="M1408 256H384v1242l423-406 89-85 89 85 423 406V256zm12-128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62V240q0-34 19.5-62t52.5-41q21-9 44-9h1048z"></path>
                </svg>
            </button>
        `;

        container.appendChild(card);
    });
}






// Favorites management
function addToFavorites(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Standardize data structure before saving
    const newRecipe = {
        title: recipe.strMeal || recipe.title,  // Handle API and local recipes
        image: recipe.strMealThumb || recipe.image,
        ingredients: recipe.ingredients || [], // Some recipes might not have ingredients
        category: recipe.strCategory || "Unknown"
    };

    // Prevent duplicate entries
    if (!favorites.some(fav => fav.title === newRecipe.title)) {
        favorites.push(newRecipe);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites!');
    } else {
        alert('Already in favorites!');
    }
}

function loadFavorites() {
    const container = document.getElementById('favorites');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    console.log("Favorites from localStorage:", favorites); // Debugging

    if (favorites.length === 0) {
        container.innerHTML = '<p>No favorites yet!</p>';
        return;
    }

    container.innerHTML = ''; // Clear previous content

    favorites.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" class="recipe-image">
            <h3>${recipe.title}</h3>
            <p>Category: ${recipe.category || "Unknown"}</p>
            <button onclick="removeFavorite('${recipe.title}')">Remove</button>
        `;
        container.appendChild(card);
    });
}


function removeFavorite(title) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(f => f.title !== title);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites();
}





// Chapter 2 Examples
// Example 1: Variable Declaration
let letVariable = 10;
const constVariable = 20;

function demoLet() {
  letVariable += 5;
  document.getElementById('variableOutput').innerHTML =
    `let value: ${letVariable} (changed) | const value: ${constVariable}`;
}

function demoConst() {
  try {
    constVariable = 25; // This will throw an error
  } catch (error) {
    document.getElementById('variableOutput').innerHTML =
      `Error: ${error.message}`;
  }
}

// Example 2: typeof Operator
function showType() {
  const input = document.getElementById('typeInput').value;
  document.getElementById('typeOutput').innerHTML =
    `Type of "${input}" is: ${typeof input}`;
}

// Example 3: Arithmetic Operators
let currentValue = 0;

function increment() {
  currentValue++;
  updateMathOutput();
}

function decrement() {
  currentValue--;
  updateMathOutput();
}

function addFive() {
  currentValue += 5;
  updateMathOutput();
}

function updateMathOutput() {
  document.getElementById('mathOutput').innerHTML =
    `Current Value: ${currentValue}`;
}

// Example 4: Comparison Operators
function compareValues() {
  const val1 = document.getElementById('val1').value;
  const val2 = document.getElementById('val2').value;

  const looseEqual = val1 == val2;
  const strictEqual = val1 === val2;

  document.getElementById('compareOutput').innerHTML =
    `== : ${looseEqual}<br>=== : ${strictEqual}`;
}

// Example 5: Type Coercion
function showCoercion() {
  const val1 = document.getElementById('coercion1').value;
  const val2 = document.getElementById('coercion2').value;

  document.getElementById('coercionOutput').innerHTML =
    `String concatenation: ${val1 + val2}<br>
         Numeric addition: ${Number(val1) + Number(val2)}`;
}
// Example 6: Ternary Operator
function checkAdult() {
  const age = document.getElementById('userAge').value;
  const result = age >= 18 ? "Adult 👨💼" : "Junior 🧒";
  document.getElementById('ternaryOutput').innerHTML =
    `${age} years old: ${result}`;
}

// Example 7: var vs let
function demoScoping() {
  let output = "";

  if (true) {
    var varVariable = "I'm var";
    let letVariable = "I'm let";
  }

  try {
    output += `var: ${varVariable}<br>`; // Works
    output += `let: ${letVariable}`;     // Throws error
  } catch (error) {
    output += `let error: ${error.message}`;
  }

  document.getElementById('scopeOutput').innerHTML = output;
}

// Example 8: Symbols
function demoSymbols() {
  const sym1 = Symbol("id");
  const sym2 = Symbol("id");
  const output = `sym1: ${sym1.toString()}<br>
                  sym2: ${sym2.toString()}<br>
                  sym1 === sym2: ${sym1 === sym2}`;

  document.getElementById('symbolOutput').innerHTML = output;
}

// Chapter 2 Examples
// Template Literals
function showGreeting() {
  const name = document.getElementById('nameInput').value || 'Guest';
  document.getElementById('greetingOutput').innerHTML =
    `Hello, ${name}! Today is ${new Date().toLocaleDateString()}`;
}

// Variable Swapping
let a = 5, b = 10;
function swapVariables() {
  [a, b] = [b, a];
  document.getElementById('swapOutput').innerHTML =
    `After swap: a = ${a}, b = ${b}`;
}

// Switch Statement
function showDay() {
  const dayNumber = parseInt(document.getElementById('dayNumber').value);
  let dayName;

  switch (dayNumber) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    case 6: dayName = "Saturday"; break;
    case 7: dayName = "Sunday"; break;
    default: dayName = "Invalid day";
  }

  document.getElementById('dayOutput').innerHTML = dayName;
}

// Loops
function runLoops() {
  let output = "<h3>For Loop (1-5):</h3>";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }

  output += "<h3>While Loop (6-10):</h3>";
  let j = 6;
  while (j <= 10) {
    output += j + " ";
    j++;
  }

  document.getElementById('loopOutput').innerHTML = output;
}

// Chapter 4 Examples
// Function Declaration
function calculateSum() {
  const numA = parseFloat(document.getElementById('numA').value);
  const numB = parseFloat(document.getElementById('numB').value);
  document.getElementById('sumOutput').innerHTML =
    `Sum: ${numA + numB}`;
}

// Arrow Functions
const squareNumber = () => {
  const num = parseFloat(document.getElementById('squareInput').value);
  document.getElementById('squareOutput').innerHTML =
    `Square: ${num ** 2}`;
}

// Closures
const counter = (() => {
  let count = 0;
  return () => {
    count++;
    document.getElementById('counterOutput').innerHTML =
      `Clicked ${count} times`;
  }
})();

// Callbacks
function startTimer() {
  document.getElementById('timerOutput').innerHTML = "Timer started...";
  setTimeout(() => {
    document.getElementById('timerOutput').innerHTML = "3 seconds elapsed!";
  }, 3000);
}



// Chapter 5: Arrays & Objects
function demoArrayMethods() {
  let arr = [1, 2, 3];
  const output = document.getElementById('arrayOutput');

  arr.push(4);
  arr.unshift(0);
  arr.pop();
  arr.shift();

  output.innerHTML = `Final Array: [${arr}]<br>
      Methods used: push(4), unshift(0), pop(), shift()`;
}

function showMatrix() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let html = '<table>';
  matrix.forEach(row => {
    html += '<tr>';
    row.forEach(cell => html += `<td>${cell}</td>`);
    html += '</tr>';
  });
  document.getElementById('matrixOutput').innerHTML = html + '</table>';
}

function demoObjectOps() {
  const person = {
    name: 'Ali',
    age: 25,
    occupation: 'Developer'
  };

  person.email = 'ali@example.com';
  delete person.occupation;

  const output = `Object Properties:<br>
      ${Object.entries(person).map(([key, val]) =>
    `${key}: ${val}`).join('<br>')}`;
  document.getElementById('objectOutput').innerHTML = output;
}

function demoJSON() {
  const obj = { name: 'Sara', score: 85 };
  const jsonStr = JSON.stringify(obj);
  const parsedObj = JSON.parse(jsonStr);

  document.getElementById('jsonOutput').innerHTML = `
      Stringified: ${jsonStr}<br>
      Parsed: ${parsedObj.name} - ${parsedObj.score}`;
}

// Chapter 6: DOM Manipulation
function changeHeadingColor() {
  const color = document.getElementById('colorInput').value;
  document.querySelector('h1').style.color = color;
}

function addListItem() {
  const input = document.getElementById('listItem');
  const list = document.getElementById('dynamicList');
  const newItem = document.createElement('li');
  newItem.textContent = input.value;
  list.appendChild(newItem);
  input.value = '';
}

function toggleBox() {
  const box = document.getElementById('styleBox');
  box.style.backgroundColor = box.style.backgroundColor === 'blue' ? '' : 'blue';
}

// Event Listener
document.getElementById('clickCounter').addEventListener('click', () => {
  const output = document.getElementById('eventOutput');
  const clicks = parseInt(output.textContent.match(/\d+/)) + 1;
  output.textContent = `Clicks: ${clicks}`;
});


// Chapter 7: Events

// Event Listeners vs Inline
document.getElementById('listenerBtn').addEventListener('click', () => {
  document.getElementById('handlerOutput').textContent =
    "Event listener triggered!";
});

function inlineHandler() {
  document.getElementById('handlerOutput').textContent =
    "Inline handler triggered!";
}

// Mouse Events
const colorBox = document.getElementById('colorBox');
colorBox.addEventListener('mouseover', () => {
  colorBox.style.backgroundColor = '#4CAF50';
  document.getElementById('mouseOutput').textContent = "Mouse entered!";
});

colorBox.addEventListener('mouseout', () => {
  colorBox.style.backgroundColor = '#eee';
  document.getElementById('mouseOutput').textContent = "Mouse left!";
});

// Keyboard Events
document.getElementById('keyInput').addEventListener('keyup', (e) => {
  document.getElementById('keyOutput').textContent =
    `Typed: ${e.target.value}`;
});

// Focus/Blur Events
const focusInput = document.getElementById('focusInput');
focusInput.addEventListener('focus', () => {
  document.getElementById('focusOutput').textContent = "Input focused!";
});

focusInput.addEventListener('blur', () => {
  document.getElementById('focusOutput').textContent = "Input lost focus!";
});

// Form Events
document.getElementById('demoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formOutput').textContent = "Form submitted!";
});

document.getElementById('formInput').addEventListener('input', (e) => {
  document.getElementById('formOutput').textContent =
    `Input changed: ${e.target.value}`;
});

// Event Delegation
document.getElementById('eventList').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    document.querySelectorAll('#eventList li').forEach(li => {
      li.classList.remove('highlight');
    });
    e.target.classList.add('highlight');
    document.getElementById('delegationOutput').textContent =
      `Clicked: ${e.target.textContent}`;
  }
});

// Helper function for adding list items
function addListItem() {
  const list = document.getElementById('eventList');
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
}

document.addEventListener('DOMContentLoaded', () => {
    searchRecipe()
});