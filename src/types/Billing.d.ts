export interface BillingInformationDetails {
    id: number;
    name: string;
    company: string;
    email: string;
    vatNumber: string;
}

export interface Transaction {
    id: number;
    type: string;
    name: string;
    date: string;
    time: string;
    money: string;
    success: string;
}
export interface TransactionDetails {
    when: string;
    details: Transaction[];
}