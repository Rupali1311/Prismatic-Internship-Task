let products = ['Laptop','Smartphone','Table','Washing Machine','Blender','Headphones','Chair','Clothes','Dish Washer','Iron'];

//1. iterate through product list and print all priduct names
console.log("Displying list of product names: ")
products.forEach(list => {
    console.log(list);
});

console.log(products[0].length);

//2. find the product with the longest name
let largestName:string = products[0];
products.forEach(element => {   
    if(element.length > largestName.length){
        largestName = element;
    }
});

console.log("Longest Product Name is: ",largestName);


//3.Count how many products start with a specific letter
let count=0;
products.forEach(index => {
    if(index.startsWith('C')){
        count++;
    }
})
console.log("Count of product names which starts with letter 'C' is: ",count);

//4.Converts the products in lower/uppercase without using loops
let upperCase = products.map(product => product.toUpperCase());

console.log('Products in Uppercase:', upperCase);

//5.show all the products having length>6 without using loops
let productLength: string[] = products.filter((word) => word.length > 5);

console.log("Product list having length > 6 is: ",productLength); 

//6. Accept name of product and remove it if it exists

const removeProductByName = (productName: string) => {
    // Find the index of the product
    const index = products.findIndex(product => product.toLowerCase() === productName.toLowerCase());
    if (index !== -1) {
        products.splice(index, 1);
        console.log(productName," has been removed from the list.");
    } else {
        console.log(productName," not found.");
    }
};

// Example: Accept product name to remove
const productNameToRemove = 'Blender'; 
removeProductByName(productNameToRemove);

console.log('Updated Product List:', products);
