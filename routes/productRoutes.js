import express from 'express';
import formidable from 'express-formidable';
import { 
    braintreePaymentController,
    braintreeTokenController,
    createProductController, 
    deleteProductController,  
    getProductController, 
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFilterController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController,
    updateProductController,
} from '../controllers/productController.js';
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';

const router = express.Router()

router.post(
    '/create-product',
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
)

router.put(
    '/update-product/:pid',
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
)


router.get(
    '/get-product',
    getProductController
)

router.get(
    '/get-product/:slug',
    getSingleProductController
)

router.get(
    '/product-photo/:pid',
    productPhotoController
)

router.delete(
    '/delete-product/:pid',
    deleteProductController
)

router.post(
    '/product-filters',
    productFilterController
)

router.get(
    '/product-count',
    productCountController
)

router.get(
    "/product-list/:page", 
    productListController
);

router.get(
    "/search/:keyword", 
    searchProductController
);

router.get(
    "/related-product/:pid/:cid", 
    relatedProductController
);

router.get(
    "/product-category/:slug", 
    productCategoryController
);

router.get(
    '/braintree/token',
    braintreeTokenController
)

router.post(
    '/braintree/payment',
    requireSignIn,
    braintreePaymentController
)

export default router
