export type CompletingPurchaseType = {
	title: string;
	desctiprions: string;
	textBtnClose?: string;
};

/**
 * Модель информации о статусе заказа.
 * Данные модели Используются для вывода информации в модальном окне, которое обозначает завершение формирования заказа.
 * @property { string } title - Заголовок сообщения
 * @property { string } descriptions - Содеражание сообщения
 * @property { string } close - Текст кнопки закрытия сообщения
 */
export interface ICompletingPurchaseModal {
	/**
	 * Заголовок сообщения
	 * @type { string } title
	 */
	title: string;
	/**
	 * Содеражание сообщения
	 * @type { string } descriptions
	 */
	descriptions: string;
	/**
	 * Текст кнопки закрытия сообщения
	 * @type { string } close
	 */
	close: string;

	/**
	 * Запрос заголовка оповещения.
	 * @returns {string}
	 */
	getTitle(): string;

	/**
	 * Запись заголовка оповещения.
	 * @param {string} value
	 * @returns {void}
	 */
	setTitle(value: string): void;

	/**
	 * Запрос текста описания оповещения.
	 * @returns {string}
	 */
	getDesctiprions(): string;

	/**
	 * Запись текста описания оповещения.
	 * @param {string} value
	 * @returns {void}
	 */
	setDesctiprions(value: string): void;

	/**
	 * Запрос текста акцентной кнопки оповещения.
	 * @returns {string}
	 */
	getTextBtnClose(): string;

	/**
	 * Запись текста акцентной кнопки оповещения.
	 * @param {string} value
	 * @returns {void}
	 */
	setTextBtnClose(value: string): void;
}

/**
 * Интерфейс фабрики CompletingPurchase
 */
export interface ICompletingPurchaseBuilder {
	/**
	 * Метод установки заголовка окна оповещения
	 * @param {string} title
	 * @returns {this}
	 */
	setTitle(title: string): this;
	/**
	 * Метод установки содержимого оповещения
	 * @param {string} descriptions
	 * @returns {this}
	 */
	setDescriptions(descriptions: string): this;
	/**
	 * Метод установки текста кнопки в оповещении
	 * @param {string} close
	 * @returns {this}
	 */
	setClose(close: string): this;
}

/**
 * Визуальное представление содержимого модального окна об успешной оплаты.
 * Вызывается при успешном ( валидном ) заполении форм на предыдущих этапах.
 *
 * @property { ISuccessModal } model - Модель данных для использования в отрисовке
 */
export interface ICompletingPurchaseUI<ICompletingPurchaseModal> {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { ISuccessModal }
	 */
	model: ICompletingPurchaseModal;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}
