import { Component } from "../../utils/Component";

/**
 * Класс представления UI компонента для отрисовки модального окна.
 * @property { IModal } model
 */
export interface IModalUI<IModal> extends Component<HTMLElement> {

	// TODO: Методы закрытия модального окна ( клик по кнопке | клик по внешней области )

	/**
	 * Модель данных для использования в отрисовке
	 * @type { IModal }
	 */
	_model: IModal;

	/**
	 * Кнопка закрытия модального окна
	 * @type { HTMLButtonElement }
	 */
	_close: HTMLButtonElement;
}
