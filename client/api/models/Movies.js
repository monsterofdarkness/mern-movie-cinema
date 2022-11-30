import mongoose from "mongoose";
const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: Array },
    isSeries: { type: Boolean, default: false },
    // director_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Director',
    //   require: true
    // },
    view: {
      type: Number
    },
  },
  { timestamps: true }
);

export default mongoose.model("Movie", MovieSchema)
