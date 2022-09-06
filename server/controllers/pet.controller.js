const {Pet}= require('../model/pet.model');
module.exports.createPet = (request, response) => {
    const { name,type ,desc ,skill1,skill2, skill3} = request.body;
    Pet.create({
        name,
        type,
        desc,
        skill1,
        skill2,
        skill3,
    })
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPet= (request, response) => {
    Pet.find({}).sort({"name":1})
        .then(Pet => response.json(Pet))
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(Pet => response.json(Pet))
        .catch(err => response.json(err))
}
module.exports.updatePet  = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true})
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err));
}
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      
  };
  