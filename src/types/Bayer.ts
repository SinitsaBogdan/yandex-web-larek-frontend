export type BayerType = {
	email: string;
	phone: string;
};

/**
 * Модель данных о пользователе. Хранит в себе контактный телефон и почту пользователя.
 * Используется как содержимое в UI модальной формы на странице магазина (один из шагов пользовательского сценария).
 * @property { string } email - Электронная почта покупателя
 * @property { string } phone - Контактный телефон покупателя
 */
export interface IBayerModel {
	/**
	 * Электронная почта покупателя
	 * @type { string } email
	 */
	email: string;

	/**
	 * Контактный телефон покупателя
	 * @type { string } phone
	 */
	phone: string;

	/**
	 * Запрос элеткронной почты покупателя.
	 * @returns {string}
	 */
	getEmail(): string;

	/**
	 * Запись элеткронной почты покупателя.
	 * @param {string} value
	 * @returns {void}
	 */
	setEmail(value: string): void;

	/**
	 * Запрос контактного телефона покупателя.
	 * @returns {string}
	 */
	getPhone(): string;

	/**
	 * Запись контактного телефона покупателя.
	 * @param {string} value
	 * @returns {void}
	 */
	setPhone(value: string): void;
}

/**
 * Класс представления UI компонента для отрисовки содержимого формы в модальном окне (один из шагов пользовательского сценария).
 * @property { IBayerModel } model
 */
export interface IBayerUI<IBayerModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IBayerModel }
	 */
	model: IBayerModel;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}
