package com.msbasketball

import com.msbasketball.Status.Status
import org.joda.time.DateTime

/**
  * Created by pb593 on 01/04/2017.
  */

// Status case object
object Status extends Enumeration {
  type Status = Value
  val In, Out, Waiting, PendingOut = Value
}

// other business entities
case class Event (datetime: DateTime, id: Int, fullPrice: Double, signUps: List[Signup])
case class Signup(participantId: Int, status: Status)

case class Participant(name: String, id: Int, balance: Double)

