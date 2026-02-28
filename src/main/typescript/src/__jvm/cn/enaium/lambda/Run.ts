declare const Java: {
  type(className: string): Run
}

interface Run {
  new (run: () => void): {}
}

const Run = Java.type('cn.enaium.lambda.Run')
export { Run }
export default Run
