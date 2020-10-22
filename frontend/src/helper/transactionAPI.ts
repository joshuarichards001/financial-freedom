import axios, { AxiosResponse } from "axios";
import { baseUrl } from "./Constants"

export const getTransactions = async (token: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const transactions: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/transactions/", tokenConfig(token));
    return transactions;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTransaction = async (token: string, income: boolean, date: string, amount: number, category: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const transaction: Omit<Transaction, "id"|"owner_id"> = {
      income: income, date: date, amount: amount, category: category,
    };
    const saveTransaction: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/transactions/",transaction, tokenConfig(token));
    return saveTransaction;
  } catch (error) {
    console.log("error in the add")
    throw new Error(error);
  }
};

export const deleteTransaction = async (token: string, id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deleteTransaction: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/transactions/${id}/`, tokenConfig(token))
    return deleteTransaction;
  } catch (error) {
    throw new Error(error);
  }
};

export const tokenConfig = (token: string) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  config.headers['Authorization'] = `Token ${token}`;
  return config;
};