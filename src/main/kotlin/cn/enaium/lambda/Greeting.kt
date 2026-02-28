package cn.enaium.lambda

/**
 * @author Enaium
 */
class Greeting(run: () -> String) {
    init {
        println("Greeting: ${run()}")
    }
}