import { IEvents } from '../../../utils/base/Events';
import { BasketPresenter } from '../../basket/BasketPresenter';
import { OrderPresenter } from '../../order/OrderPresenter';
import { ProductModel } from '../../product/ProductModel';
import { ProductPresenter } from '../../product/ProductPresenter';
import { IProductType } from '../../product/types/IProductType';

export type IPresenters = {
	basket: BasketPresenter<IProductType, ProductModel>;
	order: OrderPresenter<IEvents>;
	product: ProductPresenter<IProductType, ProductModel>;
};
