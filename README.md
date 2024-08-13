# Проектная работа "Веб-ларек"

Репозиторий: https://github.com/SinitsaBogdan/web-larek-frontend

Стек: HTML, SCSS, TS, Webpack

Структура проекта:

-   src/ — исходные файлы проекта
-   src/components/ — папка с JS компонентами
-   src/components/base/ — папка с базовым кодом
-   src/types/ — папка с типами

Важные файлы:

-   src/pages/index.html — HTML-файл главной страницы
-   src/index.ts — точка входа приложения
-   src/scss/styles.scss — корневой файл стилей
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
Модели инициализируют события, слушатели событий в основном коде выполняют передачу данных компонентам отображения,
а также занимаются вычислениями между этой передачей, и еще они меняют значения в моделях.

## Архитектура приложения состоит из:

-   **Главный экран**
    Отображение основных UI компонентов приложения.

-   **Базовые классы моделей данных** - `ProductModel`, `CatalogModel`, `BasketModel`, `Modal`, `OrderModel`
    Формирование и хранение данных в приложении.

-   **Представления UI компонентов для модальных окон** - `ProductUI`, `ProductBasketUI`, `BasketUI`, `PaymentUI`, `BayerUI`, `CompletingUI`
    Для композиции UI на основе моделей данных.

-   **Перечисления** - `PaymentsEnum`, `StatusOrderEnum`
    Хранение вариантов значений динамических типов.

## Архитектура

## ![Архитектура проекта](architecture.png)

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

##### **Генерируемые события:**

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
-   `ADD_PRODUCT_TO_BASKET` - Добавление позиции в заказ.
-   `DELETE_PRODUCT_IN_BASKET` - Удаление позиции из корзины.
-   `SELECT_TYPE_PAYMENT` - Выбор типа оплаты.
-   `INPUT_ADDRESS` - Ввод адреса.
-   `INPUT_PHONE` - Ввод телефона.
-   `INPUT_EMAIL` - Ввод почты.

#### Перечисление `PaymentsEnum`

Перечисление событий выбора типа оплаты

-   `PAYMENT_ONLINE` - Оплата онлайн.
-   `PAYMENT_RECEIPT` - Оплата при получении.

#### Перечисление `StatusOrderEnum`

Перечисление статуса оформления заказа

-   `ORDER_REJECTION` - Отмена заказа.
-   `ORDER_MISTAKE` - Ошибка при формировании заказа.
-   `ORDER_SUCCESS` - Успешное оформление заказа.

### Модуль Product

#### Класс `ProductModel<T>`

Модель данных товара в проекте. Данные модели используется для отрисовки в главном каталоге приложения, модальном окне предпросмотра и пользовательской корзине.

##### **Используемые типы:**

```
type ProductType {
    id: string;
    img: string;
    tag: string;
    name: string;
    descriptions: string;
    price: number;
}
```

##### **Наследуемые интерфейсы:**

-   `IProductModel<T>`

##### **Переменные класса:**

-   private id: string - Уникальный идентификатор товара
-   private img: string - Ссылка на изображение товара
-   private tag: string - Категория товара
-   private name: string - Наименование товара
-   private descriptions: string - Описание товара
-   private price: number - Стоимость товара

##### **Конструктор класса:**

```
constructor(obj: ProductType) {
  this.id = obj.id
  this.img = obj.img
  this.tag = obj.tag
  this.name = obj.name
  this.descriptions = obj.descriptions
  this.price = obj.price
}
```

##### **Методы класса:**

-   `getId(): string;` - Запрос уникального идентификатора товара.
-   `setId(value: string): void;` - Запись уникального идентификатора товара.
-   `getImg(): string;` - Запрос ссылки на изображение товара.
-   `setImg(value: string): void;` - Запись ссылки на изображение товара.
-   `getTag(): string;` - Запрос категории товара.
-   `setTag(value: string): void;` - Запись категории товара.
-   `getName(): string;` - Запрос наименования товара.
-   `setName(value: string): void;` - Запись наименования товара.
-   `getDescriptions(): string;` - Запрос описания товара.
-   `setDescriptions(value: string): void;` - Запись описания товара.
-   `getPrice(): number;` - Запрос стоимости товара.
-   `setPrice(value: number): void;` - Запись стоимости товара.

