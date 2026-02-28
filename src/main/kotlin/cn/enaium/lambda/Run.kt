package cn.enaium.lambda

/**
 * @author Enaium
 */
class Run(run: () -> Unit) {
    init {
        run()
    }
}