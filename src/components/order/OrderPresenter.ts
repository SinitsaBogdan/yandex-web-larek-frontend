import { IEvents } from '../../utils/base/Events';
import { OrderModel } from './OrderModel';
import { IOrderApi } from './types/IOrderApi';
import { IOrderPresenter } from './types/IOrderPresenter';

export class OrderPresenter<E extends IEvents> implements IOrderPresenter {
	api?: IOrderApi;
	model: OrderModel;
	events: E;

	constructor(events: E, api?: IOrderApi) {
		this.events = events;
		this.api = api;
		this.model = new OrderModel({}, this.events);
	}
}
