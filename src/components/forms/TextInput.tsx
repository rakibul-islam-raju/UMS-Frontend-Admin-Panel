import { TextField, TextFieldProps } from "@mui/material";

type TextInput = TextFieldProps & {
	value: any;
};

const TextInput: React.FC<TextInput> = ({ ...props }) => {
	return <TextField {...props} />;
};

export default TextInput;
