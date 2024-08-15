import { OrderResult } from '../OrderApi';
import { IOrderType } from './IOrderType';

export interface IOrderApi {
	postOrder(order: IOrderType): Promise<void | OrderResult>;
}
