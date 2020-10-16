import Buyable from '../domain/Buyable';

export default class Cart {
    _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sumPrices(): number {
        const items: Buyable[] = this.items;
        let sum: number = 0;
        for (let item of items) {
            sum += item.price;
        }
        return sum;
    }

    sumPricesWithBonus(bonus: number): number {
        const items: Buyable[] = this.items;
        let sum: number = 0;
        for (let item of items) {
            sum += item.price;
        }
        let ourBonus: number =  (sum / 100) * bonus;
        return sum - ourBonus;
    }

    deleteItem(id: number): void {
        const items: Buyable[] = this.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                this._items.splice(i, 1);
                break;
            }
        }
    }
}