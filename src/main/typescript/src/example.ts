import { System } from '!/java/lang/index' // Method 1: Importing the entire System class
import Random from '!/java/util/Random' // Method 2: Importing the Random class directly

export const main = () => {
  System.out.println('Hello, JVM with TypeScript!')
  System.err.println(`Next Int: ${new Random().nextInt(100)}`)
}
