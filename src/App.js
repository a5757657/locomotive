import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css'
import './style/App.scss'
import React, { Fragment } from 'react';
import bcs from './image/bcs.png'
import logo from './image/logo.png'
import 'aos/dist/aos.css';
import 'animate.css'
import Cursor from './component/Cursor';

function App() {
  window.onload = () => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.02,
      repeat: true,
      tablet: {
        smooth: true,
        breakpoint: 250
      },
      smartphone: {
        smooth: true
      },
      scrollFromAnywhere: true,
    });
  }
  return (
    <Fragment>
      <Cursor />
      <div data-scroll-container>
        <div data-scroll-section className='banner is-inview'>
          <div data-scroll data-scroll-direction='horizontal' data-scroll-speed='2' className='saul-wrap'>
            <img alt="" src={bcs} className="saul"></img>
          </div>
          <div data-scroll data-scroll-direction='horizontal' data-scroll-speed='-2' className='logo-wrap'>
            <img alt="" src={logo} className="logo"></img>
          </div>
        </div>

        <div data-scroll-section className='title1'>
          <span data-scroll data-scroll-speed='3' data-scroll-delay='0.1'>a</span>
          <span data-scroll data-scroll-speed='3.1' data-scroll-delay='0.13'>b</span>
          <span data-scroll data-scroll-speed='3.2' data-scroll-delay='0.15'>o</span>
          <span data-scroll data-scroll-speed='3.3' data-scroll-delay='0.17'>u</span>
          <span data-scroll data-scroll-speed='3.4' data-scroll-delay='0.19'>t</span>
        </div>
        <div data-scroll-section className='section1'>
          <div data-scroll data-scroll-speed='1' data-scroll-delay='0.3' data-scroll-direction='horizontal' className='article'>
            <p data-scroll>
              Better Call Saul is an American crime and legal drama television series created by Vince Gilligan and Peter Gould. Part of the
              Breaking Bad franchise, it is a spin-off, prequel and sequel to Gilligan's previous series, Breaking Bad. Set primarily in the
              early-mid 2000s in Albuquerque, New Mexico, the series develops Jimmy McGill (Bob Odenkirk), an earnest lawyer and former con
              artist, into an egocentric criminal defense attorney known as Saul Goodman. Also shown is the moral decline of former police officer
              Mike Ehrmantraut (Jonathan Banks), who becomes a violent fixer for drug traffickers to support his granddaughter and widowed
              daughter-in-law. The show premiered on AMC on February 8, 2015, and concluded on August 15, 2022, after six seasons consisting
              of 63 episodes.At the start of the series, Jimmy struggles financially while he mostly works on court-appointed cases as a
              public defender. His romantic interest and former colleague, Kim Wexler (Rhea Seehorn), is an attorney at Hamlin, Hamlin &
              McGill (HHM), a law firm co-owned by Jimmy's brilliant but unwell brother, Chuck McGill (Michael McKean) and Chuck's law
              partner, Howard Hamlin (Patrick Fabian). After hiring Jimmy as legal representation, Mike provides advice and security for
              Nacho Varga (Michael Mando), an intelligent drug dealer who later becomes a mole for Gus Fring (Giancarlo Esposito), a drug
              lord and legitimate businessman as owner of the Los Pollos Hermanos fast food establishment. Their operations are disrupted
              by members of the murderous Salamanca family, including Lalo Salamanca (Tony Dalton). Odenkirk, Banks, and Esposito reprise
              their roles from Breaking Bad, as do many others who make guest appearances.Better Call Saul has received widespread critical
              acclaim, with particular praise for its acting, characters, writing, direction, and cinematography; many critics have called
              it a worthy successor to Breaking Bad and one of the greatest television series of all time, with some deeming it superior to
              its predecessor.It has garnered many nominations, including a Peabody Award, 46 Primetime Emmy Awards, 15 Writers
              Guild of America Awards, 14 Critics' Choice Television Awards, six Screen Actors Guild Awards, and four Golden Globe Awards.
              At the time of its airing, the series premiere held the record for the highest-rated scripted series premiere in basic cable
              history.
              <div data-scroll className='border'></div>
              <div className="block"></div>
            </p>
          </div>
        </div>

        <div data-scroll-section className='title2'>
          <span data-scroll data-scroll-speed='3' data-scroll-delay='0.1'>p</span>
          <span data-scroll data-scroll-speed='3.1' data-scroll-delay='0.13'>e</span>
          <span data-scroll data-scroll-speed='3.2' data-scroll-delay='0.15'>r</span>
          <span data-scroll data-scroll-speed='3.3' data-scroll-delay='0.17'>m</span>
          <span data-scroll data-scroll-speed='3.4' data-scroll-delay='0.19'>i</span>
          <span data-scroll data-scroll-speed='3.5' data-scroll-delay='0.21'>s</span>
          <span data-scroll data-scroll-speed='3.6' data-scroll-delay='0.22'>e</span>
        </div>
        <div data-scroll-section className='section2'>
          <div data-scroll data-scroll-speed='-1' data-scroll-delay='0.3' data-scroll-direction='horizontal' className='article'>
            <p data-scroll>
              Better Call Saul follows the transformation of Jimmy McGill (Bob Odenkirk), a former con artist who is trying to
              become a respectable lawyer, into the personality of the flamboyant criminal lawyer Saul Goodman (a play on the
              phrase "[it]'s all good, man!"), over the six-year period prior to the events of Breaking Bad, spanning from approximately
              2002 to 2008.Jimmy is inspired by his older brother Chuck to leave his Chicago-area conman past, when he was known
              as "Slippin' Jimmy". He initially works in the mailroom at his brother's Albuquerque law firm, Hamlin, Hamlin & McGill (HHM),
              where managing partner Howard Hamlin becomes his nemesis. While at HHM Jimmy befriends Kim Wexler, a fellow mailroom employee
              who completes law school and becomes one of the firm's associates, and their friendship later turns romantic. Jimmy is motivated
              by Chuck's success to finish college and complete a Juris Doctor degree through a correspondence law school, the fictitious University
              of American Samoa.After attaining admission to the bar but being denied employment at HHM, Jimmy's pursuits focus on low paying clients
              including working as a public defender. He later begins to build a practice in elder law, which leads to a prolonged lawsuit against a
              nursing home chain he discovers is defrauding its clients. He and Chuck begin working together on a class-action suit, which Chuck quickly
              punts to HHM, squeezing Jimmy out. Jimmy begins to unravel due to Chuck's constant belittling, sabotage, and vindictive behavior towards
              him. Jimmy's life and career begin to intersect with the illegal narcotics trade and feature characters and story arcs that continue into Breaking
              Bad. Among these arcs is the uneasy truce between the Salamanca family that serves the Juárez Cartel drug interest, led first by Hector Salamanca
              and later by his nephews Tuco (Raymond Cruz) and Lalo, and Gus Fring, a fried chicken entrepreneur whose restaurant chain is a front for the drug
              trade. Those caught up in the ensuing turmoil include Ignacio "Nacho" Varga, a Salamanca associate who wants to protect his father from harm, and
              Mike Ehrmantraut, a former Philadelphia police officer who becomes a fixer for Gus. As his interactions with criminals continue, Jimmy takes on the
              persona of the flamboyant, colorful Saul Goodman, and he starts to draw on his conman past while his work as an attorney goes from questionable to
              unethical to illegal.In addition to selected scenes that take place within the Breaking Bad timeline, the show includes flashforwards,
              shown in black and white, to events following Breaking Bad. These scenes, taking place in 2010, show Jimmy living as a fugitive under
              the identity Gene Takavic, the manager of a Cinnabon store in Omaha, Nebraska.
              <div data-scroll className='border'></div>
              <div className="block"></div>
            </p>
          </div>
        </div>

        <div data-scroll-section className="section3">
          <div data-scroll data-scroll-speed='1' className="box"></div>
          <div data-scroll data-scroll-speed='-1' className="box"></div>
          <div data-scroll data-scroll-speed='1' className="box"></div>
          <div data-scroll data-scroll-speed='-1' className="box"></div>
          <div data-scroll data-scroll-speed='1' className="box"></div>
          <div data-scroll data-scroll-speed='-1' className="box"></div>
        </div>
        <div data-scroll-section className="section4"></div>
      </div>
    </Fragment>

  );
}

export default App;
