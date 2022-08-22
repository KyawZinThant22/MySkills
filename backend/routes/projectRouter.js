const express = require("express");

const {
  getAllProject,
  getProject,
  CreateProject,
  UpdateProject,
  DeleteProject,
} = require("../controllers/projectController");

const router = express.Router();

router.route("/").get(getAllProject).post(CreateProject);

router.route("/:id").patch(UpdateProject).get(getProject).delete(DeleteProject);

module.exports = router;
