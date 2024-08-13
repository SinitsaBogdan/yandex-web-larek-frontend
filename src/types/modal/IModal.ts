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
}
