/** 
 * Тип данных представляющий объект с настройками для UI компонента `ModalUI`.
 */
export type TModalSettings = {

	/**
	 * Селектор кнопки закрытия модального окна.
	 * @type {string}
	 */
	selectorClose: string;

	/**
	 * Селектор содержимого модального окна.
	 * @type {string}
	 */
	selectorContent: string;

	/**
	 * Класс активного модального окна.
	 * @type {string}
	 */
	classActive: string;
};
