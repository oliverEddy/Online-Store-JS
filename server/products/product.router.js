const express = require("express");
const Joi = require("joi");
const router = express.Router();
const db = require("../db");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");
const { getPagedProducts, getProducts } = require("./product.repository");
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
      const products = await getPagedProducts(limit, page);

      const responseResults = {
        products,
      };

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
