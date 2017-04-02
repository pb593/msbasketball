package com.msbasketball

import com.msbasketball.Status.Status
import org.joda.time.DateTime
import slick.driver.H2Driver.api._
import slick.lifted.ForeignKeyQuery
import com.github.tototoshi.slick.H2JodaSupport._

/**
  * Created by pb593 on 01/04/2017.
  */

class Events(tag: Tag) extends Table[(Int, DateTime, Double)](tag, "EVENTS") {

  def id: Rep[Int] = column[Int]("eventId", O.PrimaryKey, O.AutoInc)
  def datetime: Rep[DateTime] = column[DateTime]("datetime")
  def fullPrice: Rep[Double] = column[Double]("fullPrice")

  def *  = (id, datetime, fullPrice)

}

class Signups(tag: Tag) extends Table[(Int, Int, Status)](tag, "SIGNUPS") {

  implicit val statusEnumMapper = MappedColumnType.base[Status, String](
    e => e.toString,
    s => Status.withName(s)
  )

  def participantId: Rep[Int] = column[Int]("participantId")
  def eventId: Rep[Int] = column[Int]("eventId")
  def status: Rep[Status] = column[Status]("status")

  def * = (participantId, eventId, status)


  // FK relationship for events
  def event: ForeignKeyQuery[Events, (Int, DateTime, Double)] =
                                        foreignKey("EVENT_FK", eventId, TableQuery[Events])(_.id)
  // FK relationship for participants
  def participant: ForeignKeyQuery[Participants, (String, Int, Double)] =
                                        foreignKey("PARTICIPANT_FK", participantId, TableQuery[Participants])(_.id)

}

class Participants(tag: Tag) extends Table[(String, Int, Double)](tag, "PARTICIPANTS") {

  def name: Rep[String] = column[String]("name")
  def id: Rep[Int] = column[Int]("participantId", O.PrimaryKey, O.AutoInc)
  def balance: Rep[Double] = column[Double]("balance")

  def * = (name, id, balance)

}
