
import './App.css';

import myimg from './images/myimg.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='iambox'>
          <h1 className="iamakash">i am akash</h1>
          <h1 className="iamakashbg">i am akash</h1>
        </div>
        <div className='web'>
          <h1 className="webdev">WEB DEVELOPER</h1>

          <img src={myimg} alt="A portfolio profile picture" className='my_img' />

          <h1 className="webdevstroked">WEB DEVELOPER</h1>

        </div>

        <div className='About'>

          <p className="para">"Dev by day, bug-squasher by night<br />
            I don't always write perfect code,<br /> but I sure make it look pretty."</p>
          <div className="row">
            <button className='Aboutmebtn'>My Journey</button>
            {/* <button className='connect'>Connect</button> */}


            <button className='connect' >Connect


              <div class="star-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" fill="currentColor">
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
                </svg>
              </div>
              <div class="star-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" fill="currentColor">
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
                </svg>
              </div>
              <div class="star-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" fill="currentColor">
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
                </svg>
              </div>
              <div class="star-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" fill="currentColor">
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
                </svg>
              </div>
              <div class="star-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" fill="currentColor">
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
                </svg>
              </div>

            </button>






          </div>


        </div>
      </header>


    </div>
  );
}

export default App;
