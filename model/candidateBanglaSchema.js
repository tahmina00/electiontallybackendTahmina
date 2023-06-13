const mongoose = require("mongoose");

const candidateBanglaSchema = new mongoose.Schema({
	electionid: {
		type:String,
		required:true
	},
	constitutionid: {
		type:String,
		required:true
	},
	candidateid: {
		type:String,
		required:true
	},
	candidatenamebangla: {
		type:String,
		required:true
	 },
	 partysymbol: {
		type:String,
		required:true 
	 },  
	 totalvote: {
		type:Number,
		required:true
	},
	  date: {
        type:Date,
        default: Date.now	
	}		
	 });	

const CandidateBangla = new mongoose.model("candidatebangla", candidateBanglaSchema);

module.exports = CandidateBangla;	