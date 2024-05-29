type StackMap<Element> = Map<number, Element>

class Stack<Element> {
  private readonly elements: StackMap<Element>
  private topIndex: number

  constructor() {
    this.elements = new Map()
    this.topIndex = 0
  }

  get isEmpty(): boolean {
    return this.elements.size === 0
  }

  push(element: Element): void {
    const index = this.topIndex + 1
    this.elements.set(index, element)
    this.topIndex = index
  }

  pop(): void {
    this.elements.delete(this.topIndex)
    if (!this.isEmpty) this.topIndex--
  }

  peek(): Element {
    return this.elements.get(this.topIndex)
  }

  print(): StackMap<Element> {
    return this.elements
  }
}
