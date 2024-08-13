import { IProductModel } from '../product/IProductModel';

/**
 * Интерфейс модели карточки с полной информацией о товаре
 * @property { IProductModel[] } items - Массив товаров
 */
export interface ICatalogModel {
	/**
	 * Массив товаров
	 * @type { IProductModel[] } items
	 */
	items: IProductModel[];
}