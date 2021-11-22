import React from 'react';
import {ReactComponent as FrontLandingPageImage} from '../images/undraw_knowledge_g-5-gf.svg'
const Home = () =>{
    return (
        <main>
        <section class="introduction">
            <div class="text-part">
            <h1>
                aeroSpect<br />
                Education <span className="success">Redifened</span>
            </h1>
            <h4>With our 3D responsive educative models everyone can learn</h4>
            </div>
            <div class="img-holder">
            <img src="https://i.ibb.co/MC4DjBQ/undraw-knowledge-g5gf.png" />
            </div>
        </section>
        </main>
    );
}
export default Home;