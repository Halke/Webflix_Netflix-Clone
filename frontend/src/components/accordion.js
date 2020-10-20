import React from 'react';
import '../styles/accordion.css';


function Accordion({heading, children}) {

    

    const clickHandler = e => {
        console.log('Clicked!');
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {

                this.classList.toggle("active");
                

                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }

    return (
        <div className='accordion-panel'>
            <button onClick={clickHandler} className="accordion">
                {heading}
                <p>+</p>
            </button>
            <div className="panel">
                {children}
            </div>
        </div>
    );
}

export default React.memo(Accordion);