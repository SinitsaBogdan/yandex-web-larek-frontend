// TODO: Возможно лучше сделать один общий абстрактный класс Catalog для реализации общих методов ?
// IProductPresenter и IBasketPresenter

/**
 * Это определение интерфейса для класса, представляющего продукты, позволяющее использовать общие типы T и M.
 *
 * @function addItem Добавляет новый элемент типа T в презентатор.
 * @function getItem Извлекает элемент типа M по его идентификатору.
 * @function getAllItems Возвращает коллекцию всех элементов типа M.
 * @function createModel Создает новую модель типа M из элемента типа T.
 */
export interface IProductPresenter<T, M> {
	addItem(item: T): void;
	getItem(id: string): M;
	getAllItems(): M[];
	createModel(item: T): M;
}
