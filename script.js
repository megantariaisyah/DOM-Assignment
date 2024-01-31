// Define an array to store cart items
var cartItems = [];

// Function to change product details
function changeProduct(name, image, description, price) {
  document.getElementById("content-section").innerHTML = `
        <h2>${name}</h2>
        <img src="${image}" alt="Product Image" id="product-image">
        <div id="product-details">
            <p>Description: ${description}</p>
            <p>Price: ${price}</p>
            <p>Size: <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>`;
}

// Function to add items to the cart
function addToCart() {
  // Get the product information
  var productName = document
    .getElementById("product-details")
    .querySelector("h2").innerText;
  var productPrice = document
    .getElementById("product-details")
    .querySelector("p:nth-child(2)").innerText;

  // Get the selected size
  var selectedSize = document
    .getElementById("product-details")
    .querySelector("select").value;

  // Get the current color
  var currentColor = colorOptions[currentColorIndex];

  // Create an object for the cart item
  var cartItem = {
    name: productName,
    price: productPrice,
    size: selectedSize,
    color: currentColor,
  };

  // Function to add items to the cart
  function addToCart() {


    // Update the sidebar to display the cart information
    updateCartDisplay();

    // Display a confirmation message
    alert("Product added to cart!");
  }

  // Add the item to the cart
  cartItems.push(cartItem);

  // Update the sidebar to display the cart information
  updateCartDisplay();

  // Display a confirmation message
  alert("Product added to cart!");
}

// Function to update the cart display
function updateCartDisplay() {
  // Get the cart display element
  var cartDisplay = document.getElementById("cart-display");

  // Clear previous content
  cartDisplay.innerHTML = "";

  // Create a card for each item in the cart
  cartItems.forEach(function (item, index) {
    var card = document.createElement("div");
    card.classList.add("cart-card");
    card.innerHTML = `
        <p>Name: ${item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Color: ${item.color}</p>
        <p>Size: ${item.size}</p>
        <button onclick="deleteCartItem(${index})">Delete</button>
    `;
    cartDisplay.appendChild(card);
  });
}

// Function to delete a cart item by index
function deleteCartItem(index) {
  // Remove the item from the cartItems array
  cartItems.splice(index, 1);

  // Update the sidebar to reflect the changes
  updateCartDisplay();
}

// ... Other functions and event listeners ...

function changeColorScheme() {
  document.body.style.backgroundColor =
    "#333"; /* Set your preferred background color */
  document.body.style.color = "#ffffff"; /* Set your preferred text color */
}

// Define an array of color options
var colorOptions = ["B.jpg", "G.jpg", "W.jpg"];

// Initialize a variable to keep track of the current color index
var currentColorIndex = 0;

function changeProductColor(colorIndex) {
  // Get the product image element
  var productImage = document.getElementById("product-image");

  // Get the selected color from the array
  var selectedColor = colorOptions[colorIndex];

  // Construct the new image source URL with the selected color and path
  var newImageUrl = `assets/${selectedColor}`;

  // Update the product image source
  productImage.src = newImageUrl;
}

// Display pop-up message on header text hover
document.querySelector("header h1").addEventListener("mouseover", function () {
  alert("Welcome to the ARITZIA!");
});

var isDarkMode = false;

function changeColorScheme() {
  var body = document.body;
  var header = document.querySelector("header");
  var nav = document.querySelector("nav");
  var sidebar = document.querySelector("#sidebar");

  if (!isDarkMode) {
    // Apply dark mode
    body.classList.add("dark-mode");
    header.classList.add("dark-mode");
    nav.style.backgroundColor = "#555";
    sidebar.style.backgroundColor = "#666";
    sidebar.style.color = "#ffffff";
  } else {
    // Revert to default color scheme
    body.classList.remove("dark-mode");
    header.classList.remove("dark-mode");
    nav.style.backgroundColor = "#333";
    sidebar.style.backgroundColor = "#e6e6e6";
    sidebar.style.color = "#333";
  }

  // Function to update the cart display
  function updateCartDisplay() {
    // Get the cart display element
    var cartDisplay = document.getElementById("cart-display");

    // Check if the body has a class indicating dark mode
    var isDarkMode = document.body.classList.contains("dark-mode");

    // Clear previous content
    cartDisplay.innerHTML = "";

    // Create a card for each item in the cart
    cartItems.forEach(function (item, index) {
      var card = document.createElement("div");
      card.classList.add("cart-card");

      // Set text color based on the current color scheme
      card.style.color = isDarkMode ? "#333" : "#ffffff";

      card.innerHTML = `
        <p>Name: ${item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Color: ${item.color}</p>
        <p>Size: ${item.size}</p>
        <button onclick="deleteCartItem(${index})">Delete</button>
    `;
      cartDisplay.appendChild(card);
    });
  }

  // Toggle the color scheme
  isDarkMode = !isDarkMode;
}
