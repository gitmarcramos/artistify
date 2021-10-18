const express = require("express");
const router = express.Router();

const StylesModel = require("./../model/Styles.model.js");

router.get("/", async (req, res, next) => {
  try {
    const styleDisplay = await StylesModel.find();
    console.log("styles hbs render");
    res.render("dashboard/styles.hbs", { styleDisplay });
  } catch (error) {
    console.log("styles.hbs not render", error);
  }
});

module.exports = router;
