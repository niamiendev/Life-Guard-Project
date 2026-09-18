export type Profile = {
    username: string,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    address: string,
    phone_number: string,
    blood_type: string
}

export type Token = {
    access:string,
    refresh:string
}