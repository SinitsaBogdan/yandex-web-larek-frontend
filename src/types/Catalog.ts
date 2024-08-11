/**
 * Интерфейс модели карточки с полной информацией о товаре
 * @property { IProductModel[] } items - Массив товаров
 */
export interface ICatalogModel<IProductModel> {
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
