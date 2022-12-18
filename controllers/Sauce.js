const Sauce = require('../models/Sauce');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce)
    delete sauceObject._id; //retire l'id généré par la base de données
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save() //cette methode enregistre dans la BDD
        .then(() => res.status(201).json({message: 'sauce enregistrée !'}))
        .catch(error => res.status(400).json({error}));
};

exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ? // s'il y a un req.file c'est qu'il y a ajout d'un fichier image
        {
            ...JSON.parse(req.body.sauce),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : {...req.body}; //ici le cas où il n'y a pas d'ajout d'image
    Sauce.updateOne({_id: req.params.id}, {...sauceObject, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({error}));
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
        .then(sauce => {
            const filename = sauce.imageUrl.split('/images/')[1]; //Extrait le nom du fichier à supprimer
            fs.unlink(`images/${filename}`, () => {   //supression grace à fs.unlink
                Sauce.deleteOne({_id: req.params.id})
                    .then(() => res.status(200).json({message: 'Objet supprimé !'}))
                    .catch(error => res.status(400).json({error}));
            });
        })
        .catch(error => res.status(500).json({error}))

};

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({error}));
};

exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
};

exports.likeSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
        .then((sauce) => {
            //like=1
            if (!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1) {
                console.log("userId n'est pas dans la BDD et la requete front est = 1")
                //mise à jour de la BDD
                Sauce.updateOne(
                    {_id: req.params.id},
                    {
                        $inc: {likes: 1},
                        $push: {usersLiked: req.body.userId}
                    }
                )
                    .then(() => res.status(201).json({message: "sauce like +1"}))
                    .catch((error) => res.status(400).json({error}));

            }
//like = 0, pas de vote
            if (sauce.usersLiked.includes(req.body.userId) && req.body.like === 0) {
                console.log("userId est dans usersLiked et like =0")

                //mise à jour de la BDD
                Sauce.updateOne(
                    {_id: req.params.id},
                    {
                        $inc: {likes: -1},
                        $pull: {usersLiked: req.body.userId}
                    }
                )
                    .then(() => res.status(201).json({message: "sauce like 0"}))
                    .catch((error) => res.status(400).json({error}));
            }
            //like = -1
            if (!sauce.usersDisliked.includes(req.body.userId) && req.body.like === -1) {
                console.log(" userId n'est pas dans UsersDisliked et dislikes +1")
                //mise à jour de la BDD
                Sauce.updateOne(
                    {_id: req.params.id},
                    {
                        $inc: {dislikes: 1},
                        $push: {usersDisliked: req.body.userId}
                    }
                )
                    .then(() => res.status(201).json({message: "sauce dislike 1"}))
                    .catch((error) => res.status(400).json({error}));
            }
            //après un dislike on met un like =0, on enlève le dislike
            if (sauce.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
                console.log(" userId est dans UsersDisliked et like = 0")
                //mise à jour de la BDD
                Sauce.updateOne(
                    {_id: req.params.id},
                    {
                        $inc: {dislikes: -1},
                        $pull: {usersDisliked: req.body.userId}
                    }
                )
                    .then(() => res.status(201).json({message: "sauce dislike = 0"}))
                    .catch((error) => res.status(400).json({error}));
            }
        })
        .catch((error) => res.status(404).json({error}));

};