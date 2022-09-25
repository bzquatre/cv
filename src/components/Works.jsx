import React from 'react'
import background from '../photo.jpg'
export default function Works() {
  return (
    <>
    <td>
    <div className="author_content" >
      <h1 className="title">Bouzegzeg Zakaria</h1>
      <p>Hello there! Before talking about qualifications and professional abilities, I would like to
      introduce myself.</p>
      <p>I am <em>Bouzegzeg Zakaria</em> and I am from Algeria. Taking web development
      as a profession not only fulfils my pocket but also my heart because it has been my passion
      since my early teenage.</p>
      <p>I believe that people should do things in which they are good at or in which their heart lays.</p>
    </div>
    <div className="author_name" style={{ backgroundImage: `url(${background})` }}></div>
  </td>
  <td>
    <section className="works">
      <div>
        <em>Qualification:</em>
        <ul>
          <li>Administator DataBase and systeme (SQL,Linux,windows) </li><br/>
          <li>Full Stack Web Developer</li><br/>
          <li>GUI Developer</li>
        </ul>
      </div>
      <div>
        <em>Hobbies : </em>
        <ul>
          <li>programing and coding</li><br/>
          <li>driving and camping</li><br/>
          <li>Basketball</li><br/>
          <li>beekeeping</li>
        </ul>
      </div>
      <div>
        <em>Languages:</em>
        <ul>
          <li>python</li>
          <li>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star-half-o checked"></span>
          </li>
        </ul>
        <ul>
            <li>Javascript</li>
            <li>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star-half-o checked"></span>
              <span className="fa fa-star"></span>
            </li>
        </ul>
        <ul>
          <li>Pascal</li>
          <li>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
          </li>
        </ul>
        <ul>
          <li>SQL</li>
          <li>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
          </li>
        </ul>
        <ul>
          <li>C</li>
          <li>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          </li>
        </ul>
      </div>
    </section>
  </td>
  </>
  )
}
