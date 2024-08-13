import { IProductModel } from '../product/IProductModel';

/**
 * Интерфейс API методов Catalog
 */
export interface CatalogAPI {
	/**
	 * GET - Запрос всего списка товаров.
	 * @returns { IProductModel[] }
	 */
	getProducts(): IProductModel[];

	/**
	 * GET - Запрос конкретного товара по id.
	 * @param {string} id
	 * @returns { IProductModel }
	 */
	getProduct(id: string): IProductModel;
}