package cn.enaium.lambda

/**
 * @author Enaium
 */
class Say(run: (String) -> Unit) {
    init {
        run("Hello world!")
    }
}