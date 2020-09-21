'use strict';

// create a constructor : 
var allProducts = [];
var leftproductElement = document.getElementById('firstproduct');
var middleproductElement = document.getElementById('secondtproduct');
var rightproductElement = document.getElementById('thirdproduct');

var firstindex;
var secondindex;
var thirdindex;

var product1;
var product2;
var product3;
var totalClicks = 0;
var resultLists = document.getElementById('results');
var sectionImgs = document.getElementById('allproducts');
// console.log(allProducts);
function Products(nameOfProducts, link) {
    this.nameOfProducts = nameOfProducts;
    this.link = link;
    this.votes = 0;
    this.timesDisplay = 0;
    allProducts.push(this);
}

// console.log(allProducts);
new Products('banana', 'images/banana.jpg');
new Products('bathroom', 'images/bathroom.jpg');
new Products('boots', 'images/boots.jpg');
new Products('breakfast', 'images/breakfast.jpg');
new Products('bubblegum', 'images/bubblegum.jpg');
new Products('chair', 'images/chair.jpg');
new Products('cthulhu', 'images/cthulhu.jpg');
new Products('dog-duck', 'images/dog-duck.jpg');
new Products('dragon', 'images/dragon.jpg');
new Products('pen', 'images/pen.jpg');
new Products('pet-sweep', 'images/pet-sweep.jpg');
new Products('scissors', 'images/scissors.jpg');
new Products('shark', 'images/shark.jpg');
new Products('tauntaun', 'images/tauntaun.jpg');
new Products('unicorn', 'images/unicorn.jpg');
new Products('usb', 'images/usb.gif');
new Products('water', 'images/water-can.jpg');
new Products('wine', 'images/wine-glass.jpg');
// random index for a product, will be from the above array that conatin all the objects below ..


function randomProductsindex() {
    firstindex = Math.floor(Math.random() * allProducts.length); //0 ...  1......2  ....17.....18
    secondindex = Math.floor(Math.random() * allProducts.length);
    thirdindex = Math.floor(Math.random() * allProducts.length);
    while (firstindex === secondindex || firstindex === thirdindex || secondindex === thirdindex) {
        firstindex = Math.floor(Math.random() * allProducts.length); // to pick a random image for the products (pick its index)
        secondindex = Math.floor(Math.random() * allProducts.length);
        thirdindex = Math.floor(Math.random() * allProducts.length);
        console.log(firstindex, secondindex, thirdindex);
    }
    displayProducts(firstindex, secondindex, thirdindex); // to pass the indices to the function below ....
    // product1 = allProducts[firstindex];  // Here we got our random product`s index from the above array ...(allProducts=[....])
    // product2 = allProducts[secondindex];
    // product3 = allProducts[thirdindex];
    // leftproductElement.setAttribute('src', product1.link);
    // middleproductElement.setAttribute('src', product2.link);
    // rightproductElement.setAttribute('src', product3.link);

}

function displayProducts(firstindex, secondindex, thirdindex) {
    product1 = allProducts[firstindex];  // Here we got our random product`s index from the above array ...(allProducts=[....])
    product2 = allProducts[secondindex];
    product3 = allProducts[thirdindex];
    leftproductElement.setAttribute('src', product1.link);
    middleproductElement.setAttribute('src', product2.link);
    rightproductElement.setAttribute('src', product3.link);
    product1.timesDisplay++;
    product2.timesDisplay++;
    product3.timesDisplay++;
}

sectionImgs.addEventListener('click', votingCounts);

function votingCounts(event) {
    console.log(event.target);

    if (event.target.id === 'firstproduct') {
        product1.votes++;
        
        randomProductsindex();
        totalClicks++;

    } else if (event.target.id === 'secondtproduct') {
        product2.votes++;
        randomProductsindex();
        totalClicks++;
    } else if (event.target.id === 'thirdproduct') {
        product3.votes++;
        randomProductsindex();
        totalClicks++;
    }
    if (totalClicks === 25) {
        sectionImgs.removeEventListener('click', votingCounts);
        displyResult();
    }

}


function displyResult() {

    // var resultLists=document.getElementById("results")
    for (var i = 0; i < allProducts.length; i++) {

        var listItem = document.createElement('li');
        resultLists.appendChild(listItem);
        listItem.textContent = 'Dispaly Times for ' + allProducts[i].nameOfProducts + ' is ' + allProducts[i].timesDisplay + ' and votes are : ' + allProducts[i].votes + '.';
        
    }
}
randomProductsindex();



// console.log(leftproductElement, middleproductElement, rightproductElement);
// Inserting the imgs element into the html doc !!!!



// product1.setAttribute('src', 'images/banana.jpg');



// product2.setAttribute('src', 'images/breakfast.jpg');


// product3.setAttribute('src', 'images/pet-sweep.jpg');


