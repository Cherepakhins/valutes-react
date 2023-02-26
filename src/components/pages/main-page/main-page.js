import React from "react";
import "./style.css";

class Main extends React.Component {

valer = fetch(`https://www.cbr-xml-daily.ru/daily_json.js`).then((response) => {
            return response.json()
         }).then((data) => { 
            const input = document.querySelector('#input'); 
            const result = document.querySelector('#result'); 
            const select = document.querySelector('#select'); 
            input.oninput = convertValue;
            select.oninput = convertValue;
            function convertValue(){
              result.value = (parseFloat(input.value) * data.Valute[select.value].Value).toFixed(2);
            }     
})  
  render() {
    return (
    <div className="courses" method={this.valer}>
      <form>
        <div className="wrapper">
					<h1 className="title">Конвертер валют</h1>
          <div className="col">
							<label htmlFor="name" className="label">Отдаю:</label>
							<select
								id="select"
								className=""
							>										
                <option value="USD">USD — Доллар США</option>
                <option value="EUR">EUR — Евро</option>
							</select>
          </div>
              <div className="">
								<input
									id="input"
									type="number"
									className=" get title1 text"
                  placeholder="100"
									autoFocus
								/>
							</div>
              
              <div className="col">
								<label htmlFor="name" className="label">Получаю:</label>
								<select	
									className=""	
								>
								<option value="RUB">RUB — Рубли</option>
								</select>
              </div>
                  <div className="">
                    <input
                      id="result"
                      type="number"
                      className=" get title1 text"
                    />
                  
								</div>
        </div>      
			</form>
		</div>
    );
  }
}

export default Main;