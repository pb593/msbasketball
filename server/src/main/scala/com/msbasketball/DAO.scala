package com.msbasketball

import slick.driver.H2Driver.api._
import slick.jdbc.meta._

import scala.concurrent.{Await, Future}
import scala.concurrent.duration.Duration
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.Success

/**
  * Created by pb593 on 01/04/2017.
  */
class DAO {

  val events = TableQuery[Events]
  val participants = TableQuery[Participants]
  val signups = TableQuery[Signups]

  val db = Database.forConfig("h2mem1")

  db.run((events.schema ++ participants.schema ++ signups.schema).create)


  def getAllEvents: Future[List[Event]] = {

    val query = for {
      (evt, sgn) <- events join signups on (_.id == _.eventId)
    } yield (evt.datetime, evt.id, evt.fullPrice, sgn.participantId, sgn.status)


    val q = for {
      evt <- events
      sgn <- signups if evt.id === sgn.eventId
    } yield (evt.datetime, evt.id, evt.fullPrice, sgn.participantId, sgn.status)

    val action = q.result

    val future = db.run(action).map{
      rows => rows.map{
        r =>
      }
    }




  }

  def getAllPariticipants: Future[List[Participant]] = {
    val action = participants.result

    val future = db.run(action).map {
      returnedParticipants => returnedParticipants.map(
        p => Participant(p._1, p._2, p._3, p._4)
      ).toList
    }

    future
  }

  def addNewParticipant(p: Participant): Future[Participant] = {

    val insertQueryAction = (participants returning
                  participants.map(pi => (pi.name, pi.email, pi.id, pi.balance))) += (p.name, p.email, p.id, p.balance)

    val future = db.run(insertQueryAction).map{
      returnedParticipant => Participant(returnedParticipant._1, returnedParticipant._2, returnedParticipant._3, returnedParticipant._4)
    }

    future
  }

  def addNewEvent(e: Event): Int = {

    val insertEventAction = events += (e.id, e.datetime, e.fullPrice)
    val insertSingupsAction = signups ++= e.signUps.map(s => (s.participantId, e.id, s.status))

    db.run(insertEventAction.andThen(insertSingupsAction))

    0
  }


}
