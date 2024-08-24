import { Api, ApiListResponse } from '../../utils/base/Api';
import { IProductApi } from './types/IProductApi';

/**
 * Универсальный класс, для работы с `API` методами твоаров на сервеной части, так же он расширяет класс `Api` и реализует интерфейс `IProductApi`.
 * У него есть свойство cdn, доступное только для чтения, и два метода для поиска продуктов.
 *
 * @function getProducts Извлекает список продуктов из API и возвращает обещание массива объектов TProductType. Он сопоставляет ответ API, чтобы включить URL-адрес cdn в свойство img каждого продукта.
 * @function getProduct Извлекает отдельный продукт по его идентификатору из API и возвращает обещание массива объектов TProductType. Он сопоставляет ответ API с включением URL-адреса cdn в свойство img продукта.
 */
export class ProductApi<TProductType> extends Api implements IProductApi<TProductType> {
	/**
	 * @param cdn - строка с URL-адресом `cdn`
	 * @param baseUrl - строка с базовым URL-адресом
	 * @param options - параметры для `RequestInit`
	 */
	constructor(readonly cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	/**
	 * Извлекает список продуктов из API и возвращает обещание массива объектов TProductType.
	 * Он сопоставляет ответ API, чтобы включить URL-адрес cdn в свойство img каждого продукта.
	 * @returns - тип данных ответа от сервера, представленный в виде объекта.
	 */
	getProducts(): Promise<TProductType[]> {
		return this.get('/product').then((data: ApiListResponse<TProductType>) => {
			return data.items.map((item) => ({
				...item,
				img: this.cdn + item,
			}));
		});
	}

	/**
	 * Извлекает отдельный продукт по его идентификатору из API и возвращает обещание массива объектов TProductType.
	 * Он сопоставляет ответ API с включением URL-адреса cdn в свойство img продукта.
	 * @param id - идентификатор продукта.
	 * @returns - тип данных ответа от сервера, представленный в виде объекта.
	 */
	getProduct(id: string): Promise<TProductType[]> {
		return this.get(`/product/${id}`).then((data: ApiListResponse<TProductType>) => {
			return data.items.map((item) => ({
				...item,
				img: this.cdn + item,
			}));
		});
	}
}
