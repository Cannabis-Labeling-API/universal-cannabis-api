import {Item} from "./item";

export interface Collection {
    items: Item[]
    metrcId?: string
}

export interface CollectionOpts extends Collection {}

export class Collection implements Collection {
    constructor(collectionOpts?: CollectionOpts) {
        if (!collectionOpts) {
            return;
        }
        this.metrcId = collectionOpts.metrcId;
        this.items = collectionOpts.items;
    }

    addMetrcIdToItems(metrcId: string): void {
        this.metrcId = metrcId;
        this.items.forEach(item => item.addMetrcId(metrcId));
    }
}