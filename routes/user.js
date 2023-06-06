const express = require('express');
const router = express.Router();
const userController = require('../controller/user')

// MVC (Model View Controller)
router
  .post('/',userController.createProduct)
  .get('/',userController.getAllProduct)
  .get('/:id',userController.getProduct)
// put mein last data ko overwrite kr dia jata hai 
  .put('/:id',userController.replaceProduct)
  .patch('/:id',userController.updateProduct)
  .delete('/:id',userController.deleteProduct)


exports.router = router;