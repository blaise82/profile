import React, { Component } from 'react'
import {skills} from './constants'

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
        <div className="inner-column">
          <div class="common__title">
          <h3 class="common__title__text">
        Languages, Tools, Libraries &amp;<span className="common__title__text__underlined" > Frameworks</span>
              </h3>
          </div>
        
         <div className="show-skills">
            {skills.map(skill => (
              <div className="skill animate__animated animate__bounceIn animate__delay-500ms" key={skill.id}>
                <>
                {skill.logo}
                {/* <img src={skill.logo} alt={skill.name} /> */}
                <div className="skill-name">{skill.name}</div>
                {/* <div className="skill-level">{skill.level}</div> */}
                </>
              </div>
            ))}
          </div>
        </div>

      </div>
        )
    }
}
