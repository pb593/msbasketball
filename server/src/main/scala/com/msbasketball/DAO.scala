package com.msbasketball

import slick.driver.H2Driver.api._
import slick.jdbc.meta._

import scala.concurrent.Await
import scala.concurrent.duration.Duration

import scala.concurrent.ExecutionContext.Implicits.global

/**
  * Created by pb593 on 01/04/2017.
  */
class DAO {

  val events = TableQuery[Events]
  val participants = TableQuery[Participants]
  val signups = TableQuery[Signups]

  val db = Database.forConfig("h2mem1")

  db.run((events.schema ++ participants.schema ++ signups.schema).create)

  db.run(MTable.getTables).onSuccess { case s => println(s"DB Created: $s") }


  def getAllEvents: List[Event] = {
    /*
    val query = for (e <- events; sgn <- signups if e.id == sgn.eventId)
            yield (e.id, e.datetime, e.fullPrice, sgn.participantId, sgn.status)

    Await.result(db.run(query.result).map(seq => seq.map(tuple => Event(tuple._1, tuple._2, tuple._3, tuple._4))), Duration.Inf)
    */
    Nil
  }

  def getAllPariticipants: List[Participant] = {
    /*Await.result(db.run(participants.result).map(seq => seq.map(tuple => Participant(tuple._1, tuple._2, tuple._3))),
      Duration.Inf).toList
      */
    Nil
  }

  def addNewParticipant(p: Participant): Int = {
    //participants += p
    0

  }

  def addNewEvent(e: Event): Int = {
    0
  }


}
