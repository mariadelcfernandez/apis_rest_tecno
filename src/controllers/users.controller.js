import usersService from '../services/users.services.js';

const getAllUser = async (req, res) => {
    try {
        const users = await usersService.getAllUser();
        if (users.length === 0  ) {
            return res.status(404).send('No users found');
        }
        if (!users) {                                               
            throw new Error('No users found');
        }   
    } catch (error) {
        res.status(500).json({ error: error.message });
    };

}

const getUserById = async (req, res) =>     {
    res.json(users[req.params.id]);
}

const createUser = async(req, res) => {
    res.json(req.body);
}
const updateUser = async(req, res) =>{
    const { id } = req.params;
    try {
        const user = await usersService.getUserById(id);
        if (!user) {
            return res
            .status(404).send('El id del usuario no existe o User no encontrado');
        }
        res.status(200).send('Usuarioa actualizado con exito'+user);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Error interno del Servidor' });
    };
  
}
 const deleteUser = async (req, res) => {
     res.json(req.params.id);   
 }  

export default{
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
