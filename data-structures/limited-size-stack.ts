import { Stack } from './stack'

class LimitedSizeStack<Element> extends Stack<Element> {
  private readonly sizeLimit: number

  constructor(sizeLimit: number) {
    super()

    this.sizeLimit = sizeLimit
  }

  get isFull(): boolean {
    return this.elements.size === this.sizeLimit
  }

  push(element: Element): void {
    if (this.isFull) return

    super.push(element)
  }
}