<!-- ##### **Генерируемые события:** -->

---

#### Класс `ProductUI<T>`

Класс представления UI компонента для отрисовки карточки с полной информацией о товаре для содержимого модального окна предпросмотра товара.

##### **Наследуемые классы:**

-   `Component<T>`, `IProductUI`

##### **Переменные класса:**

-   `_model: IProductModel` - Модель данных для использования в отрисовке.
-   `_img: HTMLImageElement;` - Элемент изображения товара.
-   `_tag: HTMLElement;` - Элемент категории товара.
-   `_title: HTMLElement;` - Элемент заголовка товара.
-   `_descriptions: HTMLElement;` - Элемент описания товара.
-   `_total: HTMLElement;` - Элемент стоимости товара.
-   `_close: HTMLButtonElement;` - Элемент акцентной кнопки.

##### **Конструктор класса:**

```
constructor(
    protected model: IProductModel, 
    protected container: HTMLElement, 
    protected settings: ProductSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.
}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Клик по кнопке `В корзину` - `CLOSE_MODAL`, `OPEN_MODAL_BASKET`.

---

#### Класс `ProductShortUI<T>`

Класс представления UI компонента для отрисовки карточки с краткой информацией о товаре для главного каталога приложения.

##### **Наследуемые классы:**

-   `Component<T>`, `IProductShortUI`

##### **Переменные класса:**

-   `_model: IProductModel;` - Модель с данными
-   `_img: HTMLImageElement;` - Элемент изображения товара.
-   `_tag: HTMLElement;` - Элемент категории товара.
-   `_title: HTMLElement;` - Элемент заголовка товара.
-   `_total: HTMLElement;` - Элемент стоимости товара.

##### **Конструктор класса:**

```
constructor(
    protected model: IProductModel, 
    protected container: HTMLElement, 
    protected settings: ProductSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.
}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Клик по карточке товара из каталога - `OPEN_MODAL_PRODUCT`

---

#### Класс `ProductBasketUI<T>`

Класс представления UI компонента для отрисовки карточки с информацией о товаре для размещения в корзине.

##### **Наследуемые классы:**

-   `Component<T>`, `IProductBasketUI`

##### **Переменные класса:**

-   `_model: IProductModel;` - Модель данных для использования в отрисовке.
-   `_index: number;` - Элемент порядкового номера позиции в корзине.
-   `_title: HTMLElement;` - Элемент заголовка.
-   `_total: HTMLElement;` - Элемент стоимости товара.
-   `_delete: HTMLElement;` - Элемент кнопки удаления позиции.

##### **Конструктор класса:**

