const Bod = require("../../models/Bod");

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

        data.map(d => {
          return res.send({
            success: true,
            stp: d.stp,
            value: d.value
          });
        });
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
};
