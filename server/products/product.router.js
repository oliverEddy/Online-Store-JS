const express = require("express");
const Joi = require("joi");
const router = express.Router();
const db = require("../db");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");
const { getTotalProducts, getProducts } = require("./product.repository");
const productRepository = require("./product.repository");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    try {
      const { limit, page } = req.query;

      const safeLimit = Boolean(limit) ? parseInt(limit) : 10;
      const safePage = Boolean(parseInt(page)) ? parseInt(page) : 1;

      const totalProducts = await getProducts();
      const products = await getTotalProducts(safeLimit, safePage);

      const responseResults = {
        products,
        currentPage: safePage,
        itemsPerPage: safeLimit,
        totalItems: totalProducts.length,
        totalPages: Math.ceil(totalProducts.length / safeLimit),
      };

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
