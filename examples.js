




// // Chapter 2 Examples
// // Example 1: Variable Declaration
// let letVariable = 10;
// const constVariable = 20;

// function demoLet() {
//     letVariable += 5;
//     document.getElementById('variableOutput').innerHTML =
//         `let value: ${letVariable} (changed) | const value: ${constVariable}`;
// }

// function demoConst() {
//     try {
//         constVariable = 25; // This will throw an error
//     } catch (error) {
//         document.getElementById('variableOutput').innerHTML =
//             `Error: ${error.message}`;
//     }
// }

// // Example 2: typeof Operator
// function showType() {
//     const input = document.getElementById('typeInput').value;
//     document.getElementById('typeOutput').innerHTML =
//         `Type of "${input}" is: ${typeof input}`;
// }

// // Example 3: Arithmetic Operators
// let currentValue = 0;

// function increment() {
//     currentValue++;
//     updateMathOutput();
// }

// function decrement() {
//     currentValue--;
//     updateMathOutput();
// }

// function addFive() {
//     currentValue += 5;
//     updateMathOutput();
// }

// function updateMathOutput() {
//     document.getElementById('mathOutput').innerHTML =
//         `Current Value: ${currentValue}`;
// }

// // Example 4: Comparison Operators
// function compareValues() {
//     const val1 = document.getElementById('val1').value;
//     const val2 = document.getElementById('val2').value;

//     const looseEqual = val1 == val2;
//     const strictEqual = val1 === val2;

//     document.getElementById('compareOutput').innerHTML =
//         `== : ${looseEqual}<br>=== : ${strictEqual}`;
// }

// // Example 5: Type Coercion
// function showCoercion() {
//     const val1 = document.getElementById('coercion1').value;
//     const val2 = document.getElementById('coercion2').value;

//     document.getElementById('coercionOutput').innerHTML =
//         `String concatenation: ${val1 + val2}<br>
//          Numeric addition: ${Number(val1) + Number(val2)}`;
// }
// // Example 6: Ternary Operator
// function checkAdult() {
//     const age = document.getElementById('userAge').value;
//     const result = age >= 18 ? "Adult 👨💼" : "Junior 🧒";
//     document.getElementById('ternaryOutput').innerHTML =
//         `${age} years old: ${result}`;
// }

// // Example 7: var vs let
// function demoScoping() {
//     let output = "";

//     if (true) {
//         var varVariable = "I'm var";
//         let letVariable = "I'm let";
//     }

//     try {
//         output += `var: ${varVariable}<br>`; // Works
//         output += `let: ${letVariable}`;     // Throws error
//     } catch (error) {
//         output += `let error: ${error.message}`;
//     }

//     document.getElementById('scopeOutput').innerHTML = output;
// }

// // Example 8: Symbols
// function demoSymbols() {
//     const sym1 = Symbol("id");
//     const sym2 = Symbol("id");
//     const output = `sym1: ${sym1.toString()}<br>
//                   sym2: ${sym2.toString()}<br>
//                   sym1 === sym2: ${sym1 === sym2}`;

//     document.getElementById('symbolOutput').innerHTML = output;
// }

// // Chapter 2 Examples
// // Template Literals
// function showGreeting() {
//     const name = document.getElementById('nameInput').value || 'Guest';
//     document.getElementById('greetingOutput').innerHTML =
//         `Hello, ${name}! Today is ${new Date().toLocaleDateString()}`;
// }

// // Variable Swapping
// let a = 5, b = 10;
// function swapVariables() {
//     [a, b] = [b, a];
//     document.getElementById('swapOutput').innerHTML =
//         `After swap: a = ${a}, b = ${b}`;
// }

// // Switch Statement
// function showDay() {
//     const dayNumber = parseInt(document.getElementById('dayNumber').value);
//     let dayName;

//     switch (dayNumber) {
//         case 1: dayName = "Monday"; break;
//         case 2: dayName = "Tuesday"; break;
//         case 3: dayName = "Wednesday"; break;
//         case 4: dayName = "Thursday"; break;
//         case 5: dayName = "Friday"; break;
//         case 6: dayName = "Saturday"; break;
//         case 7: dayName = "Sunday"; break;
//         default: dayName = "Invalid day";
//     }

//     document.getElementById('dayOutput').innerHTML = dayName;
// }

// // Loops
// function runLoops() {
//     let output = "<h3>For Loop (1-5):</h3>";
//     for (let i = 1; i <= 5; i++) {
//         output += i + " ";
//     }

//     output += "<h3>While Loop (6-10):</h3>";
//     let j = 6;
//     while (j <= 10) {
//         output += j + " ";
//         j++;
//     }

//     document.getElementById('loopOutput').innerHTML = output;
// }

// // Chapter 4 Examples
// // Function Declaration
// function calculateSum() {
//     const numA = parseFloat(document.getElementById('numA').value);
//     const numB = parseFloat(document.getElementById('numB').value);
//     document.getElementById('sumOutput').innerHTML =
//         `Sum: ${numA + numB}`;
// }

// // Arrow Functions
// const squareNumber = () => {
//     const num = parseFloat(document.getElementById('squareInput').value);
//     document.getElementById('squareOutput').innerHTML =
//         `Square: ${num ** 2}`;
// }

