plugins {
    application
    kotlin("jvm") version "2.3.10"
    id("com.gradleup.shadow") version "9.3.0+"
}

group = "cn.enaium"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.graalvm.polyglot:polyglot:25.0.2")
    implementation("org.graalvm.polyglot:js:25.0.2")
    testImplementation(kotlin("test"))
}

application {
    mainClass = "cn.enaium.MainKt"
}

kotlin {
    jvmToolchain(25)
}

tasks.test {
    useJUnitPlatform()
}

tasks.shadowJar {
    dependencies {
        exclude(dependency("org.graalvm.js:js"))
    }
}