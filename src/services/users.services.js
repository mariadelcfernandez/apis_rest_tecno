import { getAllUsers } from "../models/users.models.js";
//import { getAllusers } from "../models/users.controllers.js";


const getAllUser = async () => {
  return await getAllUsers();
};

export default { getAllUser };
