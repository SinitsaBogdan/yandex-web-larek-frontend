/**
 * Модель информации о статусе заказа.
 * Данные модели Используются для вывода информации в модальном окне, которое обозначает завершение формирования заказа.
 * @property { string } title - Заголовок сообщения
 * @property { string } descriptions - Содеражание сообщения
 * @property { string } close - Текст кнопки закрытия сообщения
 */
export interface ICompletingModel {
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
}
