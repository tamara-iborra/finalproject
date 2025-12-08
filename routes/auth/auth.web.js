import express from "express";

const authWebRouter = express.Router();

authWebRouter.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign up" });
});

authWebRouter.get("/login", (_req, res) => {
  res.render("login", { title: "Log in" });
});

export {
  authWebRouter
};
