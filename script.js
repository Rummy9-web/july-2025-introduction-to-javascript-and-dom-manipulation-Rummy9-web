// 🚀 Assignment: Mastering JavaScript Fundamentals
// ================================================

// =================== Part 1: Basics ===================
// Variable declaration + conditionals
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// =================== Part 2: Functions ===================
// Function 1: Greeting function
function greetUser(name) {
  return `Hello, ${name}! Welcome 🎉`;
}

// Function 2: Sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// =================== Part 3: Loops ===================
// Loop Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop iteration:", i);
}

// Loop Example 2: While loop
let counter = 1;
while (counter <= 2) {
  console.log("While loop count:", counter);
  counter++;
}

// =================== Part 4: DOM Interactions ===================

// 1️⃣ Check Age Button
document.getElementById("ageBtn").addEventListener("click", function () {
  let userAge = prompt("Enter your age:");
  let message = userAge >= 18 ? "You are an adult ✅" : "You are a minor ❌";
  document.getElementById("ageOutput").textContent = message;
});

// 2️⃣ Calculate Sum Button
document.getElementById("sumBtn").addEventListener("click", function () {
  let num1 = parseInt(prompt("Enter first number:"));
  let num2 = parseInt(prompt("Enter second number:"));
  document.getElementById("sumOutput").textContent =
    "The sum is: " + calculateSum(num1, num2);
});

// 3️⃣ Generate Number List Button
document.getElementById("listBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear list first

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// 4️⃣ Toggle Message Button
document.getElementById("toggleBtn").addEventListener("click", function () {
  let msg = document.getElementById("toggleMsg");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
});
