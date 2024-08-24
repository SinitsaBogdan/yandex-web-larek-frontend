import { IEvents } from '../../../utils/base/Events';
import { BasketPresenter } from '../../basket/BasketPresenter';
import { OrderPresenter } from '../../order/OrderPresenter';
import { ProductModel } from '../../product/ProductModel';
import { ProductPresenter } from '../../product/ProductPresenter';
import { TProductType } from '../../product/types/TProductType';

/**
 * Типизация объекта Презентеров для управления моделями и UI компонентами в приложении.
 *
 * @property basket: Экземпляр формы представления корзины, который принимает два параметра типа: Тип продукта и модель продукта.
 * @property order: Экземпляр формы представления заказа, который принимает один параметр типа: События.
 * @property product: Экземпляр формы представления продукта, который принимает два параметра типа: Тип продукта и модель продукта.
 */
export type TPresenters = {
	basket: BasketPresenter<TProductType, ProductModel>;
	order: OrderPresenter<IEvents>;
	product: ProductPresenter<TProductType, ProductModel>;
};
