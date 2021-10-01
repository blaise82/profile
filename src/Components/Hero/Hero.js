import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/resume.pdf';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div class="hero__wrapper">

                    <h3 class="hero__title__text">
                    <p class="hero__text ">
                     Hello, I'am
                    </p>
                        Blaise Izabayo
                        <Typewriter
                            options={{
                                strings: ['Developer', 'Designer', '& Mentor'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <p class="hero__text">
                    Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.<span class="u-d-block@md"><a href={Resume} target="_blank" rel="noopener noreferrer" class="c-footer__link js-seanbot"><span>Download CV</span></a>.</span>
                    </p>
                </div>
                <div class="hero__wrapper">
                    <div className="wrapper">

                  
                    <img   className="img"  width={500}
              quality={95}  alt="Headshot" src="https://res.cloudinary.com/dhjizerm4/image/upload/v1632993160/me_z7imuw.jpg" />
                </div>
                </div>
            </div>
        )
    }
}
