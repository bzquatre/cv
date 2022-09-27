import React, { useEffect, useState } from 'react'

export default function MyWorks() {
    const [slide,setSlide]=useState(0)
    function plusSlides(n) {
        showSlides(slide+n);
        }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n == slides.length) {setSlide(0)}    
        else if  (n <=0) {setSlide(slides.length-1)}
        else{setSlide(n)}
        for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";  
        }
        slides[slide].style.display = "block"; 
        }
        
        
  return (
    <>
    <td id="MyWorks">
        <div className="reviews author_content">
         {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" />*/}
        </div>
    </td>
    <td>
        <section className="myworks">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <iframe src="https://www.lebondem.ml"></iframe>
            </div>
            <div className="mySlides fade">
                <iframe src="https://catalogue.opu.dz"></iframe>
            </div>
            <a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={()=>plusSlides(1)}>&#10095;</a>
          </div><br/>
          <div style={{textAlign: "center"}}></div>
        </section>
    </td>
    </>
  )
}
