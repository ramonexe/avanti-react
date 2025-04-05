import axios from "axios";
import { GithubUser } from "../types/github";

const API_URL = "https://api.github.com/users";

export const getUserProfile = async (username: string): Promise<GithubUser> => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do GitHub", error);
    throw error;
  }
};
