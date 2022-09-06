const PetController= require('../controllers/pet.controller');
module.exports=function(app){
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet', PetController.getAllPet);
    app.get('/api/pet/:id', PetController.getPet);
    app.put('/api/pet/update/:id', PetController.updatePet);
    app.delete('/api/pet/delete/:id', PetController.deletePet);
    

}