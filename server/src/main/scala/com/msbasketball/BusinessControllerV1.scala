package com.msbasketball

import org.joda.time.DateTime
import org.json4s.{DefaultFormats, Formats}
import org.scalatra.json.JacksonJsonSupport
import org.json4s.ext.{EnumNameSerializer, JavaTypesSerializers, JodaTimeSerializers}
import org.scalatra.CorsSupport

/**
  * Created by pb593 on 01/04/2017.
  */
class BusinessControllerV1 extends MsbasketballStack with JacksonJsonSupport with CorsSupport {

  // Sets up automatic case class to JSON output serialization, required by
  // the JValueResult trait.
  protected implicit lazy val jsonFormats: Formats = DefaultFormats ++
                                                      JavaTypesSerializers.all ++
                                                      JodaTimeSerializers.all + new EnumNameSerializer(Status)

  // allow CORS
  options("/*"){
    response.setHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));
  }

  // Before every action runs, set the content type to be in JSON format.
  before() {
    contentType = formats("json")
  }

  get("/events") {
    List(
      Event(DateTime.now, 1000123, 50.00, List(Signup(61872312, Status.In))),
      Event(DateTime.now, 12378132, 50.00, List(Signup(1231231, Status.PendingOut), Signup(61872312, Status.In))),
      Event(DateTime.now, 15187236, 50.00, List(Signup(1231231, Status.PendingOut)))
    )
  }

  get("/participants") {
    List(
      Participant("Pavel Berkovich", 61872312, 21),
      Participant("Evgeniy Grigoriev", 1231231, 21)
    )
  }

}
