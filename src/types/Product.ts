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

	/**
	 * Запрос уникального идентификатора товара.
	 * @returns {string}
	 */
	getId(): string;

	/**
	 * Запись уникального идентификатора товара.
	 * @param {string} value
	 * @returns {void}
	 */
	setId(value: string): void;

	/**
	 * Запрос ссылки на изображение товара.
	 * @returns {string}
	 */
	getImg(): string;

	/**
	 * Запись ссылки на изображение товара.
	 * @param {string} value
	 * @returns {void}
	 */
	setImg(value: string): void;

	/**
	 * Запрос категории товара.
	 * @returns {string}
	 */
	getTag(): string;

	/**
	 * Запись категории товара.
	 * @param {string} value
	 * @returns {void}
	 */
	setTag(value: string): void;

	/**
	 * Запрос наименования товара.
	 * @returns {string}
	 */
	getName(): string;

	/**
	 * Запись наименования товара.
	 * @param {string} value
	 * @returns {void}
	 */
	setName(value: string): void;

	/**
	 * Запрос описания товара.
	 * @returns {string}
	 */
	getDescriptions(): string;

	/**
	 * Запись описания товара.
	 * @param {string} value
	 * @returns {void}
	 */
	setDescriptions(value: string): void;

	/**
	 * Запрос стоимости товара.
	 * @returns {number}
	 */
	getPrice(): number;

	/**
	 * Запись стоимости товара.
	 * @param {string} value
	 * @returns {void}
	 */
	setPrice(value: number): void;
}

/**
 * Интерфейс представления карточки с полной информацией о товаре
 * @property {IProductModel} model - модель товара
 * @function render Метод для сборки разметки компонента
 */
export interface IProductUI<IProductModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IProductModel }
	 */
	model: IProductModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}

/**
 * Представление карточки с краткой информацией о товаре
 * @property { IProductModel } model - Модель данных для использования в отрисовке
 * @method render Метод для сборки разметки компонента
 */
export interface IProductShortUI<IProductModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IProductModel }
	 */
	model: IProductModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}

/**
 * Интерфейс представления карточки с информацией о товаре для размещения в корзине
 * @property { IProductModel } model - Модель данных для использования в отрисовке
 * @method render Метод для сборки разметки компонента
 */
export interface IProductBasketUI<IProductModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IProductModel }
	 */
	model: IProductModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}