```
constructor(
    protected model: IProductModel, 
    protected container: HTMLElement, 
    protected settings: ProductSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.
}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Клик по иконке удаления товара из корзины - `DELETE_PRODUCT_IN_BASKET`

---

### Модуль Catalog

#### Класс `CatalogModel<T>`

Модель каталога (хранилища) товаров в проекте. Используется для отрисовки основной коллекции товаров на странице приложения.

##### **Используемые типы:**

```
type CatalogType = {
    items: IProductModel[]
}
```

##### **Наследуемые интерфейсы:**

-   `ICatalogModel<T>`, `ICatalogAPI`

##### **Переменные класса:**

-   private items: IProductModel[] - Массив товаров в приложении.

##### **Конструктор класса:**

```
constructor(obj?: CatalogType) {
  this.items = obj?.items ?? IProductModel[]
}
```

##### **Методы класса:**

-   `getItems(): IProductModel[];` - Запрос списка товаров в корзине.
-   `getItem(id: string): IProductModel;` - Запрос товара по id.

<!-- ##### **Генерируемые события:** -->

---

#### Интерфейс `ICatalogAPI`

Интерфейс API для взаимодействия модуля `Catalog` с сервером, сохранение и обмена информацией.

##### **Конструктор класса:**

Принимает базовый URL и глобальные опции для всех запросов(опционально).

```
constructor(
    baseUrl: string,
    options: RequestInit = {}
)
```

##### **Методы класса:**

-   `getProducts(): IProductModel[];` - GET запрос всего списка товаров.
-   `getProduct(id: string): IProductModel;` - GET запрос конкретного товара по id.

##### **Генерируемые события:**

-   Запрос всех товаров с сервера. Вызов метода `getProducts` - `API_GET_ALL_PRODUCTS`.
-   Запрос товара с сервера. Вызов метода `getProduct` - `API_GET_PRODUCT`.

---

#### Класс `CatalogUI<T>`

Класс представления UI компонента для отрисовки главного каталога товаров на странице.

##### **Наследуемые классы:**

-   `Component<T>`, `ICatalogUI`

##### **Переменные класса:**

-   `_model: ICatalogModel;` - Модель с данными.
-   `_list: HTMLElement;` - Контейнер под товары.

##### **Конструктор класса:**

```
constructor(
    protected model: ICatalogModel, 
    protected container: HTMLElement, 
    protected settings: CatalogSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.
}
```

<!-- ##### **Методы класса:** -->

<!-- ##### **Генерируемые события:** -->

---

### Модуль Basket

#### Класс `BasketModel<T>`

Модель данных корзины с товарами. Хранит в себе позиции добавленых пользователем товаров. Передается объектом в Заказ при подтвержении всех позиций пользователем. После изменения списка позиций должен происходить пересчет `total`.

##### **Используемые типы:**

```
type BasketType = {
    items: IProductModel[]
    total?: number
}
```

##### **Наследуемые интерфейсы:**

-   `IBasketModel<T>`

##### **Переменные класса:**

-   private items: IProductModel[] - Массив товаров добавленных в пользовательскую корзину
-   private total: number - Общая сумма товаров в корзине

##### **Конструктор класса:**

```
constructor(obj?: BasketType) {
  this.items = obj?.items ?? IProductModel[]
  this.total = obj?.total ?? 0
}
```

##### **Методы класса:**

-   `getItems(): IProductModel[];` - Запрос списка товаров в корзине.
-   `setItems(value: IProductModel[]): void;` - Запись списка товаров в корзину.
-   `getTotal(): number;` - Запрос общей суммы позиций товаров в корзине.
-   `setTotal(value: number): void;` - Запись общей суммы позиций товаров в корзине.
-   `add(id: string): void;` - Добавление нового товара в корзину.
-   `delete(id: string): void;` - Удаление товара из корзины.

<!-- ##### **Генерируемые события:** -->

---

#### Класс `BasketUI<T>`

Класс представления UI компонента для отрисовки полной корзины (один из шагов пользовательского сценария).

##### **Наследуемые классы:**

-   `Component<T>`, `IBasketUI`

##### **Переменные класса:**

-   `_model: IBasketModel;` - Модель с данными
-   `_total: number;` - Сумма корзины
-   `_close: HTMLElement;` - Элемент акцентной кнопки

##### **Конструктор класса:**

```
constructor(
    protected model: IBasketModel, 
    protected container: HTMLElement, 
    protected settings: IBasketSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.

}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Клик по кнопке `Оформить` - `CLOSE_MODAL`, `OPEN_MODAL_PAYMENT`

---

#### Класс `BasketShortUI<T>`

Класс представления UI компонента для отрисовки краткой корзины (для шапки магазина).

##### **Наследуемые классы:**

-   `Component<T>`, `IBasketShortUI`

##### **Переменные класса:**

-   `_model: IBasketModel;` - Модель с данными.
-   `_coll: number;` - Колличество товаров в корзине.

