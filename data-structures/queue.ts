type QueueMap<Element> = Map<number, Element>

class Queue<Element> {
  private readonly elements: QueueMap<Element>
  private frontIndex: number
  private backIndex: number

  constructor() {
    this.elements = new Map()
    this.frontIndex = 0
    this.backIndex = 0
  }

  get isEmpty(): boolean {
    return this.elements.size === 0
  }

  enqueue(element: Element): void {
    this.elements.set(this.backIndex, element)
    this.backIndex++
  }

  dequeue(): void {
    this.elements.delete(this.frontIndex)
    this.frontIndex++
  }

  peek(): Element {
    return this.elements.get(this.frontIndex)
  }

  print(): QueueMap<Element> {
    return this.elements
  }
}
