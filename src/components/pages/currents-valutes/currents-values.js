import React from "react";
import "./style.css";

class CurrentsValutes extends React.Component {
  state = {
    dollar: undefined,
    euro: undefined,
}

val = fetch(`https://www.cbr-xml-daily.ru/daily_json.js`).then((response) => {
            return response.json()
         }).then((data) => {
          const result2 = document.querySelector('#result2'); 
          const result3 = document.querySelector('#result3'); 
          const select = document.querySelector('#select');
          const title1 = document.querySelector('.title1');
          const title2 = document.querySelector('.title2 '); 
          title1.textContent = "USD";
          title2.textContent = "EUR";
          select.oninput = convertValue;
          function convertValue(){
            if(select.value === "RUB"){
              title1.textContent = "USD";
              title2.textContent = "EUR";
              result2.value = data.Valute.USD.Value.toFixed(2);
              result3.value = data.Valute.EUR.Value.toFixed(2);
            } if (select.value === "USD"){
              title1.textContent = "RUB";
              title2.textContent = "EUR";
              result2.value = (1 / data.Valute[select.value].Value).toFixed(2);
              result3.value = (data.Valute.EUR.Value / data.Valute[select.value].Value).toFixed(2);
            } if (select.value === "EUR"){
              title1.textContent = "RUB";
              title2.textContent = "USD";
              result2.value = (1 / data.Valute[select.value].Value).toFixed(2);
              result3.value = (data.Valute.USD.Value / data.Valute[select.value].Value).toFixed(2);
            }
          }
          this.setState({
            dollar: data.Valute.USD.Value.toFixed(2),
            euro: data.Valute.EUR.Value.toFixed(2),  
        });  
})
    
    
  render() {
    
    return (
        <div className="courses" method={this.val}>
          <form>
                <h1 className="title">Текущие курсы валют</h1>
								<div className="col">
									<label htmlFor="name" className="label">Базовая валюта:</label>
									<select
										id="select"
										className="form-control special"
									>
										<option value="RUB">RUB — Рубли</option>
                    <option value="USD">USD — Доллар США</option>
                    <option value="EUR">EUR — Евро</option>

									</select>
								</div>
                <div className="wrapper-inputs">
                  <div className="row">
                    <div className="title1 text"></div>
                    <div className="col">
                      <input
                        id="result2"
                        type="number"
                        className="form-control special"
                        defaultValue={this.state.dollar}
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="title2 text"></div>
                    <div className="col">
                      <input
                        id="result3"
                        type="number"
                        className="form-control special"
                        defaultValue={this.state.euro}
                      />
                    </div>
                  </div>
                </div>
                
      </form>
		</div>
    );
  }
}

export default CurrentsValutes;