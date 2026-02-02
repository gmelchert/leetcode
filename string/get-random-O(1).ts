class RandomizedSet {
    private values: number[]
    private indexMap: Map<number, number>

    constructor() {
        this.values = []
        this.indexMap = new Map()
    }

    insert(val: number): boolean {
        if (this.indexMap.has(val)) {
            return false
        }

        this.values.push(val)
        this.indexMap.set(val, this.values.length - 1)
        return true
    }

    remove(val: number): boolean {
        if (!this.indexMap.has(val)) {
            return false
        }

        const indexToRemove = this.indexMap.get(val)!
        const lastValue = this.values[this.values.length - 1]

        // move o último para o lugar do removido
        this.values[indexToRemove] = lastValue
        this.indexMap.set(lastValue, indexToRemove)

        // remove o último
        this.values.pop()
        this.indexMap.delete(val)

        return true
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.values.length)
        return this.values[randomIndex]
    }
}
