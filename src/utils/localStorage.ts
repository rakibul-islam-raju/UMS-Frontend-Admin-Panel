export const setToLocalStorage = ({
	key,
	value,
}: {
	key: string;
	value: string;
}): void => {
	localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string): string | null => {
	return localStorage.getItem(key) ?? null;
};
