import './AppStyle.scss';
import { useState } from 'react';


  const App = () => {
    const [bill, setBill] = useState();
    
    const [tip, setTip] = useState();
    
    const [people, setPeople] = useState();
    
    if(bill || people || tip){
      console.log(bill);
      console.log(tip);
      console.log(people);
    }
      return (
        <div className='App'>
          <div className='h1'>
          <h1>SPLI</h1>
          <h1>TTER</h1>
          </div>
          <div className='container'>
            <div className='column'>
                <div className='row'>
                  <p>Bill</p>
                  <input type={'number'} placeholder="0" id="bill" onChange={event => setBill(event.target.value)}  min="1" pattern="^[0-9]+"></input>
                </div>
                <div className='row'>
                  <p>Select Tip %</p>
                  <div className='buttons'>
                    <div className='columnbutton'>
                      <input  className='button1' type={'button'} value="5%" id="5" name="tip" onClick={event => setTip(event.target.id)} ></input>
                      <input  className='button2' type={'button'} value="10%" id="10"name="tip" onClick={event => setTip(event.target.id)}></input>
                      <input className='button3' type={'button'} value="15%" id="15" name="tip" onClick={event => setTip(event.target.id)}></input>
                    </div>
                    <div className='columnbutton'>
                      <input  className='button4' type={'button'} value="25%" id="25" name="tip" onClick={event => setTip(event.target.id)}></input>
                      <input  className='button5' type={'button'} value="50%" id="50" name="tip" onClick={event => setTip(event.target.id)}></input>
                      <input  type={'number'} className="custom" placeholder="Custom" id="tipCustom" name="tipCust" onChange={event => setTip(event.target.value)} pattern="^[0-9]+"></input>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <p>Number of People</p>
                  <p className="error" id="error">Can't be zero or decimal</p>
                  <input type={'number'} placeholder="0" id="numP" min="0" pattern="^[0-9]+" onChange={event => setPeople(event.target.value)}/>
                </div>
          </div>
          <div className='column'>
            <div className='container2'>
              <div className='column-result'>
                <div className='row-result1'>
                  <p >Tip Amount</p>
                  <p className="per-person">/ person</p>
                  <p>Total</p>
                <p className="per-person">/ person</p>
                </div>
                <div className='row-result2'>
                  <div className="result" id="resultTipAmount">$0.00</div>
                  <div className="result" id="resultTotal">$0.00</div>
                </div>
              </div>
              <div className='column-result'>
                <input type={'reset'} className='reset' value={'RESET'} onClick={() => window.location.reload()}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default App;