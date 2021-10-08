package scala.cli.commands

import caseapp._
import coursier.cache.CacheLogger
import coursier.cache.loggers.{FallbackRefreshDisplay, ProgressBarRefreshDisplay, RefreshLogger}

import scala.build.Logger
import scala.build.blooprifle.BloopRifleLogger
import scala.build.errors.BuildException
import scala.scalanative.{build => sn}

// format: off
final case class LoggingOptions(
  @Group("Logging")
  @HelpMessage("Increase verbosity (can be specified multiple times)")
  @Name("v")
    verbose: Int @@ Counter = Tag.of(0),
  @Group("Logging")
  @HelpMessage("Decrease verbosity")
  @Name("q")
    quiet: Boolean = false,
  @Group("Logging")
  @HelpMessage("Use progress bars")
    progress: Option[Boolean] = None
) {
  // format: on

  lazy val verbosity = Tag.unwrap(verbose) - (if (quiet) 1 else 0)

  lazy val logger: Logger =
    new Logger { logger =>
      def message(message: => String) =
        if (verbosity >= 0)
          System.err.println(message)
      def log(message: => String) =
        if (verbosity >= 1)
          System.err.println(message)
      def log(message: => String, debugMessage: => String) =
        if (verbosity >= 2)
          System.err.println(debugMessage)
        else if (verbosity >= 1)
          System.err.println(message)
      def debug(message: => String) =
        if (verbosity >= 2)
          System.err.println(message)

      def log(ex: BuildException): Unit =
        if (verbosity >= 0)
          System.err.println(ex.getMessage)
      def exit(ex: BuildException): Nothing =
        if (verbosity < 0)
          sys.exit(1)
        else if (verbosity == 0) {
          System.err.println(ex.getMessage)
          sys.exit(1)
        }
        else
          throw new Exception(ex)

      def coursierLogger =
        if (quiet)
          CacheLogger.nop
        else if (progress.getOrElse(coursier.paths.Util.useAnsiOutput()))
          RefreshLogger.create(ProgressBarRefreshDisplay.create())
        else
          RefreshLogger.create(new FallbackRefreshDisplay)

      def bloopRifleLogger =
        new BloopRifleLogger {
          def debug(msg: => String) =
            if (verbosity >= 3)
              logger.debug(msg)
          def error(msg: => String, ex: Throwable) =
            logger.log(s"Error: $msg ($ex)")
          def bloopBspStdout =
            if (verbosity >= 2) Some(System.err)
            else None
          def bloopBspStderr =
            if (verbosity >= 2) Some(System.err)
            else None
          def bloopCliInheritStdout = verbosity >= 3
          def bloopCliInheritStderr = verbosity >= 3
        }

      def scalaNativeLogger: sn.Logger =
        new sn.Logger {
          def trace(msg: Throwable) = ()
          def debug(msg: String)    = logger.debug(msg)
          def info(msg: String)     = logger.message(msg)
          def warn(msg: String)     = logger.log(msg)
          def error(msg: String)    = logger.log(msg)
        }

      // Allow to disable that?
      def compilerOutputStream = System.err
    }

}

object LoggingOptions {
  lazy val parser: Parser[LoggingOptions]                           = Parser.derive
  implicit lazy val parserAux: Parser.Aux[LoggingOptions, parser.D] = parser
  implicit lazy val help: Help[LoggingOptions]                      = Help.derive
}
