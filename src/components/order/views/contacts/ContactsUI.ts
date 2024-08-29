import { IEvents } from '../../../../utils/base/Events';
import { ensureElement } from '../../../../utils/utils';
import { FormUI } from '../../../shared/form/FormUI';
import { TOrderType } from '../../types/TOrderType';
import { TContactsSettings } from './TContactsSettings';

/**
 * Класс пользовательского интерфейса `ContactsUI` расширяет класс `FormUI` и предназначен для управления функциональностью форм, связанных с контактами покупателя.
 *
 * Конструктор:
 * Инициализирует новый экземпляр класса ContactsUI, передавая параметры контейнера и событий родительскому классу FormUI.
 */
export class ContactsUI extends FormUI<TOrderType> {
	/**
	 * Свойство `_phone` представляет собой HTML-элемент поля для ввода телефона.
	 */
	private _phone: HTMLInputElement;

	/**
	 * Свойство `_email` представляет собой HTML-элемент поля для ввода почты.
	 */
	private _email: HTMLInputElement;

	/**
	 * Конструктор инициализирует новый экземпляр класса `ContactsUI`, передавая параметры контейнера и событий родительскому классу `FormUI`.
	 * @param container - контейнер форм, связанных с контактами покупателя.
	 * @param events - объект `Event`, который будет использоваться для генерации событий.
	 */
	constructor(protected container: HTMLFormElement, protected events: IEvents, settings: TContactsSettings) {
		super(container, events);
		this._phone = ensureElement(settings.selectorInputPhone, container) as HTMLInputElement;
		this._email = ensureElement(settings.selectorInputEmail, container) as HTMLInputElement;
	}

	/**
	 * Очищает форму контактов. Удаляет текст в поле ввода телефона и почты.
	 */
	clear(): void {
		this._phone.value = '';
		this._email.value = '';
	}
}
