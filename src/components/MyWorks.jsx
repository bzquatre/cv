import React, { useState } from 'react'

export default function MyWorks() {
    const [slide,setSlide]=useState(1)
    function plusSlides(n) {
        showSlides(slide+n);
        }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {setSlide(1)}    
        if (n < 1) {setSlide(slides.length)}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slide-1].style.display = "block";  
        dots[slide-1].className += " active";
        }
  return (
    <>
    <td id="MyWorks">
        <div className="reviews author_content">
          <img src="https://i.ibb.co/XsY1T9v/client-1.png" alt="" />
          <img src="https://i.ibb.co/XsY1T9v/client-1.png" alt="" />
          <img src="https://i.ibb.co/XsY1T9v/client-1.png" alt="" />
        </div>
    </td>
    <td>
        <section className="myworks">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <iframe src="https://www.lebondem.ml" style="width: 100%; height: 400px"></iframe>
            </div>
            <div className="mySlides fade">
                <iframe src="https://catalogue.opu.dz" style="width: 100%;  height: 400px;"></iframe>
            </div>
            <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onclick={plusSlides(1)}>&#10095;</a>
          </div><br/>
          <div style="text-align:center"></div>
        </section>
    </td>
    </>
  )
}
