import { ACCESS_TOKEN } from "@/constants/localStorageKeys";
import { decodeToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = (accessToken: string): void => {
	setToLocalStorage({ key: "accessToken", value: accessToken });
};

export const getUserInfo = (): unknown => {
	const accesstoken = getFromLocalStorage(ACCESS_TOKEN);
	if (accesstoken) {
		const result = decodeToken(accesstoken);
		return result;
	}
	return false;
};

export const isLoggedIn = (): boolean => {
	const accessToken = getFromLocalStorage(ACCESS_TOKEN);
	return !!accessToken;
};
