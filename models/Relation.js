const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relationSchema = new Schema(
  {
    destination_Id: { type: Schema.Types.ObjectId, ref: "User", required: false },
    offense_Id: { type: Schema.Types.ObjectId, ref: "Offense", required: true },
    creator_Id: { type: Schema.Types.ObjectId, ref: 'User', required: true}
  })

const Relation = mongoose.model("Relation", userSchema);

module.exports = Relation;
