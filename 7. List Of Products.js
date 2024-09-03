function listOfProducts(products) {
    let sortedProd = products.sort();
    for (let i = 1; i <= sortedProd.length; i++) {
        console.log(`${i}.${sortedProd[i - 1]}`);

    }

}
listOfProducts(['Watermelon', 'Banana', 'Apples']);
