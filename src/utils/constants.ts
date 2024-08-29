export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const settings = {};

export const PAGE_SETTINGS = {
	selectorWrapper: '.page__wrapper',
	classNameWrapperLocked: 'page__wrapper_locked',
};

export const BASKET_SHORT_SETTINGS = {
	selectorCounter: '.header__basket-counter',
};

export const BASKET_SETTINGS = {
	selectorList: '.basket__list',
	selectorPrice: '.basket__price',
	selectorButton: '.basket__button',
};

export const PRODUCT_BASKET_SETTINGS = {
	selectorIndex: '.basket__item-index',
	selectorTitle: '.card__title',
	selectorPrice: '.card__price',
	selectorButton: '.basket__item-delete',
};

export const PRODUCT_PREVIEW_SETTINGS = {
	selectorImage: '.card__image',
	selectorCategory: '.card__category',
	selectorTitle: '.card__title',
	selectorDescription: '.card__description',
	selectorButton: '.card__button',
	selectorPrice: '.card__price',
	classCategorySoft: 'card__category_soft',
	classCategoryHard: 'card__category_hard',
	classCategoryOther: 'card__category_other',
	classCategoryAdditional: 'card__category_additional',
	classCategoryButton: 'card__category_button',
};

export const PRODUCT_CATALOG_SETTINGS = {
	selectorImage: '.card__image',
	selectorCategory: '.card__category',
	selectorTitle: '.card__title',
	selectorPrice: '.card__price',
	classCategorySoft: 'card__category_soft',
	classCategoryHard: 'card__category_hard',
	classCategoryOther: 'card__category_other',
	classCategoryAdditional: 'card__category_additional',
	classCategoryButton: 'card__category_button',
};

export const PAYMENT_SETTINGS = {
	selectorOnline: '.button-online',
	selectorReceit: '.button-receipt',
	selectorInputAddress: '.form__input-address',
	classNameActive: 'button_alt-active',
};

export const CONTACTS_SETTINGS = {
	selectorInputPhone: '.form__input-phone',
	selectorInputEmail: '.form__input-email',
};
export const MODAL_SETTINGS = {
	selectorContent: '.modal__content',
	selectorClose: '.modal__close',
	classActive: 'modal_active',
};

export const SUCCESS_SETTINGS = {
	selectorTitle: '.order-success__title',
	selectorDescription: '.order-success__description',
	selectorBtnClose: '.order-success__close',
};
