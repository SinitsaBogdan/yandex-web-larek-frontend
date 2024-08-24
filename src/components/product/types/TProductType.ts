/**
 * Тип `TProductType` определяет форму объекта, представляющего продукт
 *
 * @param index: необязательный номер
 * @param id: обязательная строка
 * @param image: необязательная строка
 * @param category: необязательная строка
 * @param title: обязательная строка
 * @param description: обязательная строка
 * @param price: обязательное число
 */
export type TProductType = {
	index?: number;
	id: string;
	image?: string;
	category?: string;
	title: string;
	description: string;
	price: number;
};
