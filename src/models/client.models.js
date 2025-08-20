import { Schema, model, models } from "mongoose";

const clientSchema = new Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    contactNumber: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

clientSchema.index({ userId: 1, email: 1 }, { unique: true });
clientSchema.index({ userId: 1, clientName: 1 }, { unique: true });

const Client = models.Client || model("Client", clientSchema);
export default Client;
