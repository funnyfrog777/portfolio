import React from "react";
import '../App.css';
import '../Color.css';
import { Link } from "react-router-dom";
  
const BOTW = () => {
  return (
    <div className="App">
      <header className='App-header'>
      <Link to="/portfolio" className="go-back-link small-font"><i>&#8592; go back to home page</i></Link>
      <h1>Breath of the Wild Recipes &#40;in-progress&#41;</h1>
      <img className="img-display" src={process.env.PUBLIC_URL+"/images/botw-project.svg"}/>
      <a className="web-link small-font" href="https://funnyfrog777.github.io/botw-recipes/" target="_blank" rel="noopener noreferrer"><i>Breath of the Wild Recipe Website</i></a>
      </header>
      <body className='App-body'>
        <div className="body left-align">
          <h2>Project Overview</h2>
          <p>This web application provides a way for users to quickly look through all the recipes they can make given the ingredients they own in the video game, <i>Breath of the Wild</i>. Each recipe card displays the required ingredients as well as the resale price. Users can also add recipes to their "Recipes to Make" cart that allows users to quickly see the total amount of rupees they can make if they made all the recipes they added. Users can also sort and filter by resale price if the user only want to sell cheap or expensive items.</p>
          <br/>
          <h2>Background</h2>
          <p>Cooking is a large part of the video game, <i>Breath of the Wild</i>. Cooked meals can be used to restore hearts or to sell for rupees (the in-game currency). However, there is no in-game recipe book, which forces the user to either remember the recipes they discover or Google them.</p>
          <br/>
          <h2>Design</h2>
          <h4>Usability</h4>
          <ul>
            <li>I added all filters and recipe cart at the top of the website which makes it easier to see which filters have been applied and what recipes have been added.</li>
            <li>Each recipe is a card-view in a grid format which makes it easy to quickly scroll through all the recipes.</li>
            <li>You can add or remove items on each recipe's card. You can also remove items from the "Recipes to Make" cart as well. That way if you want to remove an item from the cart, you don't have to scroll all the way to the corresponding card.</li>
            <li>I added functionality to either select or deselect all ingredients. This can be useful if you have a lot of ingredients and just want to deselect some, or if you have very few ingredients and just want to select some.</li>
          </ul>
          <h4>Learnability</h4>
          <img className="img-caption" src={process.env.PUBLIC_URL+"/images/botw-filters.png"}></img>
          <ul>
            <li>The checkboxes imply an "and" operation, which is correct for filtering the recipe cards. If you are missing one ingredient, you can't make the recipe at all even if you have all the other ingredients.</li>
            <li>The sliders imply a "range", which is correct for filtering by price because the minimum and maximum resale prices operate on a sliding scale.</li>
            <li>The radio button imply a "select one" operation, which is correct for the "Sort By" filter because you can either sort by low-to-high or high-to-low.</li>
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
  
export default BOTW;