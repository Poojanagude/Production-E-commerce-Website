import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  OrderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router object
const router = express.Router();

//routing
//REGISTER ||POST
router.post("/register", registerController);

//POST || LOGIN
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//TEST ROUTE
router.get("/test", requireSignIn, isAdmin, testController);

//Procted user Route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Procted  Admin Route
router.get("/admin-auth", requireSignIn,isAdmin ,(req, res) => {
    res.status(200).send({ ok: true });
  });

  //update Profile
  router.put("/profile",requireSignIn,updateProfileController);

  //orders
  router.get('/orders',requireSignIn,getOrdersController);
  //All orders
  router.get('/all-orders',requireSignIn, isAdmin,getAllOrdersController);
  //orders status
  router.put('/order-status/:orderId',requireSignIn, isAdmin,OrderStatusController);


export default router;
