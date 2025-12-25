import createUserService from "../services/userService.js";

export const createUser = async({userName}) => {
    const createdUser = await createUserService({userName});
    return createdUser;
}

