import { System } from '!/java/lang/index' // Method 1: Importing the entire System class
import Random from '!/java/util/Random' // Method 2: Importing the Random class directly
import Runnable from '!/java/lang/Runnable'
import { Greeting, Run } from '!/cn/enaium/lambda'
import Say from './__jvm/cn/enaium/lambda/Say'

export const main = () => {
  System.out.println('Hello, JVM with TypeScript!')
  System.err.println(`Next Int: ${new Random().nextInt(100)}`)
  new Run(() => {
    System.out.println('Running in a lambda!')
  })
  new Say((text) => {
    System.out.println(`Saying: ${text}`)
  })
  new Greeting(() => {
    return 'Hello, Greeting!'
  })
}
