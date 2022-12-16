import React from "react";
import '../App.css';
import '../Color.css';
import Card from '../components/Card';

function Home() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hi, I'm Funnyfrog777</h1>
        <p>I'm a <b className='aquamarine'>computer science</b> undergraduate studying <b className='orange'>visual computing</b>, and  <br/>
        this is my journey through learning about <b className='pink'>user experience and effective design</b>.</p>
      </header>
      <body className='App-body'>
        <h1>My UI/UX Journey</h1>
        <p className='description'>
          Computer science is about <b>solving problems</b> and <b>building tools</b>. However, when developing a solution or tool, 
          it's important to understand how users will <b>use</b> your product. At the end of the day, it is the user who determines
          how useful a product is. The better the user experience, the better the product. Therefore, to become a better software engineer, I decided to take a course in <i>User Interfaces and User Experience</i> to learn more about
          and effective design.
          <p className="purple">
          <i>This portfolio is a documentation of my journey through the UI/UX design process. Each project represents a particular step in the process 
          that I explore extensively on each project page. Feel free to click through each project to see my thoughts, challenges, and takeaways.</i>
          </p>
          <img src={process.env.PUBLIC_URL + "/images/uiux_process.png"}/>
        </p>
        <br/><br/>
        {/* CVS -> Canton Public Library -> Sphere -> BotW */}
        <div className='Projects'>
          <Card id="UserResearch" title="User Research" img="/images/cvs-project.png" page="/portfolio/cvs" color="user-research" 
            p1="In this project, I explore the first and most important step in the UI/UX process, user research, by performing a deep dive into CVS' self-checkout kiosks."
            p2="I learned how to make observations and conduct interviews with users to create personas and storyboards to analyze the effectiveness of the product's UI and the quality of the user experience."/>
          <Card id="Redesign" title="Design" img="/images/canton-project.png" page="/portfolio/library" color="design" 
            p1="In this project, I redesigned one of my favorite websites: my hometown's public library website."
            p2="I learned how different devices induce different user behaviors. Using this knowledge, I gained experience in designing a responsive web page that adapts to the device it is viewed on. "/>
          <Card id="Iteration" title="Iteration" img="/images/sphere-project.png" page="/portfolio/sphere" color="iteration" 
            p1="In this group project, my team designed a functional prototype app for the start-up, Sphere."
            p2="I gained experience in reiterating based on user testing, working with a group of UI/UX designers, and developing a working high-fidelity prototype."/>
          <Card id="Development" title="Development" img="/images/botw-project.png" page="/portfolio/botw" color="development" 
            p1="In this project, I designed from scratch a website for quickly filtering cookable meals in the video game, Breath of the Wild."
            p2="I learned how to use React and state management to update content based on user interactions with the website. I also able to create the website that I wished existed when I did my first playthrough of the game."/>
        </div>
      </body>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default Home;
