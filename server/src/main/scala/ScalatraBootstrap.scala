import com.msbasketball._
import org.scalatra._
import javax.servlet.ServletContext

class ScalatraBootstrap extends LifeCycle {
  override def init(context: ServletContext) {
    context.mount(new BusinessControllerV1, "/v1/*")
  }
}
