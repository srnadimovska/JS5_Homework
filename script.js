// fetch("https://dummyjson.com/products")
// .then((response) => response.json())
// .then((json) => {
//   json.products.forEach((product) => {
//     document.getElementById("products").innerHTML += `
//     <div class="post">
//      <h2>${product.id}</h2>
//      <h2>${product.title}</h2>
//      <h3>${product.description}</h3>
//      <h3>${product.category}</h3>
//      <h3>${product.price}</h3>

//     </div>
//     `;
//   });
// });

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await responce.json();
  return data;
}

const productsContainer = document.getElementById("product");

getProducts().then((data) => {
  data.forEach((product) => {
    productsContainer.innerHTML += `
        <div class="post">
     <h2>${post.products.id}</h2>
     <p>${post.products.title}</p>
     <p>${post.products.description}</p>
     <h3>${post.products.category}</h3>
     <p>${post.products.price}</p>
    </div>
            
        `;
  });
});

var button = document.getElementById("search-btn");
var inputText = document.getElementsByClassName("product-style");

button.addEventListener("click", () => {
    getProducts(inputText.value).then((data) => {
        console.log(productsContainer);
    });
});


