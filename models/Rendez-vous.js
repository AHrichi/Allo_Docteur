const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rendez_vousShema = new Schema({
  client_name: { type: String, required: true },
  doc_name: { type: String, required: true },
  client_id: { type: String, required: true },
  doc_id: { type: String, required: true },
  date: { type: String, required: true },
  approved:{ type:Boolean ,default:false}
});

module.exports = rdv = mongoose.model("rdv", rendez_vousShema);
