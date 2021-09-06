const User = require('../models/User');
 
exports.showAll = async (req, res) => {
    try {
        const users = await User.findAll({
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['id', 'DESC'],
            ]
        });

        console.log('Lista de Usuarios ✔️');

        res.json(users);
    } catch (error) {
        throw new Error('noooo 😞');
    }
}

exports.create = async(req, res) => {
    // http://localhost:4000/api/v1/users
    try {
        const { name, email} = req.body;
        const user = await User.create({
            name, email
        });
        console.log('Usuario registrado ✔️');

        res.json(user);
    } catch (error) {
        throw new Error('nooo 😞');
    }
}

exports.search = async(req, res) => {
    try {
        const  { id } = req.params;
        const user = await User.findOne({
            where: {
                id
            }
        });
        if(user){
            console.log(`Usuario encontrado ▶️  ${user.name}`);
        }
        res.json(user);

    } catch (error) {

    }
}

exports.update = async(req, res) => {
    try {
        const { id } = req.params;
        const {name} = req.body;


        const user = await User.findOne({where: {id}});
        if (!user) {
            throw Error(`User not updated. id: ${id}`);
        }
        user.name = name;
        await user.save();

		console.log('Usuario Actualizado ✔️');
		res.json(user);

    } catch (error) {
        throw new Error('nooo 😞');
    }
}

exports.delete = async(req, res) => {
    try{
        const {id} = req.params;

        const user = await User.destroy({
            where:{
                id
            }
        });

        console.log(`Usuario eliminado con id ▶️  ${id}`);
        res.json(user);
    } catch (error) {
    }
}