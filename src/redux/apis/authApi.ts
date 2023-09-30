import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		userLogin: builder.mutation({
			query: (loginData) => ({
				url: `${AUTH_URL}/login/`,
				method: "POST",
				data: loginData,
			}),
			invalidatesTags: ["user"],
		}),
	}),
});

export const { useUserLoginMutation } = authApi;
