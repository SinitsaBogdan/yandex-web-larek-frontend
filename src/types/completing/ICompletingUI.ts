/**
 * Визуальное представление содержимого модального окна об успешной оплаты.
 * Вызывается при успешном ( валидном ) заполении форм на предыдущих этапах.
 * @property { ISuccessModal } model - Модель данных для использования в отрисовке
 */
export interface ICompletingUI<ICompletingModel> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { ISuccessModal }
	 */
	_model: ICompletingModel;

	/**
	 * Элемент изображения.
	 * @type { HTMLImageElement }
	 */
	_img?: HTMLImageElement;

	/**
	 * Элемент заголовка.
	 * @type { HTMLElement }
	 */
	_title: HTMLElement;

	/**
	 * Элемент описания.
	 * @type { HTMLElement }
	 */
	_descriptions: HTMLElement;

	/**
	 * Элемент акцентной кнопки.
	 * @type { HTMLButtonElement }
	 */
	_close?: HTMLButtonElement;
}
