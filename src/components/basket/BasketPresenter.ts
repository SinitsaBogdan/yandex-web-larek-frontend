import { IEvents } from '../../utils/base/Events';
import { ProductModel } from '../product/ProductModel';
import { TProductType } from '../product/types/TProductType';
import { IBasketPresenter } from './types/IBasketPresenter';

/**
 * `BasketPresenter` - это универсальный класс, который управляет набором элементов в корзине, реализуя интерфейс `IBasketPresenter`.
 * Он использует карту для хранения элементов и предоставляет методы для добавления, удаления и запроса элементов.
 *
 * addItem(item: T): Добавляет товар в корзину, создавая для него модель и сохраняя ее на карте _items.
 * createModel(item: T): Создает экземпляр ProductModel для данного товара и возвращает его как тип M.
 * getAllItems(): Возвращает массив всех товаров в корзине.
 * checkItemInBasket(id: string): Проверяет, присутствует ли в корзине товар с заданным идентификатором.
 * deleteItem(id: string): Удаляет товар с заданным идентификатором из корзины.
 * getTotalPrice(): Вычисляет общую цену всех товаров в корзине.
 * clear(): Удаляет все товары из корзины.
 */
export class BasketPresenter<T, M> implements IBasketPresenter<T, M> {
	events: IEvents;
	private _items: Map<string, M> = new Map();

	/**
	 * Конструктор класса `BasketPresenter`.
	 * @param events - Объект {@link IEvents}, который будет использоваться для генерации событий.
	 */
	constructor(events: IEvents) {
		this.events = events;
	}

	/**
	 * Добавляет товар в корзину, создавая для него модель и сохраняя ее на карте _items.
	 * @param item - Товар, который будет добавлен в корзину.
	 */
	addItem(item: T): void {
		this._items.set((item as TProductType).id, this.createModel(item));
	}

	/**
	 * Создает экземпляр `ProductModel` для данного товара и возвращает его как тип M.
	 * @param item - Товар, для которого будет создан экземпляр `ProductModel`.
	 * @returns - Новый экземпляр `ProductModel` типа M.
	 */
	createModel(item: T): M {
		return new ProductModel(item, this.events) as M;
	}

	/**
	 * Возвращает массив всех товаров в корзине.
	 * @returns - Массив всех товаров в корзине.
	 */
	getAllItems(): M[] {
		return Array.from(this._items.values());
	}

	/**
	 * Проверяет, есть ли товар с заданным идентификатором в корзине.
	 * @param id - Идентификатор товара.
	 * @returns - `true`, если товар есть в корзине, иначе `false`.
	 */
	checkItemInBasket(id: string): boolean {
		return this._items.has(id);
	}

	/**
	 * Удаляет товар с заданным идентификатором из корзины.
	 * @param id - Идентификатор товара.
	 */
	deleteItem(id: string): void {
		this._items.delete(id);
	}

	/**
	 * Вычисляет общую цену всех товаров в корзине.
	 * @returns - Общую цену всех товаров в корзине.
	 */
	getTotalPrice(): number {
		return this.getAllItems().reduce((total, item) => total + (item as TProductType).price, 0);
	}

    /**
     * Удаляет все товары из корзины.
     */
	clear(): void {
		this._items.clear();
	}
}
