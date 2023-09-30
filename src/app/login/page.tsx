"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginImage from "@/assets/images/login.svg";
import Image from "next/image";
import Form from "@/components/forms/Form";
import InputField from "@/components/forms/InputField";
import { SubmitHandler } from "react-hook-form";
import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	IconButton,
	InputAdornment,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useUserLoginMutation } from "@/redux/apis/authApi";
import { storeUserInfo } from "@/services/authService";

type FormValues = {
	id: string;
	password: string;
};

const Login = () => {
	const [userLogin, { isLoading, isError, error, isSuccess }] =
		useUserLoginMutation();

	const [showPass, setShowPass] = useState(false);

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			const res = await userLogin(data).unwrap();

			storeUserInfo(res?.accessToken);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container maxWidth="xl">
			<Box
				height={"100vh"}
				overflow={"hidden"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Grid container spacing={2} alignItems={"center"}>
					<Grid item xs={12} md={6}>
						<Image
							src={LoginImage}
							width={500}
							alt="Login-Image"
							style={{ margin: "0 auto" }}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h4" gutterBottom>
							Login to your account
						</Typography>
						<Divider />
						<Box mt={2}>
							<Form submitHandler={onSubmit}>
								<Stack gap={2}>
									<InputField
										name="userId"
										type="text"
										id="userId"
										label="User ID"
										fullWidth
									/>
									<InputField
										name="password"
										type="password"
										id="password"
										label="Password"
										fullWidth
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														onClick={() => setShowPass((prev) => !prev)}
													>
														{showPass ? (
															<VisibilityIcon />
														) : (
															<VisibilityOffIcon />
														)}
													</IconButton>
												</InputAdornment>
											),
										}}
									/>
									<Button variant="contained" size="large" type="submit">
										Submit
									</Button>
								</Stack>
							</Form>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default Login;
