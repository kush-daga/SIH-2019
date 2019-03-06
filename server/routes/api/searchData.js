const Bod = require("../../models/Bod");
const Do = require("../../models/Do");
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
const Issues = require("../../models/Issues");
const WaterQuantity = require("../../models/WaterQuantity");

module.exports = app => {
  app.post("/api/data/getBod", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

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
  });
  app.post("/api/data/getDo", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Do.find(
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
  });
  app.post("/api/data/getPh", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Ph.find(
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
  });
  app.post("/api/data/getIssue", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Issues.find({}, (err, data) => {
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
  });
  app.post("/api/data/getTemp", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Temp.find(
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
  });
  app.post("/api/data/getColor", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Color.find(
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
  });
  app.post("/api/data/getTss", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Tss.find(
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
  });
  app.post("/api/data/getTds", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Tds.find(
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
  });
  app.post("/api/data/getFbym", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Fbym.find(
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
  });
  app.post("/api/data/getNitrogen", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Nitrogen.find(
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
  });
  app.post("/api/data/getInletPh", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    InletPh.find(
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
  });
  app.post("/api/data/getInletTemp", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    InletTemp.find(
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
  });
  app.post("/api/data/getInletColor", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    InletColor.find(
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
  });
  app.post("/api/data/getWaterCap", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    WaterCap.find(
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
  });
  app.post("/api/data/getWaterQuantity", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    WaterQuantity.find(
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
  });
  app.post("/api/data/getIssueStp", (req, res, next) => {
    const { body } = req;
    const { stp } = body;

    Issues.find(
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
  });
};
