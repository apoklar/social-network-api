const { Thought, User } = require("../models") 

module.exports = {
    getAllThoughts: (req, res) => {
        Thought.find({})
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'No thought found!' });
                    return;
                  }
                  res.json(data); 
            }) 
            .catch(err => res.json(err)); 
    },

    getOneThought: (req, res) => {
        Thought.find({
            _id: req.params.id
        })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'No thought found!' });
                    return;
                }
                res.json(data); 
            }) 
            .catch(err => res.json(err)); 
    },

    postOneThought: (req, res) => {
        Thought.create(req.body)
            .then(({_id}) => {
                return User.findOneAndUpdate (
                    {_id: req.body.userId},
                    {$push: {thoughts: _id}},
                    {new: true}
                )
            })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'No thought found!' });
                    return;
                }
                res.json(data); 
            }) 
            .catch(err => res.json(err));
    },
}