// // Closures
// const counter = (() => {
//     let count = 0;
//     return () => {
//         count++;
//         document.getElementById('counterOutput').innerHTML =
//             `Clicked ${count} times`;
//     }
// })();

// // Callbacks
// function startTimer() {
//     document.getElementById('timerOutput').innerHTML = "Timer started...";
//     setTimeout(() => {
//         document.getElementById('timerOutput').innerHTML = "3 seconds elapsed!";
//     }, 3000);
// }



// // Chapter 5: Arrays & Objects
// function demoArrayMethods() {
//     let arr = [1, 2, 3];
//     const output = document.getElementById('arrayOutput');

//     arr.push(4);
//     arr.unshift(0);
//     arr.pop();
//     arr.shift();

//     output.innerHTML = `Final Array: [${arr}]<br>
//       Methods used: push(4), unshift(0), pop(), shift()`;
// }

// function showMatrix() {
//     const matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
//     let html = '<table>';
//     matrix.forEach(row => {
//         html += '<tr>';
//         row.forEach(cell => html += `<td>${cell}</td>`);
//         html += '</tr>';
//     });
//     document.getElementById('matrixOutput').innerHTML = html + '</table>';
// }

// function demoObjectOps() {
//     const person = {
//         name: 'Ali',
//         age: 25,
//         occupation: 'Developer'
//     };

//     person.email = 'ali@example.com';
//     delete person.occupation;

//     const output = `Object Properties:<br>
//       ${Object.entries(person).map(([key, val]) =>
//         `${key}: ${val}`).join('<br>')}`;
//     document.getElementById('objectOutput').innerHTML = output;
// }

// function demoJSON() {
//     const obj = { name: 'Sara', score: 85 };
//     const jsonStr = JSON.stringify(obj);
//     const parsedObj = JSON.parse(jsonStr);

//     document.getElementById('jsonOutput').innerHTML = `
//       Stringified: ${jsonStr}<br>
//       Parsed: ${parsedObj.name} - ${parsedObj.score}`;
// }

// // Chapter 6: DOM Manipulation
// function changeHeadingColor() {
//     const color = document.getElementById('colorInput').value;
//     document.querySelector('h1').style.color = color;
// }

// function addListItem() {
//     const input = document.getElementById('listItem');
//     const list = document.getElementById('dynamicList');
//     const newItem = document.createElement('li');
//     newItem.textContent = input.value;
//     list.appendChild(newItem);
//     input.value = '';
// }

// function toggleBox() {
//     const box = document.getElementById('styleBox');
//     box.style.backgroundColor = box.style.backgroundColor === 'blue' ? '' : 'blue';
// }

// // Event Listener
// document.getElementById('clickCounter').addEventListener('click', () => {
//     const output = document.getElementById('eventOutput');
//     const clicks = parseInt(output.textContent.match(/\d+/)) + 1;
//     output.textContent = `Clicks: ${clicks}`;
// });


// // Chapter 7: Events

// // Event Listeners vs Inline
// document.getElementById('listenerBtn').addEventListener('click', () => {
//     document.getElementById('handlerOutput').textContent =
//         "Event listener triggered!";
// });

// function inlineHandler() {
//     document.getElementById('handlerOutput').textContent =
//         "Inline handler triggered!";
// }

// // Mouse Events
// const colorBox = document.getElementById('colorBox');
// colorBox.addEventListener('mouseover', () => {
//     colorBox.style.backgroundColor = '#4CAF50';
//     document.getElementById('mouseOutput').textContent = "Mouse entered!";
// });

// colorBox.addEventListener('mouseout', () => {
//     colorBox.style.backgroundColor = '#eee';
//     document.getElementById('mouseOutput').textContent = "Mouse left!";
// });

// // Keyboard Events
// document.getElementById('keyInput').addEventListener('keyup', (e) => {
//     document.getElementById('keyOutput').textContent =
//         `Typed: ${e.target.value}`;
// });

// // Focus/Blur Events
// const focusInput = document.getElementById('focusInput');
// focusInput.addEventListener('focus', () => {
//     document.getElementById('focusOutput').textContent = "Input focused!";
// });

// focusInput.addEventListener('blur', () => {
//     document.getElementById('focusOutput').textContent = "Input lost focus!";
// });

// // Form Events
// document.getElementById('demoForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.getElementById('formOutput').textContent = "Form submitted!";
// });

// document.getElementById('formInput').addEventListener('input', (e) => {
//     document.getElementById('formOutput').textContent =
//         `Input changed: ${e.target.value}`;
// });

// // Event Delegation
// document.getElementById('eventList').addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         document.querySelectorAll('#eventList li').forEach(li => {
//             li.classList.remove('highlight');
//         });
//         e.target.classList.add('highlight');
//         document.getElementById('delegationOutput').textContent =
//             `Clicked: ${e.target.textContent}`;
//     }
// });

// // Helper function for adding list items
// function addListItem() {
//     const list = document.getElementById('eventList');
//     const newItem = document.createElement('li');
//     newItem.textContent = `Item ${list.children.length + 1}`;
//     list.appendChild(newItem);
// }