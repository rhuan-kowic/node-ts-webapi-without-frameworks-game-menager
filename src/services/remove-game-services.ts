import { deleteGameByNameRepository } from "../repositories/games-repository";

export const deleteGameServices = async (name: string) => {
  try {
    const isDelete = await deleteGameByNameRepository(name);
    return isDelete;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
