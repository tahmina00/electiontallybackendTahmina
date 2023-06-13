const mongoose = require("mongoose");

const constitutionBanglaSchema = new mongoose.Schema({
	electionid: {
		type:String,
		required:true
	},
	constitutionid: {
		type:String,
		required:true
	},
	banglaconstitutionname : {
		type:String,
		required:true
	 },
	 totalcenter : {
		type:String,
		required:true
	 },
	 obtainedcenter : {
		type:String,
		required:true 
	 },
	 sortingorder :{
	    type:String,
		required:true 
	 },
	 date : {
        type:Date,
        default: Date.now	
	   }		
	 });	

const ConstitutionBangla = new mongoose.model("constitutionbangla", constitutionBanglaSchema);

module.exports = ConstitutionBangla;	 