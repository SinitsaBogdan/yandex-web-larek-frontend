import { Api, ApiListResponse } from '../../utils/base/Api';
import { IProductApi } from './types/IProductApi';

export class ProductApi<IProductType> extends Api implements IProductApi<IProductType> {
	readonly cdn: string;
	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	getProducts(): Promise<IProductType[]> {
		return this.get('/product').then((data: ApiListResponse<IProductType>) => {
			return data.items.map((item) => ({
				...item,
				img: this.cdn + item,
			}));
		});
	}

	getProduct(id: string): Promise<IProductType[]> {
		return this.get(`/product/${id}`).then((data: ApiListResponse<IProductType>) => {
			return data.items.map((item) => ({
				...item,
				img: this.cdn + item,
			}));
		});
	}
}
