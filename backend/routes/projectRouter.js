const express = require("express");

const router = express.Router();

const {
  getAllProject,
  getProject,
  CreateProject,
  UpdateProject,
  DeleteProject,
} = require("../controllers/projectController");

router.route("/").get(getAllProject).post(CreateProject);

router.route("/:id").patch(UpdateProject).get(getProject).delete(DeleteProject);

module.exports = router;
