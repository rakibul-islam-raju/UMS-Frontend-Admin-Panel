import { ACCESS_TOKEN } from "@/constants/localStorageKeys";
import { IMeta } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import axios, { AxiosResponse } from "axios";

type ResponseSuccessType = AxiosResponse & {
	data: any;
	meta: IMeta;
};

type ResponseErrorType = AxiosResponse & {
	statusCode: number;
	message: string;
	errorMessage: {
		path: string | number;
		message: string;
	};
};

const defaultAxiosInstance = axios.create();
defaultAxiosInstance.defaults.headers.post["Content-Type"] = "application/json";
defaultAxiosInstance.defaults.headers["Accept"] = "application/json";
defaultAxiosInstance.defaults.timeout = 60000;

// Add a request interceptor
defaultAxiosInstance.interceptors.request.use(
	function (config) {
		const accessToken = getFromLocalStorage(ACCESS_TOKEN);
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
defaultAxiosInstance.interceptors.response.use(
	function (response) {
		const responseObject: ResponseSuccessType = {
			...response,
			data: response?.data?.data,
			meta: response?.data?.meta,
		};
		return responseObject;
	},
	function (error) {
		const responseObject: ResponseErrorType = {
			...error,
			statusCode: error?.response?.data?.statusCode || 500,
			message: error?.response?.data?.message || "Something went wrong!",
			errorMessage: error?.response?.data?.errorMessage,
		};
		return responseObject;
		// return Promise.reject(error);
	}
);

export { defaultAxiosInstance };
