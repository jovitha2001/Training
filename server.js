const http = require('http');
const url = require('url');
const https = require('https');
const PORT = 4000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    if (pathname == '/fetchdata') {
        fetchData(query, res);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function fetchData(query, res) {
    try {
        https.get("https://dummyjson.com/products", response => {
            let data = '';

            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                const filteredProducts = [];
                const productsList = JSON.parse(data).products;

                productsList.forEach(product => {
                    const productPrice = product.price;
                    const productName = product.title.toLowerCase();
                    if (productPrice >= 500 && productPrice <= 20000 && productName.startsWith("iphone")) {
                        filteredProducts.push(product);
                    }
                });

                filteredProducts.sort((a, b) => b.rating - a.rating);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(filteredProducts));
            });
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
}
