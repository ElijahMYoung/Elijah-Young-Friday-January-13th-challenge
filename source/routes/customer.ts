import express from "express";
import controller from "../controllers/customer";

const router = express.Router();

router.post("/create/customer", controller.createCustomer);
router.get("/get/customers", controller.getAllCustomer);

export default router;
