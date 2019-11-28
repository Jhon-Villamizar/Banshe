export class Visit {
    constructor(id = null, date = null, sellerId = null, net = null, visitTotal = null, description = '', clientId = null) {
        this.id = id,
        this.date = date,
        this.sellerId = sellerId,
        this.net = net,
        this.visitTotal = visitTotal,
        this.description = description,
        this.clientId = clientId
    }
    id: number;
    date: Date;
    sellerId: number;
    net: number;
    visitTotal: number;
    description: string;
    clientId: number;
}
