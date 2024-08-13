import { IProductModel } from '../product/IProductModel';

export type BasketType = {
	items: IProductModel[];
	total?: number;
};
