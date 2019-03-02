const Bod = require("../../models/Bod");

module.exports = app => {
  app.post("/api/data/enterBod", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

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
};
