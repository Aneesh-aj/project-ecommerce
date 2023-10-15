const express = require("express")

const router= express.Router()
const uploadImages = require("../config/multer")
const { render } = require("ejs")
const controller = require("../controllers/adminController")
const bannerupload = require("../config/banner")


router.get("/", controller.adminpageView )
router.get("/logout",controller.adminLogout)

router.get("/product-managment", controller.productManagment)
router.get("/user-managment",controller.userManagment)

router.get("/product-managment/add-product",controller.addProduct)
router.get("/product-managment/edit/:id",controller.editProduct)
router.post("/product-managment/edit/submit",controller.editedProduct)
router.post("/product-managment/list/:id",controller.productListing)
router.post("/product-managment/adding",controller.productAdding)
router.post("/category",controller.watchtypeAdding)
router.get("/category",controller.categoryGet)
router.post("/category/edit",controller.watchtypeEdit)
router.get("/category/list",controller.watchtypeList)
router.post("/category/brands",controller.brandsAdding)
router.get("/category/brand-list",controller.brandList)
router.post("/user-managment/block",controller.userBlock)
router.get("/orders",controller.orderpageview)
router.get("/orders/orderdetails",controller.adminorderDetails)
router.post("/update-order-status",controller.updateStatus)
router.post("/cancel-order",controller.cancelOrder)
router.get("/coupon",controller.coupon)
router.post("/coupon",controller.addingcoupon)
router.get("/banners",controller.bannerpageRendering)
router.post("/banneradding",bannerupload.single('image'),controller.banneradding)
router.post("/removeBanner",controller.removeBannerImage)
router.post("/report",controller.chartreport)

module.exports = router