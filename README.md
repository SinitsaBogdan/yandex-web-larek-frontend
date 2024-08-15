# Проектная работа "Веб-ларек"

Репозиторий: https://github.com/SinitsaBogdan/web-larek-frontend

Стек: HTML, SCSS, TS, Webpack

Структура проекта:

-   src/ — исходные файлы проекта
-   src/components/ — папка с JS компонентами
-   src/components/shared/ — папка с базовыми компонентами

Важные файлы:

-   src/pages/index.html — HTML-файл главной страницы
-   src/index.ts — точка входа приложения
-   src/scss/styles.scss — корневой файл стилей
-   src/utils/base — папка с базовым кодом
-   src/utils/constants.ts — файл с константами
-   src/utils/utils.ts — файл с утилитами

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

## Сборка

```
npm run build
```

## Об архитектуре

Взаимодействия внутри приложения происходят через события.
Модели, компоненты и действия с данными инициализируют события, слушатели событий в основном коде выполняют передачу данных компонентам отображения,
а также занимаются вычислениями между этой передачей и меняют значения в моделях.

## Архитектура приложения состоит из:

-   **Главный экран**
    Отображение основных UI компонентов приложения.

-   **Базовые классы моделей данных**
    `AppView`, `ProductView`, `Modal`, `Form`
    Формирование и хранение данных в приложении.

-   **Представления UI компонентов для модальных окон**
    `BasketFullUI`, `BasketShortUI`, `BayerUI`, `PaymentUI`, `PageUI`, `ProductBasketUI`, `ProductPreviewUI`, `ProductCatalogUI`, `ProductUI`, `FormUI`, `ModalUI`, `SuccessUI`
    Для композиции UI на основе моделей данных.

-   **Перечисления** - Хранение вариантов значений динамических типов.
    `PaymentsEnum` - Перечисление типов оплаты заказа в приложении.
    `EnumSelectorCategory` - Перечисление стилей классов для категорий товаров.
    `EventsEnum` - Перечисление событий в приложении.

## Архитектура

<!-- ## ![Архитектура проекта](architecture.png) -->

---

### Базовый код

#### Базовый Класс `Component<T>`

Базовый Util класс описывающий управление и взаимодействие над DOM элементами.

##### **Переменные класса:**

-   protected readonly container: HTMLElement - контейнер с html разметкой компонента

##### **Конструктор класса:**

```
    protected constructor(protected readonly container: HTMLElement) {}

```

##### **Методы класса:**

-   `toggleClass(element: HTMLElement, className: string, force?: boolean): void;` - Переключить класс.
-   `protected setText(element: HTMLElement, value: unknown): void;` - Установить текстовое содержимое.
-   `setDisabled(element: HTMLElement, state: boolean): void;` - Сменить статус блокировки.
-   `protected setHidden(element: HTMLElement): void;` - Скрыть.
-   `protected setVisible(element: HTMLElement): void;` - Показать.
-   `protected setImage(element: HTMLImageElement, src: string, alt?: string): void;` - Установить изображение с алтернативным текстом.
-   `render(data?: Partial<T>): HTMLElement;` - Метод сборки UI компонента, на вход принимает html шаблон. На выход отдает скомпанованный html.

<!-- ##### **Генерируемые события:** -->

---

#### Базовый Абстрактный Класс `Api`

Базовый Util класс описывающий взаимодействие с сервисами через базовые запросы к серверу.

##### **Переменные класса:**

-   readonly baseUrl: string; - Базовый url для обращений.
-   protected options: RequestInit; - Опции для Headers

##### **Конструктор класса:**

```
	constructor(baseUrl: string, options: RequestInit = {})
```

##### **Методы класса:**

-   `protected handleResponse(response: Response): Promise<object>` - .
-   `get(uri: string)` - .
-   `protected handleResponse(response: Response): Promise<object>` - .

<!-- ##### **Генерируемые события:** -->

---

#### Базовый Класс `EventEmitter`

Базовый Util класс описывающий взаимодействие с событиями и их генерация в приложении.

##### **Переменные класса:**

-   `_events: Map<EventName, Set<Subscriber>>;` - .

##### **Конструктор класса:**

```
constructor() {
    this._events = new Map<EventName, Set<Subscriber>>();
}
```

##### **Методы класса:**

-   `on<T extends object>(eventName: EventName, callback: (event: T) => void)` - .
-   `off(eventName: EventName, callback: Subscriber)` - .
-   `emit<T extends object>(eventName: string, data?: T)` - .
-   `onAll(callback: (event: EmitterEvent) => void)` - .
-   `offAll()` - .
-   `trigger<T extends object>(eventName: string, context?: Partial<T>)` - .

<!-- ##### **Генерируемые события:** -->

---

#### Базовый Абстрактный Класс `Model<T>`

