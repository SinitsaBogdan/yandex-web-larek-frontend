/**
 * Модель данных товара в проекте.
 * Данные модели используется для отрисовки в главном каталоге приложения,
 * модальном окне предпросмотра и пользовательской корзине.
 *
 * @property { string } id - Уникальный идентификатор товара
 * @property { string } img - Ссылка на изображение товара
 * @property { string } tag - Категория товара
 * @property { string } name - Наименование товара
 * @property { string } descriptions - Описание товара
 * @property { number } price - Стоимость товара
 */
export interface IProductModel {
	/**
	 * Уникальный идентификатор
	 * @type { string }
	 */
	id: string;

	/**
	 * Ссылка на изображение
	 * @type { string }
	 */
	img: string;

	/**
	 * Категория товара
	 * @type { string }
	 */
	tag: string;

	/**
	 * Наименование товара
	 * @type { string }
	 */
	name: string;

	/**
	 * Описание товара
	 * @type { string }
	 */
	descriptions: string;

	/**
	 * Стоимость товара
	 * @type { number }
	 */
	price: number;
}
