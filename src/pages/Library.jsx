import React from "react";
import '../App.css';
import '../Color.css';
import { Link } from "react-router-dom";
  
const Library = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <Link to="/portfolio" className="go-back-link small-font"><i>&#8592; go back to home page</i></Link>
        <h1>Canton Public Library &#40;in-progress&#41;</h1>
        <img className="img-display" src={process.env.PUBLIC_URL+"/images/canton-project.svg"}/>
      <a className="web-link small-font" href="https://funnyfrog777.github.io/responsive-redesign/" target="_blank" rel="noopener noreferrer"><i>Canton Public Library Website Redesigned</i></a>
      </header>
      <body className='App-body'>
        <div className="body left-align">
          <h2>Project Overview</h2>
          <p>I often use the Canton Public Library website to search and checkout books. However, the layout, the numerous buttons/tabs, and squished words make it difficult to navigate, which is why I decided to redesign the home page of the website.</p>
          <br/>
          <h2>Background</h2>
          <p>The Canton Public library provides a variety of services. You can checkout books or movies, attend events, purchase museum tickets, apply for a passport, etc.</p>
          <br/>
          <h2>Analysing the Design</h2>
          <ul>
            <li><b>(Usability)</b> The hours look like clickable tabs, but they are not.</li>
            <li><b>(Usability | Learnability | Memorability)</b> The tabs are awkwardly squished and different sizes. These tabs are also dropdown tabs, but they look like buttons. It makes it difficult to learn and remember where information is.</li>
            <li><b>(Usability | Learnability | Memorability)</b> The search bar for the library catalog (top middle) and website (bottom right) are separated and in completely different locations. This makes it very difficult to search what you are looking for and to remember where the search bars are located. There is also repeated information that can be found in other tabs.</li>
            <li><b>(Learnability | Memorability)</b> It is unclear why these are separate buttons from the top navigation bar. It's difficult to know which button to click to find the information you are looking for.</li>
            <li><b>(Usability)</b> There is no way to easily view all events regardless of age group.</li>
            <li><b>(Usability)</b> The titles of the events are cut off which make it difficult to read. The spacing between the date, time, and event title is also very large which makes reading difficult.</li>
            <li><b>(Usability | Learnability)</b> The button to view the full calendar is a different format than the rest of the buttons which makes it hard to find. There is also a redundant link above the calendar.</li>
          </ul>
          <h2>Redesign: Lo-fi Prototype</h2>
          <h2>Redesign: Hi-fi Prototype</h2>
          <ul>
            <li>Made hours into a navigation tab</li>
            <li>Combined the library catalog and website search into on search bar with switchable tabs</li>
            <li>Grouped all information related to services which distinguishes from the navigation bar tabs which deals with non-service-related information</li>
            <li>Added "All" tab to display all events</li>
            <li>Reorganized, combined, and removed redundant tabs to make navigation easier</li>
            <li>Added images to improve readability and navigation</li>
            <li>Made all UI elements consistent</li>
          </ul>
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
  
export default Library;