Базовый Util класс описывающий модель данных в приложении.

<!-- ##### **Переменные класса:** -->

##### **Конструктор класса:**

```
constructor(data: Partial<T>, protected events: IEvents) {
    Object.assign(this, data);
}
```

##### **Методы класса:**

-   `emitChanges(event: string, payload?: object)` - Сообщить всем что модель поменялась.

<!-- ##### **Генерируемые события:** -->

---

#### Перечисление `EventsEnum`

Перечисление событий приложения

-   `API_GET_ALL_PRODUCTS` - Запрос всех товаров с сервера.
-   `API_GET_PRODUCT` - Запрос товара с сервера.
-   `API_POST_PRODUCT` - Отправка данных заказа на сервер.
-   `OPEN_MODAL_PRODUCT` - Открытие модального окна просмотра товара.
-   `OPEN_MODAL_BASKET` - Открытие модального окна корзины.
-   `OPEN_MODAL_PAYMENT` - Открытие модального окна выбора типа оплаты и ввода адреса.
-   `OPEN_MODAL_BAYER` - Открытие модального окна информации о пользователе.
-   `OPEN_MODAL_SUCCESS` - Открытие модального окна успешной оплаты заказа.
-   `CLOSE_MODAL` - Закрытие модального окна.
-   `OPEN_MODAL` - Открытие модального окна.
-   `ADD_PRODUCT_TO_BASKET` - Добавление позиции в заказ.
-   `DELETE_PRODUCT_IN_BASKET` - Удаление позиции из корзины.
-   `SELECT_TYPE_PAYMENT` - Выбор типа оплаты.
-   `INPUT_CHANGE_ADDRESS` - Ввод адреса.
-   `INPUT_CHANGE_PHONE` - Ввод телефона.
-   `INPUT_CHANGE_EMAIL` - Ввод почты.
-   `ORDER_CLEAR` - Сбросс данных о заказе.

#### Перечисление `PaymentsEnum`

Перечисление событий выбора типа оплаты

-   `PAYMENT_ONLINE` - Оплата онлайн.
-   `PAYMENT_RECEIPT` - Оплата при получении.

### Модуль Product

#### Класс `ProductView`

Модель данных товара в проекте. Данные модели используется для отрисовки в главном каталоге приложения, модальном окне предпросмотра и пользовательской корзине.

##### **Используемые типы:**

```
type ProductModel {
    id: string;
    img: string;
    tag: string;
    name: string;
    descriptions: string;
    price: number;
}

```

<!-- ##### **Наследуемые интерфейсы:** -->

##### **Переменные класса:**

-   private index: number - Порядковый номер позиции товара в корзине
-   private id: string - Уникальный идентификатор товара
-   private img: string - Ссылка на изображение товара
-   private tag: string - Категория товара
-   private name: string - Наименование товара
-   private descriptions: string - Описание товара
-   private price: number - Стоимость товара

<!-- ##### **Конструктор класса:** -->

<!-- ##### **Методы класса:** -->

<!-- ##### **Генерируемые события:** -->

---

#### Абстрактный Класс `ProductUI<T>`

Базовый абстрактный класс типового представления UI компонента для отрисовки карточки.

##### **Наследуемые классы:**

-   `Component<ProductView>`

##### **Переменные класса:**

-   `protected _index?: HTMLElement;` - .
-   `protected _image?: HTMLImageElement;` - .
-   `protected _category?: HTMLElement;` - .
-   `protected _title: HTMLElement;` - .
-   `protected _description: HTMLElement;` - .
-   `protected _price: HTMLElement;` - .
-   `protected _button: HTMLButtonElement;` - .

##### **Конструктор класса:**

```
constructor(protected blockName: string, container: HTMLElement, actions?: IProductActions) {
    super(container);
        ... Поиск элементов и их запись в переменные.
        ... Обработка событий.
}

```

##### **Методы класса:**

-   Геттеры `index`, `id`, `category`, `title`, `price`,
-   Сеттеры `index`, `id`, `category`, `title`, `price`, `image`, `description`
-   `private updateCategoryStyleClass(category: string)` - .

<!-- ##### **Генерируемые события:** -->

---

#### Класс `ProductShortUI<T>`

Краткое описание.

##### **Используемые типы:**

##### **Используемые интерфейсы:**

##### **Наследуемые классы:**

-   `ProductUI<HTMLElement>`

##### **Конструктор класса:**

```
constructor(
    container: HTMLElement,
    actions?: IProductActions
) {}
```

##### **Методы класса:**

-   Сеттер - `button`

---

#### Класс `ProductCatalogUI`

Краткое описание.

##### **Используемые типы:**

##### **Используемые интерфейсы:**

##### **Наследуемые классы:**

-   `ProductUI<HTMLElement>`

##### **Конструктор класса:**

