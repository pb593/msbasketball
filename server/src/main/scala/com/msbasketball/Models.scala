package com.msbasketball

import java.util.UUID

import org.joda.time.DateTime

/**
  * Created by pb593 on 01/04/2017.
  */

// Status case object
object Status extends Enumeration {
  val In, Out, Waiting, PendingOut = Value
}

// other business entities
case class Event (datetime: DateTime, id: Integer, fullPrice: Double)
case class Participant(name: String, id: Integer, balance: Double)
case class Signup(userId: Integer, eventId: Integer, status: Status.Value)
