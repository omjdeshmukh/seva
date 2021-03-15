import './Main.css'
import React from 'react'
import hello from '../../Assets/mini.jpg'


function Main() {
    return (
      <main>
          <div className="main__container" >
              <div className="main__title" >
                  <img src={hello} alt="hello" />
                  <div className="main__greeting" >
                      <h1>Hello Baba</h1>
                      <p>Welcome provider page</p>
                  </div>
              </div>
              <div className="main__cards" >
                  <div className="card" >
                      <i className="fa fa-user-o fa-2x text-lightblue" ></i>
                      <div className="card_inner" >
                          <p className="text-primary-p" >Number</p>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    )
}

export default Main
