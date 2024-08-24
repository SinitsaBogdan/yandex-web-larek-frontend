import { Api } from '../../../utils/base/Api';
import { TOrderType } from '../types/TOrderType';
import { IOrderApi } from './types/IOrderApi';
import { TOrderResult } from './types/TOrderResult';

/**
 * Класс `OrderApi` предоставляет возможность отправки заказа на сервер.
 *
 * Конструктор `OrderApi`: Это конструктор для класса `OrderApi`.
 * Он инициализирует свойство `cdn` с помощью предоставленной строки `cdn` и вызывает конструктор класса `Api` с параметрами `baseUrl` и `options`.
 *
 * @function postOrder  Этот метод отправляет запрос POST на конечную точку /order с предоставленными данными заказа.
 * Он возвращает Promise, который выполняется с данными ответа, если запрос выполнен успешно, или отклоняется с сообщением об ошибке, если есть ошибка.
 * В случае ошибки он регистрирует заказ и ошибку в консоли.
 */
export class OrderApi extends Api implements IOrderApi {
	/**
	 * Cтрока с URL-адресом
	 */
	readonly cdn: string;

	/**
	 * @param cdn - строка с URL-адресом `cdn`
	 * @param baseUrl - строка с базовым URL-адресом
	 * @param options - параметры для `RequestInit`
	 */
	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	/**
	 * Отправляет запрос POST на конечную точку /order с предоставленными данными заказа.
	 * Возвращает Promise, который выполняется с данными ответа, если запрос выполнен успешно,
	 * или отклоняется с сообщением об ошибке, если есть ошибка.
	 * В случае ошибки он регистрирует заказ и ошибку в консоли.
	 * @param order - тип данных заказа, представленный в виде объекта.
	 * @returns - тип данных ответа от сервера, представленный в виде объекта.
	 * @see {@link TOrderResult}
	 */
	postOrder(order: TOrderType): Promise<void | TOrderResult> {
		return this.post('/order', order)
			.then((data: TOrderResult) => data)
			.catch((error) => {
				console.info(order);
				console.warn(error);
			});
	}
}