##### **Конструктор класса:**

```
constructor(
    protected model: IBasketModel, 
    protected container: HTMLElement, 
    protected settings: BasketSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.

}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Клик на иконке корзины - `OPEN_MODAL_BASKET`.

---

### Модуль Modal

#### Класс `Modal<T>`

Модель данных модального окна. В используется как шаблонный компонент (обертка) с контейнером под другой контент.

##### **Используемые типы:**

```
type ModalType = {
      name: string
      isOpen: boolean
      content: HTMLElement
}
```

##### **Наследуемые интерфейсы:**

-   `IModal`

##### **Переменные класса:**

-   private name: string - Наименование модального окна
-   private isOpen: boolean - Модальное окно открыто \ закрыто
-   private content: HTMLElement - Вложенный контент в модальное окно

##### **Конструктор класса:**

```
constructor(obj: ModalType) {
  this.name = obj.name? ?? null
  this.isOpen = obj?.isOpen? ?? false
  this.content = obj?.content? ?? undefined
}
```

##### **Методы класса:**

-   `getName(): string;` - Запрос наименования модального окна.
-   `setName(value: string): void;` - Запись наименования модального окна.
-   `getIsOpen(): boolean;` - Запрос статуса активности модального окна.
-   `setIsOpen(value: boolean): void;` - Запись статуса активности модального окна.
-   `getContent(): HTMLElement;` - Запрос содержимого модального окна.
-   `setContent(value: HTMLElement): void;` - Запись содержимого модального окна.
-   `open(): void;` - Открыть модальное окно.
-   `close(): void;` - Скрыть модальное окно.

<!-- ##### **Генерируемые события:** -->

---

#### Класс `ModalUI`

Класс представления UI компонента для отрисовки модального окна.

##### **Наследуемые классы:**

-   `Component<T>`, `IModalUI`

##### **Переменные класса:**

-   `_model: IModal` - Модель с данными
-   `_close: HTMLElement` - Кнопка закрытия модального окна

##### **Конструктор класса:**

```
constructor(
    protected model: IModal, 
    protected container: HTMLElement, 
    protected settings: ModalSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.
}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Клик по кнопке закрытия модального окна - `CLOSE_MODAL`.
-   Клик по внешней области модального окна - `CLOSE_MODAL`.

---

### Модуль Payment

#### Класс `PaymentModel<T>`

Модель данных о типе оплаты заказа и адресе доставки. Хранит в себе тип оплаты из перечисления `PaymentsEnum` и адрес доставки.
Используется как содержимое в UI модальной формы на странице магазина (один из шагов пользовательского сценария).

##### **Используемые типы:**

```
type PaymentType = {
      payment: PaymentsEnum
      address: string
}
```

##### **Наследуемые интерфейсы:**

-   `IPaymentModel<T>`

##### **Переменные класса:**

-   private payment: PaymentsEnum - Тип оплаты заказа
-   private address: string - Адрес для доставки заказа

##### **Конструктор класса:**

```
constructor();
constructor(obj: PaymentType) {
  this.payment = obj?.payment? ?? null
  this.address = obj?.address? ?? null
}
```

##### **Методы класса:**

-   `getPayment(): PaymentType;` - Запрос типа оплаты заказа.
-   `setPayment(value: PaymentType): void;` - Запись типа оплаты заказа.
-   `getAddress(): string;` - Запрос адреса доставки заказа.
-   `setAddress(value: string): void;` - Запись адреса доставки заказа.

<!-- ##### **Генерируемые события:** -->

---

#### Класс `PaymentUI<T>`

Класс представления UI компонента для отрисовки содержимого формы в модальном окне (один из шагов пользовательского сценария).

##### **Наследуемые классы:**

-   `Component<T>`, `IPaymentUI<T>`

##### **Переменные класса:**

