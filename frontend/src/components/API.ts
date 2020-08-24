import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:8000";

export const getTransactions = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const transactions: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/transactions/");
    return transactions;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTransaction = async (income: boolean, amount: number, category: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const transaction: Omit<Transaction, "id"> = {
      income: income, amount: amount, category: category,
    };
    const saveTransaction: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/transactions/",transaction);
    return saveTransaction;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTransaction = async (id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deleteTransaction: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/transactions/${id}/`)
    return deleteTransaction;
  } catch (error) {
    throw new Error(error);
  }
};
