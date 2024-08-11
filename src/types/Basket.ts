import { IProductModel } from './Product';

export type BasketType = {
	items: IProductModel[];
	total?: number;
};

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
	 * Запрос списка товаров в корзине.
	 * @returns {IProductModel[]}
	 */
	getItems(): IProductModel[];

	/**
	 * Запись списка товаров в корзину.
	 * @param {IProductModel[]} value
	 * @returns {void}
	 */
	setItems(value: IProductModel[]): void;

	/**
	 * Запрос общей суммы позиций товаров в корзине.
	 * @returns {number}
	 */
	getTotal(): number;

	/**
	 * Запись общей суммы позиций товаров в корзине.
	 * @param {number} value
	 * @returns {void}
	 */
	setTotal(value: number): void;

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

/**
 * Интерфейс представления полной корзины
 * @property { IBasketModel } model
 */
export interface IBasketUI<IBasketModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IBasketModel }
	 */
	model: IBasketModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}

/**
 * Интерфейс представления краткой корзины
 * @property { IBasketModel } model
 */
export interface IBasketShortUI<IBasketModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IBasketModel }
	 */
	model: IBasketModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}
