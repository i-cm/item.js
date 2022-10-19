class item {
  constructor (item, count, data = {
    id: 0
  }) {
    this.item = item
    this.count = count
    this.data = data
  }
  get() {
    return this.count == 1 ? `1 ${this.item}` : `${this.count} ${this.item}s`
  }
}
