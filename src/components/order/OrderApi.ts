import { Api } from '../../utils/base/Api';
import { IOrderApi } from './types/IOrderApi';
import { IOrderType } from './types/IOrderType';

export type OrderResult = {
	id: string;
};

export class OrderApi extends Api implements IOrderApi {
	readonly cdn: string;
	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}
	postOrder(order: IOrderType): Promise<void | OrderResult> {
		return this.post('/order', order)
			.then((data: OrderResult) => data)
			.catch((error) => {
				console.info(order);
				console.warn(error);
			});
	}
}
