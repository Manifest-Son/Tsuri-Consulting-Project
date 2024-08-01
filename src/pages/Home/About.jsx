import React from 'react'
import './Home.css'
import studentImg from '../../assets/student.png'
import studentsImg from '../../assets/students.png'
import graduateImg from '../../assets/graduste.png'

function About(){
    return(
        <React.Fragment>
            <section>
                <div className="about_container">
                    <div className="about_img">
                    <img src={studentImg} alt="Fresh man" />
                    <img src={studentsImg} alt="students in a group" />
                    <img src={graduateImg} alt="Graduation ceremony" />
                    </div>
                    <div>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi beatae praesentium iste illum, explicabo impedit cum autem alias quo quia ullam dolorum eaque itaque.</p>
                        <button>Learn More &rarr;</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About