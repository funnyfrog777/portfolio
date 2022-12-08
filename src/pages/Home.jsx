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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* CVS -> Canton Public Library -> Sphere -> BotW */}
        <div className='Projects'>
          <Card title="User Research" img="/images/cvs-project.png" page="/portfolio/cvs"/>
          <Card title="Redesign" img="/images/canton-project.png" page="/portfolio/library"/>
          <Card title="Iteration" img="/images/sphere-project.png" page="/portfolio/sphere"/>
          <Card title="Development" img="/images/botw-project.png" page="/portfolio/botw"/>
        </div>
      </body>
      <footer className='App-footer'>

      </footer>
    </div>
  );
}

export default Home;
