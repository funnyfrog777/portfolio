import React from "react";
import '../App.css';
import '../styles/BOTW.css';
import '../Color.css';
import { Link } from "react-router-dom";
  
const BOTW = () => {
  return (
    <div className="App">
      <header className='App-header'>
      <Link to="/portfolio#Development" className="go-back-link small-font"><i>&#8592; go back to home page</i></Link>
      <h1>Breath of the Wild Recipes</h1>
      <img className="img-display" src={process.env.PUBLIC_URL+"/images/botw-project.svg"}/>
      <a className="web-link small-font" href="https://funnyfrog777.github.io/botw-recipes/" target="_blank" rel="noopener noreferrer"><i>Breath of the Wild Recipe Website</i></a>
      </header>
      <body className='App-body'>
        <div className="body left-align">
          <div className="Project-Overview">
            <h2>Project Overview</h2>
            <p>
              This web application provides a way for users to quickly look through all the recipes they can make given the ingredients they own in the video game, <i>Breath of the Wild</i>. Each recipe card displays the required ingredients as well as the resale price. Users can also add recipes to their "Recipes to Make" cart that allows users to quickly see the total amount of rupees they can make if they made all the recipes they added. Users can also sort and filter by resale price if the user only want to sell cheap or expensive items.
              <br/><br/>
              The purpose of this project is to gain experience designing a functional website from scratch whose content can be updated based on user interaction. This is an accumulation of all the skills I learned from previous projects, including user research, user testing, and iteration.
            </p>
          </div>
          <br/>
          <h2>Background</h2>
          <p>Cooking is a large part of the video game, <i>Breath of the Wild</i>. Cooked meals can be used to restore hearts or to sell for rupees (the in-game currency). However, there is no in-game recipe book, which forces the user to either remember the recipes they discover or Google them.</p>
          <br/>
          <h2>Design</h2>
          <div className="side-by-side">
            <div>
              <h4>Usability</h4>
              <ul>
                <li>I added all filters and recipe cart at the top of the website which makes it easier to see which filters have been applied and what recipes have been added.</li>
                <li>Each recipe is a card-view in a grid format which makes it easy to quickly scroll through all the recipes.</li>
                <li>You can add or remove items on each recipe's card. You can also remove items from the "Recipes to Make" cart as well. That way if you want to remove an item from the cart, you don't have to scroll all the way to the corresponding card.</li>
                <li>I added functionality to either select or deselect all ingredients. This can be useful if you have a lot of ingredients and just want to deselect some, or if you have very few ingredients and just want to select some.</li>
              </ul>
              <h4>Learnability</h4>
              <ul>
                <li>The checkboxes imply an "and" operation, which is correct for filtering the recipe cards. If you are missing one ingredient, you can't make the recipe at all even if you have all the other ingredients.</li>
                <li>The sliders imply a "range", which is correct for filtering by price because the minimum and maximum resale prices operate on a sliding scale.</li>
                <li>The radio button imply a "select one" operation, which is correct for the "Sort By" filter because you can either sort by low-to-high or high-to-low.</li>
              </ul>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL+"/images/botw/botw-filters.png"}/>
              <img src={process.env.PUBLIC_URL+"/images/botw/food1.png"}/>
              <img src={process.env.PUBLIC_URL+"/images/botw/food2.png"}/>
              <img src={process.env.PUBLIC_URL+"/images/botw/food3.png"}/>
            </div>
          </div>
          <h2>Organization of Components</h2>
          <p>I decided to make components for elements that needed to be modular. The following are the components that I made:</p>
          <ul>
            <li>CheckBox component: Used to generate all the checkboxes for the "Ingredients" filter.</li>
            <li>Slider component: Used to generate the sliders for the "Resale" filter.</li>
            <li>Rupee component: Used in every place that used the rupee icon.</li>
            <li>MealItem component: Used to generate all the card views for every recipe.</li>
          </ul>
          <p>I decided not to make components anything else (like the "Recipes to Make" section) because they were either very simple JS tags, or there only existed one of them and thus didn't need to be reused.</p>
          <br/>
          <h2>Conclusion</h2>
          <p>This was my favorite project because I was able to use all my skills from user research, design, and user testing to create a website of my own. I learned how to use React and React states to modify content and make the website interactive.</p>
        </div>
      </body>
      <footer className='App-footer'>
        
      </footer>
    </div>
  );
};
  
export default BOTW;