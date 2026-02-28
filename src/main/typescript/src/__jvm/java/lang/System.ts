declare const Java: {
  type(className: string): System
}
interface System {
  out: {
    println(message: string): void
  }
  err: {
    println(message: string): void
  }
}
const System = Java.type('java.lang.System')
export { System }
export default System
