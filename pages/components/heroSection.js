import React from 'react'


export default function heroSection() {

  const searchFrom = (e)=>{
    
  }
  const searchTo = (e)=>{
    
  }

  return (
    <div id="hero-section">
      <div className="promotions-flight">
        <div id="hero-promotions">
          <h3>Promotions</h3>
          <ul>
            <li>
              <a href="#">
                <h4>Açores</h4>
                <p>329€</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Açores</h4>
                <p>329€</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Açores</h4>
                <p>329€</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Açores</h4>
                <p>329€</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Açores</h4>
                <p>329€</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Açores</h4>
                <p>329€</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="hero-search">
        <table>
          <tr>
            <th><h4>From</h4></th>  
            <th><h4>To</h4></th>  
            <th><h4>Timeframe</h4></th>
            <th></th>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Oporto" value="" onChange={(e)=>{searchFrom(e)}}/>  
            </td>
            <td>
              <input type="text" placeholder="Oporto" value="" onChange={(e)=>{searchTo(e)}}/>  
            </td>
            <td>
              <input type="date" value=""/>  
              <input type="date" value=""/>  
            </td>
            <td>
              <button type="button">Search</button>
            </td>
          </tr>
        </table>
      </div>
      <div id="take-flight">
        <a href="#">
          <img src="./rscs/plane.png" />
          <p>Fly with us!</p>
        </a>
      </div>
    </div>
  )
}
