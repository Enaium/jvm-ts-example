package cn.enaium

import org.graalvm.polyglot.Context

/**
 * @author Enaium
 */
fun main() {
    Context.newBuilder("js").allowAllAccess(true).build().use {
        it.eval("js", {}::class.java.getResource("/main.js").readText())
    }
}