export class Seller {
    constructor(id = null, name = '', cc = null) {
        this.id = id,
        this.name = name,
        this.cc = cc
    }
    id: number;
    name: string;
    cc: number;
}
