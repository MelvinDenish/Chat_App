import createUserService from "../services/userService";

const createUser = async({userName}) => {
    const createdUser = await createUserService({userName});
    return createdUser;
}
export default createUser;