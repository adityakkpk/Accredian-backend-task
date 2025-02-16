export interface Referral {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateReferralInput {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface ErrorResponse {
    status: number;
    message: string;
}