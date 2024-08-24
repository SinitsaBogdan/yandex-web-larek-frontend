import { IEvents } from '../../../../utils/base/Events';
import { FormUI } from '../../../shared/form/FormUI';
import { TOrderType } from '../../types/TOrderType';

/**
 * Класс пользовательского интерфейса `ContactsUI` расширяет класс `FormUI` и предназначен для управления функциональностью форм, связанных с контактами покупателя.
 *
 * Конструктор:
 * Инициализирует новый экземпляр класса ContactsUI, передавая параметры контейнера и событий родительскому классу FormUI.
 */
export class ContactsUI extends FormUI<TOrderType> {
	/**
	 * Конструктор инициализирует новый экземпляр класса `ContactsUI`, передавая параметры контейнера и событий родительскому классу `FormUI`.
	 * @param container - контейнер форм, связанных с контактами покупателя.
	 * @param events - объект `Event`, который будет использоваться для генерации событий.
	 */
	constructor(protected container: HTMLFormElement, protected events: IEvents) {
		super(container, events);
	}
}
