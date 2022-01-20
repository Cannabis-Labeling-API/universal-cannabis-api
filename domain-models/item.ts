export interface Item {
    name: string
    brand: string
    metrcId?: string
}

export interface ItemOpts extends Item {}


export class Item implements Item {
    constructor(opts?: ItemOpts) {
        if (!opts) {
            return;
        }
        this.metrcId = opts.metrcId;
        this.name = opts.name;
        this.brand = opts.brand;
    }

    addMetrcId(metrcId: string): void {
        this.metrcId = metrcId;
    }
}