const express = require('express');
const router = express.Router();
const productController = require('../controller/product')

// MVC (Model View Controller)
router
  .post('/',productController.createProduct)
  .get('/',productController.getAllProduct)
  .get('/:id',productController.getProduct)
// put mein last data ko overwrite kr dia jata hai 
  .put('/:id',productController.replaceProduct)
  .patch('/:id',productController.updateProduct)
  .delete('/:id',productController.deleteProduct)


exports.router = router;