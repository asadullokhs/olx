const Sub = require("../model/subModel");

const subCtrl = {
  add: async (req, res) => {
    const { name } = req.body;
    try {
      if (!name) {
        return res.status(403).json({ message: "Please fill all lines" });
      }
      const sub = new Sub(req.body);
      await sub.save();
      res.status(201).json({ message: "new sub", sub });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
  get: async (req, res) => {
    try {
      const subs = await Sub.find();
      res.status(200).json({ message: "All sub categorys", getAll: subs });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(403).json({ message: "insufficient information" });
    }

    try {
      const deleteSub = await Sub.findByIdAndDelete(id);
      if (!deleteSub) {
        return res.status(400).send({ message: "Sub not found" });
      }

      res.status(200).send({ message: "Sub deleted", deleteSub });
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  },
};

module.exports = subCtrl;
