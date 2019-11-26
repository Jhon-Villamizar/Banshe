export class Client {
    constructor(id = null, nit = null, name = '', address = '', phone = '', creditLimit = null, availableCredit = null, visitPercentage = null, description = '', countryId = null, stateId = null, cityId = null) {
        this.id = id,
        this.nit = nit,
        this.name = name,
        this.address = address,
        this.phone = phone,
        this.creditLimit = creditLimit,
        this.availableCredit = availableCredit,
        this.visitPercentage = visitPercentage,
        this.description = description,
        this.countryId = countryId,
        this.stateId = stateId,
        this.cityId = cityId
    }
    id: number;
    nit: number;
    name: string;
    address: string;
    phone: string;
    creditLimit: number;
    availableCredit: number;
    visitPercentage: number;
    description: string;
    countryId: number;
    stateId: number;
    cityId: number;



}
