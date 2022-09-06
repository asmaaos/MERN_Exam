const mongoose= require('mongoose');
const PetSchema = new mongoose.Schema({
    
    name: {
		type: String,
        unique : true,
		required: [true, "name is required"],
		minlength:[3,"name min length is 3"]
	},
    type: {
		type: String,
		required: [true, "type is required"],
        minlength:[3,"type min length is 3"]
	},
    desc: {
		type: String,
		required: [true, "description is required"],
        minlength:[3,"description min length is 3"]
	},
    skill1: {
        type: String,
    },

    skill2: {
        type: String,
    },

    skill3: {
        type: String,
    },

}, {timestamps: true});
module.exports.Pet = mongoose.model('Pet', PetSchema);