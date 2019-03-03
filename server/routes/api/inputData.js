const Bod = require("../../models/Bod");
const Do = require("../../models/Do");
const Ph = require("../../models/Ph");
const Temp = require("../../models/Temp");
const Color = require("../../models/Color");

module.exports = app => {
  app.post("/api/data/enterBod", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newBod = new Bod();
    newBod.value = value;
    newBod.stp = stp;
    newBod.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      return res.send({
        success: true,
        message: "Data entered succesfully"
      });
    });
  });
  app.post("/api/data/enterDo", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newDo = new Do();
    newDo.value = value;
    newDo.stp = stp;
    newDo.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      return res.send({
        success: true,
        message: "Data entered succesfully"
      });
    });
  });
  app.post("/api/data/enterPh", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newPh = new Ph();
    newPh.value = value;
    newPh.stp = stp;
    newPh.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      return res.send({
        success: true,
        message: "Data entered succesfully"
      });
    });
  });
  app.post("/api/data/enterTemp", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newTemp = new Temp();
    newTemp.value = value;
    newTemp.stp = stp;
    newTemp.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      return res.send({
        success: true,
        message: "Data entered succesfully"
      });
    });
  });
  app.post("/api/data/enterColor", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newColor = new Color();
    newColor.value = value;
    newColor.stp = stp;
    newColor.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      return res.send({
        success: true,
        message: "Data entered succesfully"
      });
    });
  });
};
