const Heroe = require('../models/heroe');

const heroeCtrl = {};

heroeCtrl.getHeroes = async (req, res) => {
    const heroes = await Heroe.find();
    res.json(heroes);
}

heroeCtrl.getHeroe = async (req, res) => {
    const heroe = await Heroe.findById(req.params.id);
    res.json(heroe);
}

heroeCtrl.createHeroe = async (req, res) => {
    const heroe = new Heroe({
        name: req.body.name,
        picture: req.body.picture,
        publisher: req.body.publisher,
        info: req.body.info
    });
    await heroe.save();
    res.json({Heroe: 'Creado'});
}

heroeCtrl.edithHeroe = async (req, res) =>{
    const { id } = req.params;
    const heroe = {
        name: req.body.name,
        picture: req.body.picture,
        publisher: req.body.publisher,
        info: req.body.info
    };
    await Heroe.findByIdAndUpdate(id, {$set: heroe}, {new: true});
    res.json({Heroe: 'Edith'});
}

heroeCtrl.deleteHeroe = async (req, res) => {
    await Heroe.findOneAndRemove(req.params.id);
    res.json({Heroe: 'Delete'});
}

module.exports = heroeCtrl;