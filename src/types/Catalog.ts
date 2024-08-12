import { IProductModel } from './Product';

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

	/**
	 * Запрос списка товаров в корзине.
	 * @returns { IProductModel[] }
	 */
	getItems(): IProductModel[];

	/**
	 * Запрос товара по id.
	 * @param { string } id
	 * @returns { IProductModel }
	 */
	getItem(id: string): IProductModel;
}

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

/**
 * Контроллер модели товаров связывающий модель с api запросами
 * @property { ICatalogModel } model
 */
export interface CatalogController extends CatalogAPI {
	/**
	 * Модель каталога
	 * @type { ICatalogModel } model
	 */
	model: ICatalogModel;
}

/**
 * Интерфейс представления каталога на странице
 * @property { ICatalogModel } model
 */
export interface ICatalogUI<ICatalogModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { ICatalogModel }
	 */
	model: ICatalogModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}
