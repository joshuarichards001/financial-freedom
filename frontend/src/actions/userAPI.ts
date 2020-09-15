import axios, { AxiosResponse } from "axios";
import { tokenConfig } from "./transactionAPI";
import { baseUrl } from "../Constants";

export const registerUser = async (
  email: string,
  username: string,
  password: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, username, password });
    console.log(body);
    console.log(config);
    const login: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/auth/users/",
      body,
      config
    );
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUser = async (
  username: string,
  password: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, password });
    const login: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/auth/token/login/",
      body,
      config
    );
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const loginSocialUser = async (
  accesstoken
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/auth/google/",
      {
        access_token: accesstoken,
      }
    );
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const logoutUser = async (
  token: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/auth/token/logout/",
      tokenConfig(token)
    );
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const userDetails = async (
  token: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/auth/users/me/",
      tokenConfig(token)
    );
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.delete(
      baseUrl + "/auth/users/me/"
    );
    return login;
  } catch (error) {
    throw new Error(error);
  }
};
