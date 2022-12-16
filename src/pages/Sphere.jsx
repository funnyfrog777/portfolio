import React from "react";
import '../App.css';
import '../styles/Sphere.css';
import '../Color.css';
import { Link } from "react-router-dom";
  
const Sphere = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <Link to="/portfolio#Iteration" className="go-back-link small-font"><i>&#8592; go back to home page</i></Link>
        <h1>Sphere</h1>
        <img className="img-display" src={process.env.PUBLIC_URL+"/images/sphere-project.svg"}/>
      </header>
      <body className='App-body'>
        <div className="body left-align">
          <div className="Project-Overview">
            <h2>Project Overview</h2>
            <p>
              The goal of this project was to design a prototype of an interface for a startup.
              <br/><br/>
              The purpose of this project is to gain experience going through a feedback cycle and reiterate a prototype based on the feedback. This ensures that the product that is being made actually serves the purpose of its creation.
            </p>
          </div>
          <br/>
          <h2>Background</h2>
          <p>This group project was built with Tianran, Mehek, and Joyce. This interface we designed is for employees who take courses through Sphere. It allows users to navigate easily between livestreams, assignments, and networking.</p>
          <p><b className="orange">Overview: </b><a className="web-link" href="https://www.ycombinator.com/companies/sphere" target="_blank" rel="noopener noreferrer">Sphere</a> is a online education platform that allows employors to assign employees 3-week livestream courses instructed by experts in the field. Through Sphere, employees can learn functional skills to apply to their work, submit online assignments, and network with fellow students and instructors.</p>
          <p><b className="blue">Users: </b>Mobile</p>
          <p><b className="pink">Type of interface: </b>Employees who take courses through Sphere</p>
          <p><b className="purple">Impact: </b>Allow users to navigate easily between livestreams, assignments, and networking</p>
          <br/>
          <h2>Brainstorming</h2>
          <p>Each of our four group members did 3 sketches of 3 main screens for the app:</p>
          <ol>
            <li>Home page <i>(left column)</i></li>
            <li>Course overview page <i>(middle column)</i></li>
            <li>Networking/chat page <i>(right column)</i></li>
          </ol>
          <div className="row">
            <img src={process.env.PUBLIC_URL+"/images/sphere/sketch1.png"}/>
            <img src={process.env.PUBLIC_URL+"/images/sphere/sketch2.jpeg"}/>
          </div>
          <div className="row">
            <img src={process.env.PUBLIC_URL+"/images/sphere/sketch3.jpeg"}/>
            <img src={process.env.PUBLIC_URL+"/images/sphere/sketch4.png"}/>
          </div>
          <h3>Low-Fidelity Mockup</h3>
          <p>These sketches were combined to create one low fidelity mockup of the main app pages.</p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/sphere/lofi.png"}/>
          <h3>High-Fidelity Prototype</h3>
          <p>We then expanded upon the low fidelity prototype to create our first functioning high fidelity prototype.</p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/sphere/hifi_1.png"}/>
          <br/>
          <h2>Addressing Feedback Summary</h2>
          <p>We were able to get feedback from our peers. Below are our adjustments based on that feedback.</p>
          <div className="row">
            <div>
              <h3>Homepage</h3>
              <ul>
                <li><b className="pink">Feedback</b>: Use different color to distinguish chat-related notification from course related notification</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Move message notification to the nav bar, so only course related notifications show up on the homepage</li></ul>
                <br/>
                <li><b className="pink">Feedback</b>: The wording of "2/3 In progress" is too vague, since users don't know if it is referring to total number of courses or assignments</li>
                <ul className="bullet">
                  <li><b className="green-yellow">Our Solution</b>: Change the wording to "1/3 courses completed"</li>
                  <li><b className="green-yellow">Our Solution</b>: Add shadows to make it clearer that the dark purple signifies the completed portion</li>
                </ul>
                <br/>
                <li><b className="pink">Feedback</b>: Rather than a list of things in progress, the user would more likely want to directly see a list of due dates</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Replace the "In Progress" section with "Today", which provides a list of due dates</li></ul>
                <br/>
              </ul>
            </div>
            <img className="general-image" src={process.env.PUBLIC_URL+"/images/sphere/homepagev1,2.png"}/>
          </div>
          <br/>
          <div className="row">
            <div>
              <h3>Navigation Bar</h3>
              <ul>
                <li><b className="pink">Feedback</b>: It is a bit unclear that the second icon leads to "my courses"</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Change the icon to an open book</li></ul>
                <br/>
                <li><b className="pink">Feedback</b>: Too much purple in the nav bar might distract attention from the main page</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Restyle the nav bar background color to white and use icon color to indicate selection</li></ul>
                <br/>
              </ul>
            </div>
            <img className="general-image" src={process.env.PUBLIC_URL+"/images/sphere/navbarv1,2.png"}/>
          </div>
          <br/>
          <div className="row">
            <div>
              <h3>Course Page</h3>
              <ul>
                <li><b className="pink">Feedback</b>: It can be very convenient if the user can directly enter into the course livestream from the course page</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Add "Class is Streaming. Join now!" button that appears when the course is streaming</li></ul>
                <br/>
                <li><b className="pink">Feedback</b>: Too much purple in the nav bar might distract attention from the main page</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Restyle the nav bar background color to white and use icon color to indicate selection</li></ul>
                <br/>
                <li><b className="pink">Feedback</b>: The purple background of the overview blurb is similar to clickable buttons, which can be misleading for the users</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Change the background of the overview blurb to grey to make it look less interactable</li></ul>
                <br/>
                <li><b className="pink">Feedback</b>: The "Assignments" section can be made clearer by creating more distinction between items that are "not started" and "in progress</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Since it can be messy to define "not started" and "in progress", we combine these two conditions into "incomplete"</li></ul>
                <br/>
                <li><b className="pink">Feedback</b>: The chat page contains chats with classmates, but where can users start chat with a classmate?</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Add classmate profiles to the end of the course page</li></ul>
                <br/>
              </ul>
            </div>
            <img className="general-image" src={process.env.PUBLIC_URL+"/images/sphere/coursepagev1,2.png"}/>
          </div>
          <br/>
          <div className="row">
            <div>
              <h3>Chat Pages</h3>
              <ul>
                <li><b className="pink">Feedback</b>: It can be easier for the users to conduct course-related conversations if the they can access the course page directly from the chat page</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Add link to course page from the "start a conversation" prompt</li></ul>
                <br/>
                <li><b className="pink">Feedback</b>: The users might want to be able to see who are instructors and who are students from the chat pages</li>
                <ul className="bullet">
                  <li><b className="green-yellow">Our Solution</b>: Add star next to instructor names in both the chat page and course page</li>
                  <li><b className="green-yellow">Our Solution</b>: Add "student" or "instructor" under the person's name in the dialogue page</li>
                </ul>
                <br/>
                <li><b className="pink">Feedback</b>: Rather than a list of things in progress, the user would more likely want to directly see a list of due dates</li>
                <ul className="bullet"><li><b className="green-yellow">Our Solution</b>: Replace the "In Progress" section with "Today", which provides a list of due dates</li></ul>
                <br/>
              </ul>
            </div>
            <img className="general-image" src={process.env.PUBLIC_URL+"/images/sphere/chatpagev1,2.png"}/>
          </div>
          <br/>
        </div>
        <div className="body left-align">
        <h2>Redesign</h2>
          <p>Using feedback from studio, we made adjustments to our prototype.</p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/sphere/hifi_2.png"}/>
          <br/>
          <h2>Additional User Testing</h2>
          <p>We submitted our revised prototype to UserTesting.com and received feedback from 3 testers. We provided them with some instructions as well as post-test questions to get insight on their opinions about the interface.</p>
          <p><b className="blue">Task Instructions: </b>Find out who the instructor for ENGN1010 is and send them a message.</p>
          <p><b className="blue">Post Test Questions: </b></p>
          <ol className="list">
            <li className="pink">What frustrated you most about this app?</li>
            <ol>
              <li >I would say the lack of labels for the icons, which made navigation more exploratory rather than self-explanatory.</li>
              <li >Lack of words under the four icons at the bottom of the screen.</li>
              <li >Nothing, everything was easy to find and use.</li>
            </ol>
            <li className="pink">Were there any interactive elements that were not immediately intuitive to you?</li>
            <ol>
              <li>No. I believe the icons at the bottom were the only confusing part to me.</li>
              <li>All available functions worked well.</li>
              <li>No, everything was either self-explanatory/intuitive. Anyone who is used to using a computer/smartphone should quickly learn how to use this app.</li>
            </ol>
            <li className="pink">What did you like about the app?</li>
            <ol>
              <li>I like how you can navigate between icons using the links provided on each icon page (connectivity amongst the pages making navigation easier).</li>
              <li>The static menu on the bottom. Keeps the user from being lost.</li>
              <li>Very simple/clean/easy to use interface and design. I wish Canvas was like this.</li>
            </ol>
          </ol>
          <br/>
          <h2>Analysis of Results</h2>
          <h3 className="blue">User Behavior</h3>
          <ul className="list">
            <li>All users completed task successfully</li>
            <li>Users found different ways to navigate to the chat page, with some using the nav bar directly and others accessing it from the course page</li>
            <li>One user was confused about task completion, unsure if they were supposed to be able to actually send a message</li>
            <li>One user was confused about the company name listed under the courses in "my courses" page. They seem to expect instructor name rather than company name.</li>
          </ul>
          <h3 className="pink">Feedback</h3>
          <ul className="list">
            <li>All users have concerns about lack of labels on navigation bar and confusion about the book icon</li>
            <li>One user mentioned lack of labels on chat page for distinguishing instructors from students. They interpreted the star icons as "favorite", instead of instructor.</li>
            <li>All thought the rest of the UI is simple and intuitive</li>
          </ul>
          <h3 className="green-yellow">Potential Changes</h3>
          <ul className="list">
            <li>Add labels for underneath icons in the navigation bar</li>
            <li>Label instructors on the chat page through words instead of icons</li>
            <li>Unify time notation to regular time instead of military time</li>
            <li>Add link from livestream page to course page</li>
            <li>Display instructor names on my courses page, instead of the user's company name</li>
          </ul>
          <br/>
          <h2>Conclusion</h2>
          <p>This was one of my favorite projects because I was able to do it in a group, and I learned a lot about different ways to address user feedback from my peers. I also found that brainstorming ideas with peers led to better quality ideas and prototypes.</p>
        </div>
      </body>
      <footer className='App-footer'>
        
      </footer>
    </div>
  );
};
  
export default Sphere;