```
constructor(
    container: HTMLElement,
    actions?: IProductActions
) {}

```

---

#### Класс `ProductBasketUI`

Краткое описание.

##### **Наследуемые классы:**

-   `ProductUI<HTMLElement>`

##### **Конструктор класса:**

```
constructor(
    container: HTMLElement,
    actions?: IProductActions
) {}

```

##### **Методы класса:**

-   Геттер и Сеттер - `index`

---

#### Класс `ProductUI<T>`

Краткое описание.

##### **Используемые типы:**

##### **Используемые интерфейсы:**

##### **Наследуемые классы:**

-   `Component<ProductView>`

##### **Переменные класса:**

-   `protected _index?: HTMLElement;` - .
-   `protected _image?: HTMLImageElement;` - .
-   `protected _category?: HTMLElement;` - .
-   `protected _title: HTMLElement;` - .
-   `protected _description: HTMLElement;` - .
-   `protected _price: HTMLElement;` - .
-   `protected _button: HTMLButtonElement;` - .

##### **Конструктор класса:**

```
constructor(
    protected blockName: string,
    container: HTMLElement,
    actions?: IProductActions
) {}

```

##### **Методы класса:**

-   Сеттеры - `index`, `id`, `category`, `title`, `price`, `image`, `description`
-   Геттеры - `index`, `id`, `category`, `title`, `price`
-   `private updateCategoryStyleClass(category: string): void;` - .

---

#### Класс `BayerUI`

Краткое описание.

##### **Используемые типы:**

##### **Используемые интерфейсы:**

##### **Наследуемые классы:**

-   `FormUI<BayerView>`

##### **Конструктор класса:**

```
constructor(
    container: HTMLFormElement,
    events: IEvents,
    actions?: IOrderActions
) {}
```

##### **Методы класса:**

-   Геттер - `submit`
-   `isValidateForm(errors: FormErrors)` - .

---

#### Класс `OrderPresenter`

Краткое описание.

##### **Конструктор класса:**

```
private constructor() {}

```

##### **Методы класса:**

-   `static createBauerUI(template: HTMLTemplateElement, events: IEvents): BayerUI` - .
-   `static createPaymentUI(template: HTMLTemplateElement, events: IEvents): PaymentUI` - .

---

#### Класс `BasketFullUI`

Краткое описание.

##### **Используемые типы:**

```
export type BasketData = {
	items: HTMLElement[];
	total: string;
	selected: string[];
}
```

##### **Наследуемые классы:**

-   `Component<BasketData>` - .

##### **Переменные класса:**

-   `protected _list: HTMLElement;` - .
-   `protected _total: HTMLElement;` - .
-   `protected _button: HTMLElement;` - .

##### **Конструктор класса:**

```
constructor(
    container: HTMLElement,
    protected events: EventEmitter
) {}
```

##### **Методы класса:**

-   Геттеры - `button`
-   Сеттеры - `items`, `selected`, `total`

##### **Генерируемые события:**

-   `OPEN_MODAL_PAYMENT`

---

#### Класс `BasketShortUI`

Краткое описание.

##### **Используемые типы:**

```
export type BasketShortView = {
	coll: number;
}
```

##### **Наследуемые классы:**

-   `Component<BasketShortView>`

##### **Переменные класса:**

-   `protected _coll: HTMLElement;` - .

##### **Конструктор класса:**

```
constructor(
    container: HTMLElement
) {}
```

##### **Методы класса:**

-   Геттеры и Сеттеры - `coll`,

---

#### Класс `AppAPI`

Краткое описание.

##### **Используемые интерфейсы:**

-   `StoreApi` - .

##### **Наследуемые классы:**

-   `Api`

##### **Переменные класса:**

-   `readonly cdn: string;` - .

##### **Конструктор класса:**

```
constructor(
    cdn: string,
    baseUrl: string,
    options?: RequestInit
) {}
```

##### **Методы класса:**

-   `getProduct(id: string): Promise<ProductModel>` - .
-   `getProductList(): Promise<ProductModel[]>` - .
-   `postOrder(order: OrderFull): Promise<OrderResult>` - .

---

#### Класс `AppView`

Краткое описание.

##### **Используемые типы:**

```
export type AppData = {
	loading: boolean;
	catalog: ProductModel[];
	basket: string[];
	order: OrderFull;
	preview: ProductView;
	api: StoreApi;
};
```

##### **Используемые интерфейсы:**

-   `IAppState` - .

##### **Наследуемые классы:**

-   `Model<AppData>`

##### **Переменные класса:**

-   `loading: boolean;` - .
-   `api: StoreApi;` - .
-   `basket: ProductView[] = [];` - .
-   `order: OrderFull = this.resetOrder();` - .
-   `_formErrors: FormErrors = {};` - .
-   `_preview: ProductView;` - .
-   `_catalog: ProductView[];` - .

