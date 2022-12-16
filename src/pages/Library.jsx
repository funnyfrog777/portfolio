import React from "react";
import '../App.css';
import '../styles/Library.css'
import '../Color.css';
import { Link } from "react-router-dom";
  
const Library = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <Link to="/portfolio#Redesign" className="go-back-link small-font"><i>&#8592; go back to home page</i></Link>
        <h1>Canton Public Library</h1>
        <img className="img-display" src={process.env.PUBLIC_URL+"/images/canton-project.svg"}/>
      <a className="web-link small-font" href="https://funnyfrog777.github.io/responsive-redesign/" target="_blank" rel="noopener noreferrer"><i>Canton Public Library Website Redesigned</i></a>
      </header>
      <body className='App-body'>
        <div className="body left-align">
          <div className="Project-Overview">
            <h2>Project Overview</h2>
            <p>
              I often use the Canton Public Library website to search and checkout books. However, the layout, the numerous buttons/tabs, and squished words make it difficult to navigate, which is why I decided to redesign the home page of the website.
              <br/><br/>
              The purpose of this project is to understand what makes a website a good design or bad design. I learned to analyze a website through three categories: usability, learnability, and memorability. I then gain experience improving upon the website to improve its user experience in each of those three categories.
            </p>
          </div>
          <br/>
          <h2>Background</h2>
          <p>The Canton Public library provides a variety of services. You can checkout books or movies, attend events, purchase museum tickets, apply for a passport, etc.</p>
          <br/>
          <h2>Analysing the Design</h2>
          <p>There are three categories that issues fall into when assessing the usability of a webpage: <b className="green-yellow">Usability</b> (how easy is it to learn), <b className="pink">Learnability</b> (how easy it is to learn), and <b className="blue">Memorability</b> (how easy it is to remember). I have annotated the issues and noted the corresponding reasonings below.</p>
          <div className="Analysis">
            <img src={process.env.PUBLIC_URL+"/images/library/annotated-homepage.png"}/>
            <ol>
              <li><b>(<b className="green-yellow">Usability</b>)</b> The hours look like clickable tabs, but they are not.</li>
              <li><b>(<b className="green-yellow">Usability</b> | <b className="pink">Learnability</b> | <b className="blue">Memorability</b>)</b> The tabs are awkwardly squished and different sizes. These tabs are also dropdown tabs, but they look like buttons. It makes it difficult to learn and remember where information is.</li>
              <li><b>(<b className="green-yellow">Usability</b> | <b className="pink">Learnability</b> | <b className="blue">Memorability</b>)</b> The search bar for the library catalog (top middle) and website (bottom right) are separated and in completely different locations. This makes it very difficult to search what you are looking for and to remember where the search bars are located. There is also repeated information that can be found in other tabs.</li>
              <li><b>(<b className="pink">Learnability</b> | <b className="blue">Memorability</b>)</b> It is unclear why these are separate buttons from the top navigation bar. It's difficult to know which button to click to find the information you are looking for.</li>
              <li><b>(<b className="green-yellow">Usability</b>)</b> There is no way to easily view all events regardless of age group.</li>
              <li><b>(<b className="green-yellow">Usability</b>)</b> The titles of the events are cut off which make it difficult to read. The spacing between the date, time, and event title is also very large which makes reading difficult.</li>
              <li><b>(<b className="green-yellow">Usability</b> | <b className="pink">Learnability</b>)</b> The button to view the full calendar is a different format than the rest of the buttons which makes it hard to find. There is also a redundant link above the calendar.</li>
            </ol>
          </div>
          <br/>
          <h2>Redesign: Lo-fi Prototype</h2>
          <p>I designed 3 low fidelity wireframes, one for each screen size (mobile, tablet, and desktop). These wireframes address the usability problems outlined above.</p>
          <p><i>The desktop prototypes contains the design decision annotations that are the same with the tablet and mobile prototypes. The tablet and mobile prototypes are annotated with how this information is formatted differently.</i></p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/library/desktop-lofi.png"}/>
          <br/>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/library/phone-tablet-lofi.png"}/>
          <br/>
          <h2>Visual Design Style Guide</h2>
          <p>In redesigning the website, I created and referenced a Visual Design Style Guide. It outlines all the inportant UI elements like button behavior, font, and colors. These all are used in improving organization and navigation.</p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/library/style-guide.png"}/>
          <br/>
          <h2>Redesign: Hi-fi Prototype</h2>
          <p>Below are high-fidelty prototypes based on the low fidelity prototypes and visual design style guide. Here, I also annotate planned html/css layouts. I included how the resulting css styles look in the tablet and mobile versions as well.</p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/library/desktop-hifi.png"}/>
          <div className="column-2">
            <img src={process.env.PUBLIC_URL+"/images/library/tablet-hifi.png"}/>
            <img src={process.env.PUBLIC_URL+"/images/library/phone-hifi.png"}/>
          </div>
          <br/>
          <h2>Conclusion</h2>
          <p>Based on the high-fidelity prototypes, I implemented the new, redesigned, and responsive Canton Public Library home page! I am new to HTML/CSS, so the final design does not exactly match with the high-fidelity prototypes. However, the main visible elements are there.</p>
          <p>The responsive redesign webpage can be found here: <a className="web-link" href="https://funnyfrog777.github.io/responsive-redesign/">https://funnyfrog777.github.io/responsive-redesign/</a></p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/library/homepage.png"}/>
        </div>
      </body>
      <footer className='App-footer'>
        
      </footer>
    </div>
  );
};
  
export default Library;