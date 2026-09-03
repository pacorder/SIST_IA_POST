export interface StepItem {
  number: number;
  title: string;
  description: string;
  detail: string;
  highlight?: string;
  iconName: string;
}

export interface LatAmCountry {
  code: string;
  name: string;
  currency: string;
  approxExchange: number; // to 1 USD
  flag: string;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  country: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  paymentMethod: 'card' | 'transfer';
}

export interface OrderConfirmation {
  orderId: string;
  buyerName: string;
  buyerEmail: string;
  country: string;
  amount: number;
  date: string;
  founderSpotNumber: number;
}
