import { TOrderResult } from './TOrderResult';
import { TOrderType } from '../../types/TOrderType';

/**
 * Интерфейс, предоставляющий возможность отправки заказа на сервер.
 * @param order - тип данных заказа, представленный в виде объекта.
 * @returns - тип данных ответа от сервера, представленный в виде объекта.
 * @see {@link TOrderResult}
 */
export interface IOrderApi {
	/**
	 * Метод для отправки заказа на сервер.
	 * @param order - тип данных заказа, представленный в виде объекта.
	 * @returns - тип данных ответа от сервера, представленный в виде объекта.
	 * @see {@link TOrderResult}
	 */
	postOrder(order: TOrderType): Promise<void | TOrderResult>;
}
