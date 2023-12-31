const userRoutes = require("express").Router();
const { isAuthenticatedUSer } = require("../../helper/authHandler");

const {
    signUp,
    signIn,
    getUserDetails,
    updateUserDetails,
    deleteAccount,
    getTransaciotnList,
    getTransaciotnDetails
} = require("./userHandler")

userRoutes.post("/signup", signUp);
userRoutes.post("/signin", signIn);
userRoutes.get("/getuserdetails", isAuthenticatedUSer, getUserDetails);
userRoutes.put("/updateuserdetails", isAuthenticatedUSer, updateUserDetails);
userRoutes.delete("/deleteaccount", isAuthenticatedUSer, deleteAccount);
userRoutes.get("/gettransaciotnlist", isAuthenticatedUSer, getTransaciotnList);
userRoutes.get("/gettransaciotndetails/:transactionId", isAuthenticatedUSer, getTransaciotnDetails);

module.exports = userRoutes;