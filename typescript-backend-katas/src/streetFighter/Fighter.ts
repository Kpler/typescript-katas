export class Fighter {
    id: number
    firstname: string
    lastname?: string | null
    country?: string | null

    constructor(id: number, firstname: string, lastname?: string | null, country?: string | null) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
    }
}