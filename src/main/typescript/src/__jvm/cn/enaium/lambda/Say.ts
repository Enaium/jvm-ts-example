declare const Java: {
  type(className: string): Say
}

interface Say {
  new (run: (text: string) => void): {}
}

const Say = Java.type('cn.enaium.lambda.Say')
export { Say }
export default Say
