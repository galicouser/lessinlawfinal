
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { CaseCards } from '../styled-components/HomePageStyles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const Verdicts = () => {

   return (

      <CaseCards>
         <div className="Toptext">
            Lessin Law is among the top personal injury firms nationwide, having
            successfully obtained some of the most substantial settlements and verdicts
            in the legal history of Pennsylvania and New Jersey. It enjoys widespread
            recognition as a preeminent legal firm in the United States when it comes
            to advocating for workers who have suffered injuries or lost their lives
            while on the job. Renowned for its ability to secure victories in
            challenging, high-profile cases, Lessin Law maintains an exceptional record
            in defending the rights of injured victims.
         </div>

         <div className="CardHolder">
            <div className="Cardlist1">
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Pike County Settlement</p>
                  <p className="descriptionText">
                     Williamsport - A confidential settlement was reached in a civil rights suit against the Pike County
                     Probation Department stemming from the death of a parolee, according to attorneys involved in the case.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>

               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Excessive force lawsuit costs township $25K </p>
                  <p className="descriptionText">
                     Kevin Efaw, 24 claimed that officers roughed him up and unleased a K9 on him while he was in handcuffs.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>

               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">$ 300K Verdict in Vehile Negligence Case</p>
                  <p className="descriptionText">
                     On Dec, 12, 2001, Jose Lopez, then 48 years old, was injured in a car accident with a vehicle driven by Thyrone G. Chevannes
                     , according to the plaintiff's attorney, Jeffrey R. Lessin. The collision took place at the intersection of 51st and Market streets in Philadelphia.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">$26 M</p>
                  <p className="descriptionText">
                     $26.550 million is being provided to former landscape service worker
                     David Williams, 32, because those responsible for maintaining his
                     company truck allegedly wouldn’t spend a few hundred dollars to replace
                     bald, dangerous tires linked to the sudden November 2011 rollover that
                     rendered the father of three young sons a quadriplegic, attorney Robert
                     J. Mongeluzzi and his team at Saltz, Mongeluzzi & Bendesky, P.C.
                     announced today. The settlement amount is the largest ever in a
                     Philadelphia County personal injury case.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Pennsylvania Super Lawyers</p>
                  <p className="descriptionText">
                     Congratulations! You will be published in the June 2007 issue Pennsylvania Super Lawyers magazine featuring the top 5%
                     of attorneys in the state, Pennsyvania Super Lawyers magazine will be distributed to attorneys in Pennsylvania and Delaware, nationwide to the lead counsel of Russell 3000 companies
                     and the ABA-accredited law libraries. Pennsylvania and Delaware attorneys will also appear in a special advertising section in the June 2007 issues of Philadelphia magazine. The publication will reach a combined audience of more than 535,000 readers.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>
            </div>

            <div className="Cardlist2">
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">$1.85 M Settlement Reached in Lawsuit Over Fatal Accident</p>
                  <p className="descriptionText">
                     A $1.85 million settlement was reached in the case of a Bangladeshi man who died from injuries
                     sustained in a New Jersey motor vehicle accident involving a Delaware River Port Authority police officers.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>

               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Six-Figure Settlement In 'Breakdancing' Slip-and-Fall Case</p>
                  <p className="descriptionText">
                     A $ 650,000 settlement has been reached in a case brought by a Southwest Philadelphia man who
                     broke his elbox after allegedly alipping on a wet floor while breakdancing in a Broad Street banquet hall
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Plaintiff Settles for $1.6 Million For Injuries from Defective Chair</p>
                  <p className="descriptionText">
                     The manufacturers of an office chair and the particle board used in it split the cost of a $1.6 million
                     settlement equally between them last week in Cioppi v. Bevco Precision Manufacturing Co.. Plaintiff Rosemary
                     Cioppi of Chalfont had asked far more than $50,000 plus interest, costs and attorney fees in her amended complaint.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>

               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Olympic Hopeful Awarded $1.5 Mil. for Car Accident Injuries</p>
                  <p className="descriptionText">
                     A Philadelphia jury was awarded $1.5 million to a 24-year-old wrestler who hoped to try out for the u.s Olympic
                     wrestling team but abandoned those plans after suffering multiple injuries in a car crash.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">The National Trial Lawyers</p>
                  <p className="descriptionText">
                     Congratulations! You have been selected to recieve this invitatiom
                     for membership into The National Trial Lawyers: Top 100 Trial Lawyers organization.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>
            </div>

            <div className="Cardlist3">
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Very High Rating in Both Legal Ability & Ethical Standards</p>
                  <p className="descriptionText">
                     Jeffrey Robert Lessin
                     <br />
                     The Distinguished Rating is earned a strenuous Peer Review process that in managed and monitored by the world's
                     most trusted legal resource. Martindale-Hubbell
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>

               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Federal Jury Awards $3.8 Mil. Verdict in Wrongful-Death Suit</p>
                  <p className="descriptionText">
                     A trial over a fatal accident on I-83 near York, PA. In which a car was thrust by a tractor-trailer over a jersey barrier to be struc head-on by another speeding truck has ended with a $3.8 million verdict in federal court for the family of the women who died in the crash.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>
               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Federal Jury Awards $3.8 Mil. Verdict in Wrongful-Death Suit</p>
                  <p className="descriptionText">
                     A trial over a fatal accident on I-83 near York, PA. In which a car was thrust by a tractor-trailer over a jersey barrier to be struc head-on by another speeding truck has ended with a $3.8 million verdict in federal court for the family of the women who died in the crash.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>

               <div className="displayCard">
                  <p className="titletext">VERDICTS AND SETTLEMENTS</p>
                  <p className="AmountText">Pickup broadsided utility van, injuring passenger</p>
                  <p className="descriptionText">
                     On Sept. 27, 2005, Plaintiff Kim L. Rous, a 24-year-old day laborer,was a passenger in the utility van that Sokhan Mey was driving westbound on Snyder Avenue, in south Philadelphia, when the van entered the 10th Street.
                  </p>
                  <div className="ShowMore">
                     <p className="readText">Read Story</p>
                     <ArrowRightAltIcon className="ArrowIcon" />
                  </div>
               </div>




            </div>
         </div>

         <div className="MainTextHolder">
            <div className="MainText">
               When faced with a challenging, prominent case that demands seasoned trial
               attorneys equipped with the expertise and capabilities to confront major
               corporations and insurers and emerge victorious, individuals affected by
               accidents and their loved ones seek assistance from Lessin Law.
            </div>
         </div>
         <Footer />
      </CaseCards>
   )
}
export default Verdicts