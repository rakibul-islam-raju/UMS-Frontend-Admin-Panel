"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FormConfig = {
	defaultValues?: Record<string, any>;
};

type FormProps = {
	children: React.ReactNode;
	submitHandler: SubmitHandler<any>;
} & FormConfig;

const Form: React.FC<FormProps> = ({
	children,
	submitHandler,
	defaultValues,
}) => {
	const formConfig: FormConfig = {};

	if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

	const methods = useForm<FormProps>(formConfig);
	const { handleSubmit, reset } = methods;

	const onSubmit = (data: any) => {
		submitHandler(data);
		reset();
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
};

export default Form;
