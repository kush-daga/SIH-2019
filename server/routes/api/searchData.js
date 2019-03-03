const Bod = require("../../models/Bod");
const Issue = require("../../models/Issues");
var found;
module.exports = app => {
  app.post("/api/data/getBod", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    // finding bod

    Bod.find(
      {
        stp: stp
      },
      (err, data) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: server error"
          });
        }

        if (data.length == 0) {
          return res.send({
            success: false,
            message: "Error: Data does not exist"
          });
        }

        return res.send(data);
      }
    );

    // const newBod = new Bod();
    // newBod.value = value;
    // newBod.stp = stp;
    // newBod.save((err, user) => {
    //   if (err) {
    //     return res.send({
    //       success: false,
    //       message: "Error: server error"
    //     });
    //   }
    //   return res.send({
    //     success: true,
    //     message: "Data entered succesfully"
    //   });
    // });
  });
  app.post("/api/data/getBodChart", (req, res, next) => {
    Bod.find({}, (err, data) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }

      if (data.length == 0) {
        return res.send({
          success: false,
          message: "Error: Data does not exist"
        });
      }
      return res.send(data);
      // found = data;
    });
    // console.log(found);
    // // found.toString();
    // return res.send(found);
  });
  app.post("/api/data/getIssue", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    // finding issue

    Issue.find({}, (err, data) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }

      if (data.length == 0) {
        return res.send({
          success: false,
          message: "Error: Data does not exist"
        });
      }

      return res.send(data);
    });

    // const newBod = new Bod();
    // newBod.value = value;
    // newBod.stp = stp;
    // newBod.save((err, user) => {
    //   if (err) {
    //     return res.send({
    //       success: false,
    //       message: "Error: server error"
    //     });
    //   }
    //   return res.send({
    //     success: true,
    //     message: "Data entered succesfully"
    //   });
    // });
  });
};
