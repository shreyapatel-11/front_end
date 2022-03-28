export interface Login{
    email: string;
    password: string
}

export interface ResponseData{
    success: boolean;
    error: string;
    token: string
}