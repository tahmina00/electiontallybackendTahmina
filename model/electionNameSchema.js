const mongoose = require("mongoose");

const electionNameSchema = new mongoose.Schema({
	electionid: {
		type: Number,
        unique: true
	},
	banglaelectionname : {
		type:String,
		required:true
	 },
	englishelectionname : {
		type:String,
		required:true
	 },
	templatetype : {
		type:String,
		required:true
	 },
	 statusfordisplay : {
		type: Number,
        default: 1
	 },
  createdAt: {
    type: Date,
    default: Date.now
  }
	 });
	 

// Define a pre-save hook
// electionNameSchema.pre('save', async function (next) {
  // if (this.isNew) {
    // const lastRecord = await this.constructor.findOne({}, { electionid: 1 }).sort({ electionid: -1 });
	// console.log('lastRecord');console.log(lastRecord);
    // const nextValue = lastRecord ? lastRecord.electionid + 1 : 1;
    // this.electionid = nextValue;
  // }
  // next();
// });

// Define the unique index
//   db.electionnames.findOne({}, { electionid: 1 }).sort({ electionid: -1 })

electionNameSchema.index({ electionid: 1 }, { unique: true });

electionNameSchema.pre('save', async function (next) {
  if (this.isNew) {
    const lastRecord = await this.constructor.findOne({}, { electionid: 1 })
      .sort({ electionid: -1 })
      .lean(); // Use the `lean()` method to get plain JavaScript objects instead of Mongoose documents

    console.log('lastRecord');
    console.log(lastRecord);

    const nextValue = lastRecord ? parseInt(lastRecord.electionid) + 1 : 1;
    this.electionid = nextValue.toString(); // Convert the nextValue back to a string before assigning it to `electionid`
  }

  next();
});

// Compile the schema into a model
//const ElectionName = mongoose.model('ElectionName', electionNameSchema);

	 
// const Electionname = new mongoose.model("ELECTIONNAME", electionNameSchema);
// module.exports = Electionname;

const Electionname = new mongoose.model("Electionname", electionNameSchema);

module.exports = Electionname;


