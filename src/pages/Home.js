import React from 'react';
import {ReactComponent as FrontLandingPageImage} from '../images/undraw_knowledge_g-5-gf.svg'
const Home = () =>{
    return (
        <main>
        <section className="introduction">
            <div className="text-part">
            <h1>
                aeroSpect<br />
                Education <span className="success">Redifened</span>
            </h1>
            <h4>With our <span className="danger">3D</span> responsive educative models <span className="primary">everyone</span> can learn</h4>
            </div>
            <div className="img-holder">
            <img src="https://i.ibb.co/MC4DjBQ/undraw-knowledge-g5gf.png" />
            </div>
        </section>
        </main>
    );
}
export default Home;