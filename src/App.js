import './AppStyle.scss';

  const App = () => {

      return (
        <div className='App'>
          <div className='column'>
            <div className='row'>
              <p>Bill</p>
              <input type={'number'} placeholder="0" id="bill" /*onChange={}*/  min="1" pattern="^[0-9]+"></input>
            </div>
            <div className='row'>
              <p>Select Tip %</p>
              <input type={'button'} value="5%" id="5" name="tip" /*onClick={}*/></input>
              <input type={'button'} value="10%" id="10"name="tip" /*onClick={}*/></input>
              <input type={'button'} value="15%" id="15" name="tip" /*onClick={}*/></input>
              <input type={'button'} value="25%" id="25" name="tip" /*onClick={}*/></input>
              <input type={'button'} value="50%" id="50" name="tip" /*onClick={}*/></input>
              <input type={'number'} class="custom" placeholder="Custom" id="tipCustom" name="tipCust" /*onChange={}*/ pattern="^[0-9]+"></input>
            </div>
            <div className='row'>
              <div>
                <p>Number of People</p>
                <p class="error" id="error">Can't be zero or decimal</p>
              </div>
              <input type={'number'} placeholder="0" id="numP" min="0" pattern="^[0-9]+" /*onChange={}*//>
           </div>
        </div>
        <div className='column'>
          <div className='row'>
            <p>Tip Amount</p>
            <p class="per-person">/ person</p>
            <div class="result" id="resultTipAmount">$0.00</div>
          </div>
          <div className='row'>
            <p>Total</p>
            <p class="per-person">/ person</p>
            <div class="result" id="resultTotal">$0.00</div>
          </div>
          <div className='row'>
            <input type={'reset'} className='reset' value={'RESET'}/>
          </div>
        </div>
      </div>
    );
  }
      

export default App;