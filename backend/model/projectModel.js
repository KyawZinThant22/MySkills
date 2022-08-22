const mongoose = require("mongoose");
const sligify = require("slugify");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A Project must have a name"],
      trim: true,
      unique: true,
    },
    slug: String,
    summary: {
      type: String,
      required: [true, "A project must have summary"],
      trim: true,
      maxlength: [
        150,
        "A tour name must have less or equal then 150 characters",
      ],
      minlength: [50, "A tour name must have more or equal then 50 characters"],
    },
    Preview: {
      type: "String",
      required: [true, "A project must have preview Link"],
    },
  },
  { timestamps: true }
);

//Document Middleware
ProjectSchema.pre("save", function (next) {
  this.slug = sligify(this.name, { lower: true });
  next();
});

const Project = mongoose.model('Project', ProjectSchema);



module.exports = Project;
