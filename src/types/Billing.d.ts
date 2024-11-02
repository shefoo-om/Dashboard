export interface InvoicesInformationDetails {
    id: number;
    date: string;
    invoice_number: string;
    amount: number;
}
export interface BillingInformationDetails {
    id: number;
    name: string;
    company: string;
    email: string;
    vatNumber: string;
}

export interface Transaction {
    id: number;
    name: string;
    date: string;
    time: string;
    meridiem: "AM" | "PM";
    money: string;
    success: "done" | "failed" | "pending";
}
export interface TransactionDetails {
    when: string;
    details: Transaction[];
}