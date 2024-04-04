
async function fetchData(){
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const productsList = data.products;
        const filteredProducts = [];
        productsList.forEach(product => {
            const productPrice = product.price;
            const productName = product.title.toLowerCase();
            if (productPrice >= 500 && productPrice <= 20000 && productName.startsWith("iphone")) {
                filteredProducts.push(product);
            }
        });
        filteredProducts.sort((a, b) => b.rating - a.rating);
        console.log(filteredProducts);
    } catch (error) {
        console.error('fetching data error', error);
        return [];
    }
}

fetchData();


