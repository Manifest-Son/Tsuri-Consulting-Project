import "./Home.css";
import React from "react";
// import why from '../../data/why';
import { TbBriefcaseFilled } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { BsFire } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Why() {
  return (
    <React.Fragment>
      <section className="why_section">
        <h1 className="why_title">Why they choose us...</h1>
        <div className="why_wrapper">
          <div className="why_container">
            <div className="why_icon">
              <TbBriefcaseFilled />
            </div>
            <div className="why_text">
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quos commodi quaerat exercitationem recusandae tempore culpa
                earum dolore eius quidem.
              </p>
            </div>
          </div>

          <div className="why_container">
            <div className="why_icon">
              <BsTools />
            </div>
            <div className="why_text">
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quos commodi quaerat exercitationem recusandae tempore culpa
                earum dolore eius quidem.
              </p>
            </div>
          </div>

          <div className="why_container">
            <div className="why_icon">
              <BsFire />
            </div>
            <div className="why_text">
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quos commodi quaerat exercitationem recusandae tempore culpa
                earum dolore eius quidem.
              </p>
            </div>
          </div>

          <div className="why_container">
            <div className="why_icon">
              <RiTimerLine />
            </div>
            <div className="why_text">
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quos commodi quaerat exercitationem recusandae tempore culpa
                earum dolore eius quidem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

// function Why(){
//     <section>
//         <h1>Why they opt us...</h1>
//         {why.map((currentWhy) =>(
//             <DisplayWhy
//             key = {currentWhy.id}
//             icon = {currentWhy.icon}
//             title={currentWhy.title}
//             text={currentWhy.text}
//             />
//         ))}
//     </section>
// }

export default Why;
