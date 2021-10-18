const express = require("express");
const router = express.Router();

const StylesModel = require("./../model/Styles.model.js");

router.get("/", async (req, res, next) => {
  try {
    const styleDisplay = await StylesModel.find();
    console.log("styles hbs render");
    res.render("dashboard/styles.hbs", { styleDisplay });
  } catch (error) {
    next(error);
  }
});

// DELETE
router.get("/delete/:id", async (req, res, next) => {
  try {
    await StylesModel.findByIdAndRemove(req.params.id);
    console.log(req.params.id);

    res.redirect("/dashboard/styles");
  } catch (error) {
    next(error);
  }
});

//RENDER THE PAGE FOR THE FORM CREATE
router.get("/create", (req, res, next) => {
  try {
      res.render("dashboard/styleCreate.hbs")
  } catch (error) {
    next(error);
  }
});

// POST AN ITEM CREATED IN THE "DASHBOARD/STYLES"
router.post("/create", async (req, res, next) => {
  try {
      await StylesModel.create(req.body)
      console.log(req.body);

      res.redirect("/dashboard/styles")
  } catch (error) {
    next(error);
  }
});


router.get("/update/:id", (req, res, next) => {
  StylesModel.findById(req.params.id)
    .then((music) => res.render("dashboard/styleUpdate.hbs", {music}))
    .catch(next);
});


router.post("update/:id", (req, res, next) =>{
  StylesModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/dashboard/styles"))
    .catch(next);   
})



module.exports = router;
