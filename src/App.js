import './AppStyle.scss';

  const App = () => {

      return (
        <div className='App'>
          <h1>SPLI</h1>
          <h1>TTER</h1>
          <div className='container'>
            <div className='column'>
                <div className='row'>
                  <p>Bill</p>
                  <input type={'number'} placeholder="0" id="bill" /*onChange={}*/  min="1" pattern="^[0-9]+"></input>
                </div>
                <div className='row'>
                  <p>Select Tip %</p>
                  <div className='columnbutton'>
                    <input type={'button'} value="5%" id="5" name="tip" /*onClick={}*/></input>
                    <input type={'button'} value="10%" id="10"name="tip" /*onClick={}*/></input>
                    <input type={'button'} value="15%" id="15" name="tip" /*onClick={}*/></input>
                  </div>
                  <div className='columnbutton'>
                    <input type={'button'} value="25%" id="25" name="tip" /*onClick={}*/></input>
                    <input type={'button'} value="50%" id="50" name="tip" /*onClick={}*/></input>
                    <input type={'number'} class="custom" placeholder="Custom" id="tipCustom" name="tipCust" /*onChange={}*/ pattern="^[0-9]+"></input>
                  </div>
                </div>
                <div className='row'>
                  <p>Number of People</p>
                  <p class="error" id="error">Can't be zero or decimal</p>
                  <input type={'number'} placeholder="0" id="numP" min="0" pattern="^[0-9]+" /*onChange={}*//>
                </div>
          </div>
          <div className='column'>
            <div className='container2'>
              <div className='column-result'>
                <div className='row-result1'>
                  <p >Tip Amount</p>
                  <p class="per-person">/ person</p>
                  <p>Total</p>
                <p class="per-person">/ person</p>
                </div>
                <div className='row-result2'>
                  <div class="result" id="resultTipAmount">$0.00</div>
                  <div class="result" id="resultTotal">$0.00</div>
                </div>
              </div>
              <div className='column-result'>
                <input type={'reset'} className='reset' value={'RESET'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
      

export default App;