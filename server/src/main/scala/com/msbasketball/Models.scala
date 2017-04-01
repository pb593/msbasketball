package com.msbasketball

import org.joda.time.DateTime

/**
  * Created by pb593 on 01/04/2017.
  */

// Status case object
object Status extends Enumeration {
  val In, Out, Waiting, PendingOut = Value
}

// other business entities
case class Event (datetime: DateTime, id: Integer, fullPrice: Double, signUps: List[Signup])
case class Signup(participantId: Integer, status: Status.Value)

case class Participant(name: String, id: Integer, balance: Double)