-   `_model: IPaymentModel;` - Модель данных для использования в отрисовке.
-   `_btnPayments: HTMLElement[];` - Контейнер с кнопками типов оплаты.
-   `_adress: HTMLInputElement;` - Элемент поля ввода адреса.
-   `_close?: HTMLButtonElement;` - Элемент акцентной кнопки

##### **Конструктор класса:**

```
constructor(
    protected model: IPaymentModel, 
    protected container: HTMLElement, 
    protected settings: PaymentSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.

}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Выбор типа оплаты заказа - `SELECT_TYPE_PAYMENT`.
-   Ввод адреса доставки - `INPUT_ADDRESS`.
-   Клик по кнопке `Далее` - `CLOSE_MODAL`, `OPEN_MODAL_BAYER`

---

### Модуль Bayer

#### Класс `BayerModel<T>`

Модель данных о пользователе. Хранит в себе контактный телефон и почту пользователя.
Используется как содержимое в UI модальной формы на странице магазина (один из шагов пользовательского сценария).

##### **Используемые типы:**

```
type BayerType = {
      email: string
      phone: string
}
```

##### **Наследуемые интерфейсы:**

-   `IBayerModel<T>`

##### **Переменные класса:**

-   private email: string - Электронная почта покупателя
-   private phone: string - Контактный телефон покупателя

##### **Конструктор класса:**

```
constructor();
constructor(obj: BayerType) {
  this.email = obj?.email? ?? null
  this.phone = obj?.phone? ?? null
}
```

##### **Методы класса:**

-   `getEmail(): string;` - Запрос элеткронной почты покупателя.
-   `setEmail(value: string): void;` - Запись элеткронной почты покупателя.
-   `getPhone(): string;` - Запрос контактного телефона покупателя.
-   `setPhone(value: string): void;` - Запись контактного телефона покупателя.

<!-- ##### **Генерируемые события:** -->

---

#### Класс `BayerUI<T>`

Класс представления UI компонента для отрисовки содержимого формы в модальном окне (один из шагов пользовательского сценария).

##### **Наследуемые классы:**

-   `Component<T>`, `IBayerUI`

##### **Переменные класса:**

-   `_model: IBayerModel;` - Модель с данными
-   `_email: HTMLElement;` - Элемент ввода почты
-   `_phone: HTMLElement;` - Элемент ввода телефона
-   `_close: HTMLElement;` - Элемент кнопки

##### **Конструктор класса:**

```
constructor(
    protected model: IBayerModel, 
    protected container: HTMLElement, 
    protected settings: CompletingSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.

}
```

<!-- ##### **Методы класса:** -->

##### **Генерируемые события:**

-   Ввод контактного телефона - `INPUT_PHONE`.
-   Ввод электронной почты - `INPUT_EMAIL`.
-   Клик по кнопке `Оплатить` - `CLOSE_MODAL`, `OPEN_MODAL_SUCCESS`

---

### Модуль Order

#### Класс `OrderModel<T>`

Модель заказа. Наполняется данными постепенно по мере прохождения по пользовательскому сценарию оформления заказа.
Хранит в себе все данные о формируемом заказе для дальнейшей передачи на сервер.
Данные из модели так же используются для UI компонентов.

##### **Используемые типы:**

```
type OrderType = {
      status: StatusOrderEnum
      basket: IBasketModel
      payment: IPaymentModel
      bayer: IBayerModel
}
```

##### **Наследуемые интерфейсы:**

-   `IOrderModel<T>`, `IOrderAPI`

##### **Переменные класса:**

-   private status: StatusOrderEnum - Статус формирования заказа
-   private basket: IBasketModel - Список позиций заказа ( корзина )
-   private payment: IPaymentModel - Данные о оплате и адресе доставки
-   private bayer: IBayerModel - Данные о покупателе

##### **Конструктор класса:**

```
constructor();
constructor(obj: OrderType) {
  this.status = obj?.status? ?? null
  this.basket = obj?.basket? ?? null
  this.payment = obj?.payment? ?? null
  this.bayer = obj?.bayer? ?? null
}
```

##### **Методы класса:**

-   `getStatus(): StatusOrderEnum;` - Запрос статуса заказа.
-   `setStatus(value: StatusOrderEnum): void;` - Запись статуса заказа.
-   `getBasket(): IBasketModel;` - Запрос позиций заказа (корзины).
-   `setBasket(value: IBasketModel): void;` - Запись позиций заказа (корзины).
-   `getPayment(): IPaymentModel;` - Запрос данных об оплате и адресе.
-   `setPayment(value: IPaymentModel): void;` - Запись данных об оплате и адресе.
-   `getBayer(): IBayerModel;` - Запрос данных об покупателе.
-   `setBayer(value: IBayerModel): void;` - Запись данных об покупателе.

<!-- ##### **Генерируемые события:** -->

---

#### Интерфейс `IOrderAPI`

Интерфейс API для взаимодействия модуля `Order` с сервером, сохранение и обмена информацией.

##### **Конструктор класса:**

Принимает базовый URL и глобальные опции для всех запросов(опционально).

```
constructor(
    baseUrl: string,
    options: RequestInit = {}
)
```

##### **Методы класса:**

-   `postOrder(): void;` - Отправка данных о заказе на сервер.

##### **Генерируемые события:**

-   Отправка заказа на сервер. Вызов метода `postOrder` - `API_POST_PRODUCT`

---

### Модуль Completing

#### Класс `CompletingModel<T>`

Модель информации о статусе заказа. Данные модели Используются для вывода информации в модальном окне, которое обозначает завершение формирования заказа.

##### **Используемые типы:**

```
type CompletingPurchaseType = {
      title: string
      desctiprions: string
      textBtnClose?: string
}
```

##### **Наследуемые интерфейсы:**

-   `ICompletingModel<T>`

##### **Переменные класса:**

-   private title: string - Заголловок оповещения
-   private desctiprions: string - Описание оповещения
-   private textBtnClose: string - Текст акцентной кнопки

##### **Конструктор класса:**

```
    constructor();
    constructor(obj?: CompletingPurchaseType) {
      this.title = obj?.title? ?? null,
      this.desctiprions = obj?.desctiprions? ?? null,
      this.textBtnClose = obj?.textBtnClose? ?? null
    }
