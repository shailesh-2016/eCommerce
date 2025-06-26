const router = require("express").Router();
const productController = require("../../controller/admin/product.controller");
const { upload } = require("../../helpers/cloudinary");

router.post(
  "/upload-image",
  upload.single("my_file"),
  productController.handleImageUpload
);
router.post("/add", productController.addProduct);
router.put("/edit/:id", productController.editProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.get("/get", productController.fetchAllProducts);

module.exports = router;
