"use client";

import { FormControl, FormLabel, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import TextInput from "./TextInput";

type InputFieldProps = TextFieldProps & {
	name: string;
	label?: string;
	value?: string | number | string[];
};

const InputField: React.FC<InputFieldProps> = ({
	name,
	label,
	value,
	type = "text",
}) => {
	const { control } = useFormContext();

	return (
		<FormControl>
			{label && <FormLabel>{label}</FormLabel>}

			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<TextInput
						{...field}
						type={type}
						value={value ? value : field.value}
					/>
				)}
			/>
		</FormControl>
	);
};

export default InputField;
