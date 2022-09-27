import React from 'react'

export default function Skills() {
  return (
    <>
      <td>
        <div className="author_content">
        <h1 className="title">My Skills</h1>
        <p>My education background and my passion towards coding allowed me to thrive in this career
        studied math and computer science in <em>university of science and technology houari boumediene</em> I learned the basics of computers from <em>algorithms</em>,<em>structure machine</em> and the <em>C language</em> </p>
        <p>
            I have high-tech in <em>L'institut national spécialisé de formation professionnelle</em>
            with a good grade in databases and coming up with the skills of <em>designing</em> and<em>managing</em>  databases with <em>Merise & SqlServer</em> and Developing Desktop Applications</p>
        <p> This is what created the environment for me to develop new skills for self-learning
        I aquired a quite good knowledge in <em>HTML5, CSS3, JS</em> and intermediate level in <em>Django, react</em> and advanced level in  <em>Python, PYQT</em> and have working experience on <em>Linux,Windows</em> OS</p>
        <strong>Thank You.</strong>
        </div>
      </td>
      <td>
        <section>
          <em>Web Developer & Designer</em>
            <div className="languages">
              <label htmlFor="lan1">Frontend (React & HTML & CSS)</label>
              <div id="lan1" className="progress">
                <div className="progress-value"></div>
              </div>
              <label htmlFor="lan2">GUI(PyQt)</label>
              <div id="lan2" className="progress">
                <div className="progress-value progress2"></div>
              </div>
              <label htmlFor="lan3">Backend(Django & Django rest Framework)</label>
              <div id="lan3" className="progress">
                <div className="progress-value progress3"></div>
              </div>
              <label htmlFor="lan4">Automatisation (OpenPyXl & Selenium) </label>
              <div id="lan4" className="progress">
                <div className="progress-value progress4"></div>
              </div>
              <label htmlFor="lan5">SGBD (MYSQL & PostgreSql & SqlServer & SqlLite) </label>
              <div id="lan5" className="progress">
                <div className="progress-value progress1"></div>
              </div>
              <label htmlFor="lan6">systeme (Linux & windows & Docker & IIS & Apache)</label>
              <div id="lan6" className="progress">
                <div className="progress-value progress2"></div>
              </div>
              <label htmlFor="lan6">VCS (Git & Github)</label>
              <div id="lan6" className="progress">
                <div className="progress-value progress1"></div>
              </div>
          </div>
        </section>
      </td></>
  )
}
