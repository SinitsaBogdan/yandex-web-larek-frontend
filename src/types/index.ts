enum PaymentsEnum {
	PAYMENT_ONLINE = 'payment:select-online',
	PAYMENT_RECEIPT = 'payment:select-receipt',
}

interface IStoreApp {
	load(): void;
}

interface IProductModel {
	id: string;
	img: string;
	tag: string;
	name: string;
	descriptions: string;
	price: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IProductPresenter {
	getProductView(item: IProductModel): IProductView<IProductModel>;
	getProductShortView(item: IProductModel): IProductShortView<IProductModel>;
	getProductBasketView(item: IProductModel): IProductBasketView<IProductModel>;
}

interface IProductView<IProductModel> {
	item: IProductModel;
	render(): HTMLElement;
}

interface IProductShortView<IProductModel> {
	item: IProductModel;
	render(): HTMLElement;
}

interface IProductBasketView<IProductModel> {
	item: IProductModel;
	render(): HTMLElement;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ICatalogView<IProductModel> {
	items: IProductModel[];
	getItems(): void;
	render(): HTMLElement;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IBasketView<IProductModel> {
	id: string;
	items: IProductModel[];
	total: number;
	sale: HTMLButtonElement;
	add(id: string): void;
	delete(id: string): void;
	get(id: string): IProductModel[];
	clear(): void;
	render(): HTMLElement;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IModal {
	name: string;
	isOpen: boolean;
	content: HTMLElement;
	open(): void;
	close(): void;
	render(): HTMLElement;
}

interface IPaymentModel {
	payment: PaymentsEnum;
	address: string;
	setPayment(payment: PaymentsEnum): void;
	setAddress(address: string): void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IPaymentView {
	render(): HTMLElement;
}

interface IBayerModel {
	email: string;
	phone: string;
	setEmail(email: string): void;
	setPhone(phone: string): void;
	render(): HTMLElement;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IBayerView {
	render(): HTMLElement;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IOrderModel {
	id: string;
	basket: IProductModel[];
	payment: IPaymentModel;
	bayer: IBayerModel;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ISuccessView {
	render(): HTMLElement;
}
