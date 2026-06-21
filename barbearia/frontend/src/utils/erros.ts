import axios from "axios";

export const getMensagemErro = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data || "Erro inesperado!";
  }
  return "Erro inesperado!";
};