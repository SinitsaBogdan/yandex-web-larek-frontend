export type IPaymentData = {
	payment: string;
	address: string;
};

export type IContactsData = {
	phone: string;
	email: string;
};

export type IOrderType = {
	items: string[];
	total: number;
} & IPaymentData &
	IContactsData;
