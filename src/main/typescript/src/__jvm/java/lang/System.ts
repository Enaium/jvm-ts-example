declare const Java: {
  type(className: string): System
}
const System = Java.type('java.lang.System')

interface System {
  out: {
    println(message: string): void
  }
  err: {
    println(message: string): void
  }
}
export { System }
export default System
