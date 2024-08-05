// import React from 'react'
import './Home.css'

export default function Newsletter() {
  return (
    <section className='newsletter_section'>
        <div className="newsletter">
            <h3>Subscribe to our newsletter:</h3>
            <div className="newsletter_input">
                <input type="text" name='subscribe' id='subcribe' />
                <button>Subcribe</button>
            </div>
        </div>
    </section>
  )
}
