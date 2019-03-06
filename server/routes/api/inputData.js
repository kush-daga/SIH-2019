const Bod = require("../../models/Bod");
const Do = require("../../models/Do")
const Ph = require("../../models/Ph");
const Temp = require("../../models/Temp");
const Color = require("../../models/Color");
const Tss = require("../../models/Tss");
const Tds = require("../../models/Tds");
const Fbym = require("../../models/Fbym");
const Nitrogen = require("../../models/Nitrogen");
const InletTemp = require("../../models/InletTemp");
const InletPh = require("../../models/InletPh");
const InletColor = require("../../models/InletColor");
const WaterCap = require("../../models/WaterCap");
const WaterQuantity = require("../../models/WaterQuantity");

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
  app.post("/api/data/enterTss", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newTss = new Tss();
    newTss.value = value;
    newTss.stp = stp;
    newTss.save((err, user) => {
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
  app.post("/api/data/enterTds", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newTds = new Tds();
    newTds.value = value;
    newTds.stp = stp;
    newTds.save((err, user) => {
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
  app.post("/api/data/enterFbym", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newFbym = new Fbym();
    newFbym.value = value;
    newFbym.stp = stp;
    newFbym.save((err, user) => {
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
  app.post("/api/data/enterNitrogen", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newNitrogen = new Nitrogen();
    newNitrogen.value = value;
    newNitrogen.stp = stp;
    newNitrogen.save((err, user) => {
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
  app.post("/api/data/enterInletTemp", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newInletTemp = new InletTemp();
    newInletTemp.value = value;
    newInletTemp.stp = stp;
    newInletTemp.save((err, user) => {
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
  app.post("/api/data/enterInletColor", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newInletColor = new InletColor();
    newInletColor.value = value;
    newInletColor.stp = stp;
    newInletColor.save((err, user) => {
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
  app.post("/api/data/enterInletPh", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newInletPh = new InletPh();
    newInletPh.value = value;
    newInletPh.stp = stp;
    newInletPh.save((err, user) => {
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
  app.post("/api/data/enterWaterCap", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newWaterCap = new WaterCap();
    newWaterCap.value = value;
    newWaterCap.stp = stp;
    newWaterCap.save((err, user) => {
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
  app.post("/api/data/enterWaterQuantity", (req, res, next) => {
    const { body } = req;
    const { stp } = body;
    const { value } = body;
    const newWaterQuantity = new WaterQuantity();
    newWaterQuantity.value = value;
    newWaterQuantity.stp = stp;
    newWaterQuantity.save((err, user) => {
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
