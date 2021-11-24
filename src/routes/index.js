const {Router} = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const routes = Router()


routes.get('/', (req, res) =>{
    res.send('Hello')
})

//routes

//post create user
routes.post('/users', UserController.createUser)
//get listar users
routes.get('/users', UserController.getUsers)
//get listar user by id
routes.get('/users/:user_id', UserController.getUserById)

//post login
routes.post('/sessions', SessionController.createSession)

//post create product
routes.post('/products/:user_id', ProductController.createProduct)
//get list products
routes.get('/:user_id/products', ProductController.getUserProduct)
//patch update product
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
//delete products
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

//get all products
routes.get('/products', ProductController.getProducts)
//get product by id
routes.get('/products/:product_id', ProductController.getProductById)


//cart

//post para fazer uma compra
routes.post('/cart/:user_id', CartController.createCart)
//get listar compras do usuário
routes.get('/cart/:user_id', CartController.getUserCarts)

//listar carrinho por id
routes.get('/cart/:user_id/:cart_id', CartController.getCart)

module.exports = routes;