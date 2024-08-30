import { TSuccessSettings } from './TSuccessSettings';
import { TSuccessView } from './TSuccessView';
import { EventsEnum as EVENT } from '../../../../utils/enums/EventsEnum';
import { Component } from '../../../../utils/base/Component';
import { IEvents } from '../../../../utils/base/Events';
import { ensureElement } from '../../../../utils/utils';

/**
 * Класс `SuccessUI` расширяет класс `Component` и предназначен для управления пользовательским интерфейсом для получения сообщения об успешном завершении оформления заказа.
 * Он использует элемент контейнера, события и настройки в своем конструкторе.
 *
 * Конструктор:
 * Инициализирует экземпляр `SuccessUI`, настраивает элементы `title`, `description` и `close` на основе предоставленных настроек
 * и добавляет прослушиватель событий к кнопке закрытия, чтобы при нажатии на нее генерировалось событие `MODAL_CLOSE`.
 */
export class SuccessUI extends Component<TSuccessView> {

	/** 
	 * Настройки UI компонента.
	*/
	private readonly settings: TSuccessSettings;
	
	/** 
	 * Элемент заголовка сообщения об успешном завершении оформления заказа.
	*/
	private _title: HTMLElement;
	
	/** 
	 * Элемент описания сообщения об успешном завершении оформления заказа.
	*/
	private _descriptions: HTMLElement;
	
	/** 
	 * Элемент кнопки закрытия сообщения об успешном завершении оформления заказа.
	*/
	private _close: HTMLButtonElement;

	/**
	 * @param container - контейнер, в котором будет создан UI компонент.
	 * @param events - экземпляр класса `IEvents`, через который будет генерироваться событие `MODAL_CLOSE`.
	 * @param settings - объект настроек, унаследованный от `TSuccessSettings`.
	 */
	constructor(protected container: HTMLFormElement, events: IEvents, settings: TSuccessSettings) {
		super(container);
		this.settings = settings;

		this._title = ensureElement(this.settings.selectorTitle, container) as HTMLElement;
		this._descriptions = ensureElement(this.settings.selectorDescription, container) as HTMLElement;
		this._close = ensureElement(this.settings.selectorBtnClose, container) as HTMLButtonElement;

		this._close.addEventListener('click', () => {
			events.emit(EVENT.SUCCESS_CLOSE)
		});
	}

	/**
	 * Свойство `title` устанавливает текст заголовка сообщения об успешном завершении оформления заказа.
	 */
	set title(value: string) {
		this.setText(this._title, value);
	}

	/**
	 * Свойство `descriptions` устанавливает текст описания сообщения об успешном завершении оформления заказа.
	 */
	set descriptions(value: string) {
		this.setText(this._descriptions, value);
	}

	/**
	 * Свойство `close` устанавливает текст кнопки закрытия сообщения об успешном завершении оформления заказа.
	 */
	set close(value: string) {
		this.setText(this._close, value);
	}
}
