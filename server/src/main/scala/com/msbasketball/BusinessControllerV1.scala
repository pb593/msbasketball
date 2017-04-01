package com.msbasketball

import java.util.{Date, UUID}

import org.joda.time.DateTime
import org.json4s.{DefaultFormats, Formats}
import org.scalatra.json.JacksonJsonSupport
import org.json4s.ext.{EnumNameSerializer, JavaTypesSerializers, JodaTimeSerializers}

/**
  * Created by pb593 on 01/04/2017.
  */
class BusinessControllerV1 extends MsbasketballStack with JacksonJsonSupport {

  // Sets up automatic case class to JSON output serialization, required by
  // the JValueResult trait.
  protected implicit lazy val jsonFormats: Formats = DefaultFormats ++
                                                      JavaTypesSerializers.all ++
                                                      JodaTimeSerializers.all + new EnumNameSerializer(Status)

  // Before every action runs, set the content type to be in JSON format.
  before() {
    contentType = formats("json")
  }

  get("/events") {
    List(
      Event(DateTime.now, 1000123, 50.00),
      Event(DateTime.now, 12378132, 50.00),
      Event(DateTime.now, 15187236, 50.00)
    )
  }

  get("/participants") {
    Participant("Pavel Berkovich", 61872312, 21)
  }

  get("/signups") {
    Signup(12387123, 123132, Status.Out)
  }

}
