// TODO: Возможно лучше сделать один общий абстрактный класс Catalog для реализации общих методов ?
// IProductPresenter и IBasketPresenter

/**
 * Этот интерфейс определяет контракт для класса `BasketPresenter`, который управляет коллекцией элементов.
 *
 * @function addItem Добавляет в корзину новый товар типа T.
 * @function getAllItems Возвращает массив всех товаров в корзине, где каждый товар имеет тип M.
 * @function checkItemInBasket Проверяет, есть ли в корзине товар с указанным идентификатором.
 * @function createModel Создает модель типа M из элемента типа T.
 * @function getTotalPrice Возвращает общую стоимость всех товаров в корзине.
 * @function clear Удаляет все товары из корзины.
 * @function deleteItem Удаляет товар с указанным идентификатором из корзины.
 *
 * Обратите внимание, что T и M являются параметрами общего типа, что означает, что они могут быть заменены конкретными типами при реализации этого интерфейса.
 */
export interface IBasketPresenter<T, M> {
    addItem(item: T): void;
	getAllItems(): M[];
	checkItemInBasket(id: string): boolean;
	createModel(item: T): M;
	getTotalPrice(): number;
	clear(): void;
	deleteItem(id: string): void;
}
