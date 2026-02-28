declare const Java: {
  type(className: string): Greeting
}

interface Greeting {
  new (run: () => string): {}
}

const Greeting = Java.type('cn.enaium.lambda.Greeting')
export { Greeting }
export default Greeting