```

##### **Методы класса:**

-   `getTitle(): string;` - Запрос заголовка оповещения.
-   `setTitle(value: string): void;` - Запись заголовка оповещения.
-   `getDesctiprions(): string;` - Запрос текста описания оповещения.
-   `setDesctiprions(value: string): void;` - Запись текста описания оповещения.
-   `getTextBtnClose(): string;` - Запрос текста акцентной кнопки оповещения.
-   `setTextBtnClose(value: string): void;` - Запись текста акцентной кнопки оповещения.

<!-- ##### **Генерируемые события:** -->

---

#### Класс `CompletingUI<T>`

Класс представления UI компонента для отрисовки оповещения о завершении формирования заказа.

##### **Наследуемые классы:**

-   `Component<T>`, `ICompletingUI<T>`

##### **Переменные класса:**

-   `_model: ICompletingModel;` - Модель с данными
-   `_img?: HTMLImageElement;` - Элемент изображения
-   `_title: HTMLElement;` - Элемент заголовка
-   `_descriptions: HTMLElement;` - Элемент описания
-   `_close?: HTMLButtonElement;` - Элемент акцентной кнопки

##### **Конструктор класса:**

```
constructor(
    protected model: ICompletingModel, 
    protected container: HTMLElement, 
    protected settings: CompletingSetings
) {
    super(container);
    
    ... Поиск элементов и их запись в переменные.

    ... Обработка событий.

}
```

<!-- ##### **Методы класса:** -->

<!-- ##### **Генерируемые события:** -->

-   Клик по кнопке `За новыми покупками!` - `CLOSE_MODAL`
