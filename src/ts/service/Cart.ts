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
        let sum = items.reduce((sum, item) => sum + item.price, 0);
        return sum;
    }

    sumPricesWithBonus(bonus: number): number {
        let sum = this.sumPrices()
        let ourBonus = (sum / 100) * bonus;
        return sum - ourBonus;
    }

    deleteItem(id: number): void {
        const items: Buyable[] = this.items;
        const result = items.filter(item => item.id == id);
        const index = this._items.indexOf(result[0]);
        this._items.splice(index, 1);
    }
}