##### **Конструктор класса:**

```
constructor(
    api: StoreApi,
    events: IEvents,
    data?: unknown
) {}
```

##### **Методы класса:**

-   Геттеры - `catalog`,`formErrors`,`preview`,
-   Сеттеры - `preview`,

-   `loadCatalog(): void;` - .
-   `basketAddItem(item: ProductView): void;` - .
-   `basketDeleteItem(item: ProductView): void;` - .
-   `resetOrder(): OrderFull;` - .
-   `toggleLoading(): void;` - .
-   `basketClear(): void;` - .
-   `calcTotalItems(): number;` - .
-   `setCatalog(items: ProductModel[]): void;` - .
-   `public setOrderField(field: keyof OrderData, value: string): void;` - .
-   `private validateOrder(): boolean;` - .

##### **Генерируемые события:**

-   `order:ready`

---

#### Класс `PageUI`

Краткое описание.

##### **Используемые типы:**

```
export type PageView = {
	counter: number;
	catalog: HTMLElement[];
	locked: boolean;
};
```

##### **Наследуемые классы:**

-   `Component<PageView>`

##### **Переменные класса:**

-   `protected _counter: HTMLElement;` - .
-   `protected _catalog: HTMLElement;` - .
-   `protected _wrapper: HTMLElement;` - .
-   `protected _basket: HTMLElement;` - .

##### **Конструктор класса:**

```
constructor(
    container: HTMLElement,
    protected events: IEvents
) {}
```

##### **Методы класса:**

-   Сеттеры - `counter`, `catalog`, `locked`,

##### **Генерируемые события:**

-   `OPEN_MODAL_BASKET`

---

#### Класс `FormUI<T>`

Краткое описание.

##### **Используемые типы:**

```
export type FormView = {
	valid: boolean;
	errors: string;
};
```

##### **Наследуемые классы:**

-   `Component<FormView>`

##### **Переменные класса:**

-   `protected _submit: HTMLButtonElement;` - .
-   `protected _errors: HTMLElement;` - .

##### **Конструктор класса:**

```
constructor(
    protected container: HTMLFormElement,
    protected events?: IEvents
) {}
```

##### **Методы класса:**

-   Сеттеры - `valid`, `errors`
-   `render(state: Partial<T> & FormView): HTMLFormElement;` - Переопределение базовой реализации.

##### **Генерируемые события:**

-   Динамические события изменения полей формы.

---

#### Класс `ModalUI`

Краткое описание.

##### **Используемые типы:**

```
export type ModalView = {
	content: HTMLElement;
};
```

##### **Используемые интерфейсы:**

-   `IModalUI` - .

##### **Наследуемые классы:**

-   `Component<ModalView>`

##### **Переменные класса:**

-   `protected _closeButton: HTMLButtonElement;` - .
-   `protected _content: HTMLElement;` - .

##### **Конструктор класса:**

```
constructor(
    container: HTMLElement,
    protected events: IEvents
) {}
```

##### **Методы класса:**

-   Сеттер - `content`,
-   `open(): void` - .
-   `close(): void` - .
-   `render(data: ModalView): HTMLElement` - .

##### **Генерируемые события:**

-   `OPEN_MODAL`, `CLOSE_MODAL`

---

#### Класс `SuccessUI`

Краткое описание.

##### **Используемые типы:**

```
export type SuccessView = {
	image: string;
	title: string;
	message: string;
	button: string;
}
```

##### **Наследуемые классы:**

-   `Component<SuccessView>`

##### **Переменные класса:**

-   `protected _title: HTMLElement;` - .
-   `protected _message: HTMLElement;` - .
-   `protected _button: HTMLButtonElement;` - .

##### **Конструктор класса:**

```
constructor(
    container: HTMLFormElement,
    events: IEvents,
    actions?: SuccessActions
) {}
```

##### **Методы класса:**

-   Геттеры и Сеттеры - `title`, `message`, `button`

##### **Генерируемые события:**

-   ``

---

#### Класс `PaymentUI`

Краткое описание.

##### **Используемые типы:**

```
export type PaymentView = {
	email: string;
	phone: string;
};
```

##### **Наследуемые классы:**

-   `FormUI<PaymentView>`

##### **Переменные класса:**

-   `protected _paymentOnline: HTMLButtonElement;` - .
-   `protected _paymentUponReceipt: HTMLButtonElement;` - .

##### **Конструктор класса:**

```
constructor(
    container: HTMLFormElement,
    events: IEvents,
    actions?: IOrderActions
) {}
```

##### **Методы класса:**

-   `selectPayment(button: HTMLButtonElement): PaymentsEnum` - .
-   `isValidateForm(errors: FormErrors): void` - .

##### **Генерируемые события:**

-   ``

---
