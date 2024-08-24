import { IEvents } from '../../utils/base/Events';
import { OrderModel } from './OrderModel';
import { IOrderApi } from './api/types/IOrderApi';

/**
 * Универсальный класс, который принимает параметр типа E extends `IEvents`. У него есть три свойства: `api`, `model` и `events`. 
 * Класс представляет собой презентер для заказа, который отвечает за управление данными заказа и взаимодействиями.
 * 
 * Конструктор: Инициализирует экземпляр `OrderPresenter` с помощью объекта `events` и необязательного объекта `api`. 
 * Он также создает новый экземпляр `OrderModel` с пустым объектом данных и предоставленным объектом `events`.
 */
export class OrderPresenter<E extends IEvents> {
	api?: IOrderApi;
	model: OrderModel;
	events: E;

	constructor(events: E, api?: IOrderApi) {
		this.events = events;
		this.api = api;

		// TODO: Передавать в конструктор ? 
		this.model = new OrderModel({}, this.events);
	}
}
