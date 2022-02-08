export interface Department{
    find: any;
    id: number,
    name: string
}
export interface Employee{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    mobile: number,
    gender: boolean,
    date: string,
    department: number
}