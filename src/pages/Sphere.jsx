import React from "react";
import '../App.css';
import '../Color.css';
import { Link } from "react-router-dom";
  
const Sphere = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <Link to="/" className="go-back-link small-font"><i>&#8592; go back to home page</i></Link>
        <h1>Sphere &#40;in-progress&#41;</h1>
        <img className="img-display" src={process.env.PUBLIC_URL+"/images/sphere-project.svg"}/>
      </header>
      <body className='App-body'>
        <div className="body left-align">
          <h2>Project Overview</h2>
          <p><a className="web-link" href="https://www.ycombinator.com/companies/sphere" target="_blank" rel="noopener noreferrer">Sphere</a> is a online education platform that allows employors to assign employees 3-week livestream courses instructed by experts in the field. Through Sphere, employees can learn functional skills to apply to their work, submit online assignments, and network with fellow students and instructors.</p>
          <br/>
          <h2>Background</h2>
          <p>This group project was built with Tianran, Mehek, and Joyce. This interface we designed is for employees who take courses through Sphere. It allows users to navigate easily between livestreams, assignments, and networking.</p>
          <br/>
          <h2>Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Lo-fi Prototype</h3>
          <h3>Hi-fi Prototype</h3>
          <br/>
          <h2>Feedback</h2>
          <h3>Homepage</h3>
          <ul>
            <li>Use different color to distinguish chat-related notification from course related notification</li>
            <li>Move message notification to the nav bar, so only course related notifications show up on the homepage</li>
            <li>The wording of "2/3 In progress" is too vague, since users don't know if it is referring to total number of courses or assignments</li>
            <li>Rather than a list of things in progress, the user would more likely want to directly see a list of due dates</li>
          </ul>
          <h3>Navigation Bar</h3>
          <ul>
            <li>It is a bit unclear that the second icon leads to "my courses"</li>
          </ul>
          <h3>Course Page</h3>
          <ul>
            <li>It can be very convenient if the user can directly enter into the course livestream from the course page</li>
            <li>The purple background of the overview blurb is similar to clickable buttons, which can be misleading for the users</li>
            <li>The "Assignments" section can be made clearer by creating more distinction between items that are "not started" and "in progress</li>
            <li>The chat page contains chats with classmates, but where can users start chat with a classmate?</li>
          </ul>
          <h3>Chat Pages</h3>
          <ul>
            <li>The users might want to be able to see who are instructors and who are students from the chat pages</li>
            <li>It can be easier for the users to conduct course-related conversations if the they can access the course page directly from the chat page</li>
          </ul>
          <br/>
          <h2>Iteration</h2>
          <p>TODO</p>
          <br/>
          <h2>User Testing</h2>
          <p>TODO</p>
          <br/>
          <h2>Conclusion</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </body>
      <footer className='App-footer'>
        
      </footer>
    </div>
  );
};
  
export default Sphere;