const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes =  express.Router();
const userRoutes = express.Router();
const PORT = 4000;

let Product = require('./db_models/product.model.js');
let User = require('./db_models/user.model.js')

app.use(cors());
app.use(bodyParser.json());

// connect to db
mongoose.connect('mongodb://127.0.0.1:27017/esdb', { useNewUrlParser: true });
const connection = mongoose.connection;

// once the connection is open print message
connection.once('open', () => {
    console.log("[server] MongoDB database connection established successfully");
});

// retrieve all products
productRoutes.route('/').get((req, res) => {
    Product.find((err, products) => {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    })
});

// retrieve single product
productRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Product.findById(id, (err, product) => {
        res.json(product);
    });
});

// add product
productRoutes.route('/add').post((req, res) => {
    let product = new Product(req.body);
    product.save()
            .then(product => {
                res.status(200).json({'product' : '[server] product added to db successfully'});
            })
            .catch(err => res.status(400).send('[server] adding new product failed'));
});

// update product details
productRoutes.route('/update/:id').post((req, res) => {
    Product.findById((req.params.id), (err, product) => {
        if(!product) {
            res.status(404).send('[server] data could not be found');
        } else {
            product.product_title = req.body.product_title;
            product.product_price = req.body.product_price;
            product.product_brand = req.body.product_brand;

            product.save()
                    .then(product => res.json('[server] product updated successfully'))
                    .catch(err => res.status(400).send("[server] update failed"));
        }
    });
});

// delete single product
productRoutes.route('/delete/:id').post((req, res) => {
    Product.findById((req.params.id), (err, product) => {
        if(!product) {
            res.status(404).send('[server] data could not be found');
        } else {
            product.delete()
                    .then(product => res.json('[server] product deleted successfully'))
                    .catch(err => res.status(400).send("[server] delete failed"));
        }
    });
});

// delete all products
productRoutes.route('/delete-all').post((req, res) => {
    Product.deleteMany();
});



// user related functions:

// create new user
userRoutes.route('/new').post((req, res) => {
    let user = new User(req.body);
    console.log(req.query);
    user.save()
            .then(user => {
                res.status(200).json({'user' : '[server] user added to db successfully'});
                console.log('[server] user added to db successfully');
            })
            .catch(err => res.status(400).send('[server] adding new user failed'));
});

// get all users
userRoutes.route('/').get((req, res) => {
    User.find((err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

// get single specific user
userRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        res.json(user);
    });
});

// delete single specific user
userRoutes.route('/delete/:id').post((req, res) => {
    User.findById((req.params.id), (err, user) => {
        if(!user) {
            res.status(404).send('[server] user could not be found');
        } else {
            user.delete()
                    .then(user => res.json('[server] user deleted successfully'))
                    .catch(err => res.status(400).send("[server] delete failed"));
        }
    });
});

// get user's cart
userRoutes.route('/shoppingcart/:id').get((req,res) => {
    User.findById((req.params.id), (err, user) => {
        if(!user) {
            res.status(404).send('[server] user could not be found');
        } else {
            res.json(user.shoppingcart);
        }
    });
});

// delete user's cart
userRoutes.route('/shoppingcart/delete/:id').post((req,res) => {
    User.findById((req.params.id), (err, user) => {
        if(!user) {
            res.status(404).send('[server] user could not be found');
        } else {
            user.shoppingcart = [];
            user.save()
                    .then(user => res.json('[server] shoppingcart deleted successfully'))
                    .catch(err => res.status(400).send("[server] failed to delete shoppingcart"));
        }
    });
});

// shoppingcart related functions:

// add item to specific user's cart
productRoutes.route('/add-item-to-cart/:itemId/cart/:cartId').post((req, res) => {
    User.findById((req.params.cartId), (err, user) => {
        if(!user) {
            res.status(404).send('[server] user could not be found');
        } else {
            user.shoppingcart = [req.params.itemId, ...user.shoppingcart];
            user.save()
                    .then(user => res.json('[server] product added to shoppingcart successfully'))
                    .catch(err => res.status(400).send("[server] adding product to shoppingcart failed"));
        }
    });
});


app.use('/products', productRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => { console.log("[server] server is running on port: " + PORT) });
