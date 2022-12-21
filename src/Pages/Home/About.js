import React from 'react'
import img from '../../assets/images/aboutImg.jpeg'

const About = () => {
  return (
    <div>
        <h2>About</h2>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel labore temporibus recusandae veritatis sequi, cupiditate quaerat delectus, architecto magnam illum id nihil. Reiciendis, nulla. Ipsam ex quia accusamus exercitationem!
        </div>
        <div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default About