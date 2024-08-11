/**
 * Интерфейс модели модального окна
 * @property { string } name
 * @property { boolean } isOpen
 * @property { HTMLElement } content
 */
export interface IModal {
	/**
	 * Наименование модального окна
	 * @type { string } name
	 */
	name: string;

	/**
	 * Boolean значение открытого окна
	 * @type { boolean } isOpen
	 */
	isOpen: boolean;

	/**
	 * Содержимое модального окна
	 * @type { HTMLElement } content
	 */
	content: HTMLElement;

	/**
	 * Запрос наименования модального окна.
	 * @returns { void }
	 */
	getName(): string;

	/**
	 * Запись наименования модального окна.
	 * @param { string } value
	 * @returns { void }
	 */
	setName(value: string): void;

	/**
	 * Запрос статуса активности модального окна.
	 * @returns { boolean }
	 */
	getIsOpen(): boolean;

	/**
	 * Запись статуса активности модального окна.
	 * @param { boolean } value
	 * @returns { void }
	 */
	setIsOpen(value: boolean): void;

	/**
	 * Запрос содержимого модального окна.
	 * @returns { HTMLElement }
	 */
	getContent(): HTMLElement;

	/**
	 * Запись содержимого модального окна.
	 * @param { HTMLElement } value
	 * @returns { void }
	 */
	setContent(value: HTMLElement): void;

	/**
	 * Метод открытия модального окна
	 * @returns { void }
	 */
	open(): void;

	/**
	 * Метод закрытия модального окна
	 * @returns { void }
	 */
	close(): void;
}

/**
 * Класс представления UI компонента для отрисовки модального окна.
 * @property { IModal } model
 */
export interface IModalUI {
	/**
	 * Модель данных для использования в отрисовке
	 * @type { IModal }
	 */
	model: IModal;

	/**
	 * Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.
	 * @param {HTMLElement} template - шаблон компонента
	 * @returns {HTMLElement}
	 */
	render(template: HTMLElement): HTMLElement;
}
