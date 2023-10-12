import React from 'react'
import Footer from '../components/Footer'

const AllPractices = () => {
 return (
  <div className="MalpraticeHolder">
   {/* <Header /> */}
   <div className="MalpraticeInner">
    <div className="TextHolder">
     <h1 className="MainHeading">Our Expertise</h1>

     <div className="ImageTextHolder">
      <p className="TextPassage">
       Navigating the intricate maze of personal injury law requires expertise.
       At The Levin Firm in Philadelphia, our specialization encompasses a
       diverse range of cases, each one unique. Our dedication to justice and
       our clients' rights propels us forward.
      </p>
     </div>

    <h4 className="MainHeading">Brain Injury Attorney</h4>
    <p className="TextPassage">
        Addressing the intricate concerns of traumatic brain injuries, ensuring justice for victims and their families.
    </p>

    <h4 className="MainHeading">Burn Injury Attorney</h4>
    <p className="TextPassage">
        Providing crucial representation for those suffering from severe burns due to negligence or intentional harm.
    </p>

    <h4 className="MainHeading">Civil Rights & Police Brutality</h4>
    <p className="TextPassage">
        Defending the rights of those who've experienced unwarranted aggression or prejudice by the hands of authority.
    </p>

    <h4 className="MainHeading">Claims Against Servers & Dram Shop Cases</h4>
    <p className="TextPassage">
        Upholding the rights of individuals harmed due to negligence in alcohol service.
    </p>

    <h4 className="MainHeading">Construction Accidents & Injury</h4>
    <p className="TextPassage">
        Ensuring that workers and bystanders injured on construction sites receive the rightful compensation.
    </p>

    <h4 className="MainHeading">Insurance & Bad Faith Claims</h4>
    <p className="TextPassage">
        Holding insurance companies accountable when they fail to honor their obligations.
    </p>

    <h4 className="MainHeading">Legal Malpractice</h4>
    <p className="TextPassage">
        When trusted legal advisors falter, we ensure they're held accountable.
    </p>

    <h4 className="MainHeading">Medical Malpractice</h4>
    <p className="TextPassage">
        Advocating for victims of negligence within the medical community, from misdiagnoses to surgical mishaps.
    </p>

    <h4 className="MainHeading">Motor Vehicle Accidents</h4>
    <p className="TextPassage">
        Offering rigorous representation for victims of vehicular accidents, pushing for fair settlements and justice.
    </p>

    <h4 className="MainHeading">Premises Liability</h4>
    <p className="TextPassage">
        Championing the rights of those injured due to unsafe conditions on someone else's property.
    </p>

    <h4 className="MainHeading">Product Liability</h4>
    <p className="TextPassage">
        Ensuring companies are held accountable for defective products that harm consumers.
    </p>

    <h4 className="MainHeading">Trucking Accidents</h4>
    <p className="TextPassage">
        Representing those adversely affected by large truck incidents, seeking justice for their injuries and losses.
    </p>

    <h4 className="MainHeading">Uber & Lyft Accidents</h4>
    <p className="TextPassage">
        Serving both passengers and drivers involved in rideshare accidents, aiming for a just resolution.
    </p>

    <h4 className="MainHeading">Victims of Crimes</h4>
    <p className="TextPassage">
        Offering a legal lifeline to those wronged by criminal actions, ensuring their voices are heard.
    </p>

    <h4 className="MainHeading">Workplace Accidents</h4>
    <p className="TextPassage">
        Advocating for workers injured on the job, making sure they get the compensation they're entitled to.
    </p>

    <h4 className="MainHeading">Wrongful Deaths</h4>
    <p className="TextPassage">
        Providing compassionate counsel to families grappling with the untimely death of a loved one due to another's negligence.
    </p>

    <ul>
        <li className="TextPassage">Philadelphia Brain Injury Attorney</li>
        <li className="TextPassage">Philadelphia Burn Injury Attorney</li>
        <li className="TextPassage">Philadelphia Civil Rights & Police Brutality Lawyer</li>
        <li className="TextPassage">Philadelphia Claims Against Servers & Dram Shop Cases Attorney</li>
        <li className="TextPassage">Philadelphia Construction Accidents & Injury Lawyer</li>
        <li className="TextPassage">Philadelphia Insurance & Bad Faith Claims Attorney</li>
        <li className="TextPassage">Philadelphia Legal Malpractice Lawyer</li>
        <li className="TextPassage">Philadelphia Medical Malpractice Attorney</li>
        <li className="TextPassage">Philadelphia Motor Vehicle Accidents Lawyer</li>
        <li className="TextPassage">Philadelphia Premises Liability Attorney</li>
        <li className="TextPassage">Philadelphia Product Liability Lawyer</li>
        <li className="TextPassage">Philadelphia Trucking Accidents Attorney</li>
        <li className="TextPassage">Philadelphia Uber & Lyft Accidents Lawyer</li>
        <li className="TextPassage">Philadelphia Victims of Crimes Attorney</li>
        <li className="TextPassage">Philadelphia Workplace Accidents Lawyer</li>
        <li className="TextPassage">Philadelphia Wrongful Deaths Attorney</li>
    </ul>
    </div>

    <div className="InputSegment">
     <p className="RedText">FOR CONSULTATION CALL (215) 599-1400</p>
     <input placeholder="Full Name" className="InputField" />

     <input placeholder="Email" className="InputField" />

     <input placeholder="Phone" className="InputField" />

     <input placeholder="Phone" className="InputField" />

     <textarea
      id="message"
      name="message"
      placeholder="Message"
      rows="6"
      cols="40"
      className="InputFieldMsg"
     />

     <button className="SubmitButton">Submit</button>
    </div>
   </div>
   <Footer />
  </div>
 )
}

export default AllPractices
