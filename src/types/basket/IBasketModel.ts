import { IProductModel } from "../product/IProductModel";

/**
 * Интерфейс модели корзины товаров
 * @property { IProductModel[] } items - Массив товаров в корзине
 * @property { number } total - Итоговая сумма товаров в корзине
 */
export interface IBasketModel {
	/**
	 * Массив товаров в корзине
	 * @type { IProductModel[] } items
	 */
	items: IProductModel[];

	/**
	 * Итоговая сумма товаров в корзине
	 * @type { number } total
	 */
	total: number;

	/**
	 * Добавление нового товара в корзину.
	 * @param {string} id
	 * @returns {void}
	 */
	add(id: string): void;

	/**
	 * Удаление товара из корзины.
	 * @param {string} id
	 * @returns {void}
	 */
	delete(id: string): void;
}
