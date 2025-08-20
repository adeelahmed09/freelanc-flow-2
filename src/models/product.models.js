import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  note: [
    {
      type: String,
      trim: true,
    },
  ],
  invoice: {
    type: Number,
    required: true,
  },
});

const Project = models.Project || model("Project", projectSchema);
export default Project;
