declare const Java: {
  type(className: string): {
    new (): {
      nextInt(bound: number): number
    }
  }
}
const Random = Java.type('java.util.Random')
export { Random }
export default Random
