/**
 * Тип данных для создания модели товара.
 * @property { string } id - Уникальный идентификатор товара
 * @property { string } img - Ссылка на изображение товара
 * @property { string } tag - Категория товара
 * @property { string } name - Наименование товара
 * @property { string } descriptions - Описание товара
 * @property { string } price - Стоимость товара
 */
export type ProductType = {
	id: string;
	img: string;
	tag: string;
	name: string;
	descriptions: string;
	price: number;
};