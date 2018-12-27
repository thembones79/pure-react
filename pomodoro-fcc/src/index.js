import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSession: true,
        sessionLength: 25,
        breakLength: 5,
        secondsLeft: 1500,
        intervalTime: 1500,
        isCountingDown: false
      };
     
    }
  
    beep = () => {
      this.beeper.play();
    };
  
    reset = () => {
      
      clearInterval(this.timer);
      this.setState({
        isSession: true,
        sessionLength: 25,
        breakLength: 5,
        secondsLeft: 1500,
        intervalTime: 1500,
        isCountingDown: false
      });
      this.beeper.pause();
      this.beeper.currentTime = 0;
    };
  
    countdown = () => {
      if (!this.state.isCountingDown) {
        clearInterval(this.timer);
        this.setState({ isCountingDown: true });
        this.timer = setInterval(this.timerDecrement, 1000);
      } else {
        this.setState({ isCountingDown: false });
        clearInterval(this.timer);
      }
    };
  
    timerDecrement = () => {
      this.setState(
        state => ({ secondsLeft: state.secondsLeft - 1 }),
        this.sessionChange
      );
    };
  
    decreaseDisplayedTime = () => {
      this.setState({
        secondsLeft: this.state.secondsLeft - 60,
        intervalTime: this.state.intervalTime - 60
      });
    };
  
    increaseDisplayedTime = () => {
      this.setState({
        secondsLeft: this.state.secondsLeft + 60,
        intervalTime: this.state.intervalTime + 60
      });
    };
  
    sessionDecrement = () => {
      if (this.state.sessionLength>1){
      this.setState({ sessionLength: this.state.sessionLength - 1 });
      //the condition below prevents decreasing displayed time when in session mode and pressing "break decrement" button
      if (this.state.isSession) {
        this.decreaseDisplayedTime();
      }}
    };
  
    sessionIncrement = () => {
      if(this.state.sessionLength<60){
      this.setState({ sessionLength: this.state.sessionLength + 1 });
      if (this.state.isSession) {
        this.increaseDisplayedTime();
      }}
    };
  
    breakDecrement = () => {
      if(this.state.breakLength>1){
      this.setState({ breakLength: this.state.breakLength - 1 });
      if (!this.state.isSession) {
        this.decreaseDisplayedTime();
      }}
    };
  
    breakIncrement = () => {
      if(this.state.breakLength<60){
      this.setState({ breakLength: this.state.breakLength + 1 });
      if (!this.state.isSession) {
        this.increaseDisplayedTime();
      }}
    };
  
    sessionChange = () => {
      if (this.state.secondsLeft < 0) {
        this.beep();
        if (this.state.isSession) {
          this.setState(state => ({
            isSession: false,
            secondsLeft: state.breakLength * 60,
            intervalTime: state.breakLength * 60
          }));
        } else {
          this.setState(state => ({
            isSession: true,
            secondsLeft: state.sessionLength * 60,
            intervalTime: state.sessionLength * 60
          }));
        }
      }
    };
  
    render() {
      return (
        <div id="pomodoro" className={this.state.isSession ? "tomato" : "green"}>
          <header>
            <h1>Pomodoro Clock</h1>
          </header>
          <ClockFace
            beep={this.beep}
            countdown={this.countdown}
            reset={this.reset}
            isSession={this.state.isSession}
            timeLeft={this.state.secondsLeft}
            totalTime={this.state.intervalTime}
            isCountingDown={this.state.isCountingDown}
          />
          <Settings
            breakLength={this.state.breakLength}
            sessionLength={this.state.sessionLength}
            handleSessionIncrementClick={this.sessionIncrement}
            handleSessionDecrementClick={this.sessionDecrement}
            handleBreakIncrementClick={this.breakIncrement}
            handleBreakDecrementClick={this.breakDecrement}
          />
          <audio id="beep" preload="auto" src="https://tomato-news.surge.sh/static/media/BeepSound.988833bf.wav"
                      ref={(audio) => {
                          this.beeper = audio;
                      }}></audio>
        </div>
      );
    }
  }
  
  const Status = ({ isSession, timeLeft }) => (
    <div id="status">
      <div id="timer-label">{isSession ? "session" : "break"}</div>
      <Timer timeLeft={timeLeft} />
      <div id="status-icon">{isSession ? <SessionIcon /> : <BreakIcon />}</div>
    </div>
  );
  
  const Timer = ({ timeLeft }) => {
    function addZero(number) {
      if (number < 10) {
        return "0" + number;
      } else {
        return number;
      }
    }
  
    let minutes = addZero(Math.floor(timeLeft / 60));
    let seconds = addZero(timeLeft % 60);
  
    return <div id="time-left">{minutes + ":" + seconds}</div>;
  };
  const Controls = ({ countdown, isCountingDown, reset }) => (
    <div id="controls">
      <div id="start_stop" onClick={countdown}>
        {isCountingDown ? (
          <i className="fas fa-pause" />
        ) : (
          <i className="fas fa-play" />
        )}
      </div>
      <div id="reset" onClick={reset}>
        <i className="fas fa-redo-alt" />
      </div>
    </div>
  );
  
  const ClockFace = ({
    beep,
    countdown,
    isSession,
    timeLeft,
    totalTime,
    isCountingDown,
    reset
  }) => {
    return (
      <div id="outer-face">
        <div id="clock-face">
          <Status isSession={isSession} timeLeft={timeLeft} />
          <Circle timeLeft={timeLeft} totalTime={totalTime} />
          
        </div>
        <Controls
          beep={beep}
          countdown={countdown}
          isCountingDown={isCountingDown}
          reset={reset}
        />
      </div>
    );
  };
  
  const Settings = ({
    breakLength,
    sessionLength,
    handleBreakDecrementClick,
    handleBreakIncrementClick,
    handleSessionDecrementClick,
    handleSessionIncrementClick
  }) => (
    <div id="settings">
      <SettingItem
        itemName="session"
        value={sessionLength}
        handleDecrementClick={handleSessionDecrementClick}
        handleIncrementClick={handleSessionIncrementClick}
      />
      <SettingItem
        itemName="break"
        value={breakLength}
        handleDecrementClick={handleBreakDecrementClick}
        handleIncrementClick={handleBreakIncrementClick}
      />
    </div>
  );
  
  const SettingItem = ({
    itemName,
    value,
    handleDecrementClick,
    handleIncrementClick
  }) => (
    <div id={itemName} className="settings-block">
      <div id={`${itemName}-label`} className="settings-label">
        {itemName} length
      </div>
      <div className="settings" >
        <div
          id={`${itemName}-decrement`}
          className="settings-button"
          onClick={handleDecrementClick}
        >
          -
        </div>
        <div id={`${itemName}-length`} className="settings-value" value={value}>
          {value}
        </div>
        <div
          id={`${itemName}-increment`}
          className="settings-button"
          onClick={handleIncrementClick}
        >
          +
        </div>
      </div>
    </div>
  );
  
  const SessionIcon = () => (
    <svg className="status-icon" x="0px" y="0px" viewBox="0 0 480 480">
      <g>
        <g>
          <path
            d="M56,416c-30.872,0-56,25.128-56,56c0,4.424,3.576,8,8,8h96c4.424,0,8-3.576,8-8C112,441.128,86.872,416,56,416z
               M16.808,464C19.992,448.36,32.36,436.072,48,432.88V448h16v-15.12c15.64,3.2,28.008,15.48,31.192,31.12H16.808z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M472,344h-14.032c-0.44-1.112-0.896-2.216-1.392-3.328l9.928-9.928c3.128-3.128,3.128-8.184,0-11.312l-33.936-33.936
              c-1.656-1.656-3.84-2.376-6.008-2.272C439.24,276.496,448,263.32,448,248V40c0-22.056-17.944-40-40-40H40C17.944,0,0,17.944,0,40
              v208c0,22.056,17.944,40,40,40h104.4l-30.224,56H112h-12c-15.44,0-28,12.56-28,28s12.56,28,28,28h172c0,4.424,3.576,8,8,8h14.032
              c0.44,1.112,0.896,2.216,1.392,3.328l-9.928,9.928c-3.128,3.128-3.128,8.184,0,11.312l33.936,33.936
              c3.128,3.128,8.184,3.128,11.312,0l9.928-9.928c1.112,0.496,2.216,0.952,3.328,1.392V472c0,4.424,3.576,8,8,8h48
              c4.424,0,8-3.576,8-8v-14.032c1.112-0.44,2.216-0.896,3.328-1.392l9.928,9.928c3.128,3.128,8.184,3.128,11.312,0l33.936-33.936
              c3.128-3.128,3.128-8.184,0-11.312l-9.928-9.928c0.496-1.112,0.952-2.216,1.392-3.328H472c4.424,0,8-3.576,8-8v-48
              C480,347.576,476.424,344,472,344z M16,40c0-13.232,10.768-24,24-24h368c13.232,0,24,10.768,24,24v168H16V40z M40,272
              c-13.232,0-24-10.768-24-24v-24h416v24c0,13.232-10.768,24-24,24h-8h-48h-61.808H157.808H40z M421.152,285.6l-9.824,9.824
              c-1.112-0.496-2.216-0.952-3.328-1.392V288C412.632,288,417.008,287.056,421.152,285.6z M344,288v6.032
              c-1.112,0.44-2.216,0.896-3.328,1.392L333.248,288H344z M316.92,288l-6.896,6.896L305.328,288H316.92z M272,384H100
              c-6.616,0-12-5.384-12-12c0-6.616,5.384-12,12-12h12h6.944H272V384z M132.356,343.992L162.576,288h123.392l12.544,18.408
              l-13.016,13.016c-3.128,3.128-3.128,8.184,0,11.312l9.928,9.928c-0.496,1.112-0.952,2.216-1.392,3.328H280H132.356z M464,392
              h-11.672c-3.496,0-6.576,2.264-7.632,5.592c-1.216,3.864-2.856,7.8-4.88,11.672c-1.616,3.104-1.032,6.888,1.44,9.36l8.288,8.288
              l-22.624,22.624l-8.288-8.288c-2.48-2.472-6.256-3.048-9.36-1.44c-3.872,2.024-7.808,3.664-11.672,4.88
              c-3.336,1.064-5.6,4.144-5.6,7.64V464h-32v-11.672c0-3.496-2.264-6.576-5.592-7.632c-3.864-1.216-7.8-2.856-11.672-4.88
              c-3.104-1.608-6.888-1.032-9.36,1.44l-8.288,8.288l-22.624-22.624l8.288-8.288c2.472-2.472,3.056-6.256,1.44-9.36
              c-2.024-3.872-3.664-7.808-4.88-11.672c-1.064-3.336-4.144-5.6-7.64-5.6H288v-32h11.672c3.496,0,6.576-2.264,7.632-5.592
              c1.216-3.864,2.856-7.8,4.88-11.672c1.616-3.104,1.032-6.888-1.44-9.36l-8.288-8.288l22.624-22.624l8.288,8.288
              c2.472,2.48,6.256,3.056,9.36,1.44c3.872-2.024,7.808-3.664,11.672-4.88c3.336-1.064,5.6-4.144,5.6-7.64V288h32v11.672
              c0,3.496,2.264,6.576,5.592,7.632c3.864,1.216,7.8,2.856,11.672,4.88c3.104,1.616,6.88,1.04,9.36-1.44l8.288-8.288l22.624,22.624
              l-8.288,8.288c-2.472,2.472-3.056,6.256-1.44,9.36c2.024,3.872,3.664,7.808,4.88,11.672c1.064,3.336,4.144,5.6,7.64,5.6H464V392z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M376,328c-26.472,0-48,21.528-48,48s21.528,48,48,48s48-21.528,48-48S402.472,328,376,328z M376,408
              c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32S393.648,408,376,408z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M157.656,61.656l-11.312-11.312l-56,56c-3.128,3.128-3.128,8.184,0,11.312l56,56l11.312-11.312L107.312,112
              L157.656,61.656z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M333.656,106.344l-56-56l-11.312,11.312L316.688,112l-50.344,50.344l11.312,11.312l56-56
              C336.784,114.528,336.784,109.472,333.656,106.344z"
          />
        </g>
      </g>
      <g>
        <g>
          <rect
            x="131.509"
            y="96.019"
            transform="matrix(0.4472 -0.8944 0.8944 0.4472 24.1457 247.1068)"
            width="160.955"
            height="16"
          />
        </g>
      </g>
      <g>
        <g>
          <rect x="312" y="160" width="16" height="16" />
        </g>
      </g>
      <g>
        <g>
          <rect x="344" y="160" width="16" height="16" />
        </g>
      </g>
      <g>
        <g>
          <rect x="376" y="160" width="16" height="16" />
        </g>
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
  
  const Circle = ({ timeLeft, totalTime }) => {
    let normalizedTimeLeft = (101 * timeLeft) / totalTime;
    return (
      <svg className="myCircle" viewBox="0 0 32 32">
        <circle
          r="16"
          cx="16"
          cy="16"
          style={{
            strokeDasharray: `${normalizedTimeLeft} 100`,
            transition: "1s"
          }}
        />
      </svg>
    );
  };
  
  const BreakIcon = () => (
    <svg className="status-icon" x="0px" y="0px" viewBox="0 0 512 512">
      <g>
        <g>
          <path
            d="M487.003,398.523H378.529c17.344-18.966,29.846-42.424,35.55-68.401h35.026c34.681,0,62.896-28.215,62.896-62.895
              s-28.215-62.895-62.896-62.895h-47.229H100.793c-8.652,0-15.667,7.015-15.667,15.667v78.177
              c0,38.629,14.796,73.866,39.013,100.348H58.802c-0.029,0-0.059,0-0.088,0H15.667C7.015,398.524,0,405.539,0,414.191
              s7.015,15.667,15.667,15.667h33.537l12.73,23.991c15.926,30.014,46.926,48.659,80.903,48.659h216.994
              c33.978,0,64.978-18.645,80.904-48.659l12.729-23.99h33.538c8.652,0,15.667-7.015,15.667-15.667S495.656,398.523,487.003,398.523z
               M417.542,298.174v-62.509h31.562c17.403,0,31.561,14.159,31.561,31.561c0,17.403-14.159,31.561-31.561,31.561h-31.569
              C417.536,298.583,417.542,298.379,417.542,298.174z M116.461,298.176v-62.51h269.748v62.51c0,42.438-22.616,79.693-56.428,100.348
              H172.889C139.077,377.867,116.461,340.614,116.461,298.176z M413.057,439.162c-10.477,19.745-30.873,32.011-53.226,32.011H142.838
              c-22.352,0-42.747-12.266-53.225-32.011l-4.936-9.303h333.317L413.057,439.162z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M215.605,106.216c16.428-16.428,21.905-38.324,15.424-61.657c-4.489-16.161-13.116-27.672-14.083-28.932
              c-5.277-6.859-15.137-8.172-21.996-2.897c-6.858,5.276-8.165,15.08-2.89,21.938c0.062,0.083,6.182,8.295,8.978,19.025
              c3.212,12.326,0.801,21.975-7.59,30.365c-16.499,16.501-21.954,37.939-15.357,60.364c4.586,15.592,13.41,26.472,14.4,27.661
              c3.107,3.728,7.588,5.659,12.097,5.659c3.53,0,7.079-1.184,9.998-3.617c6.647-5.539,7.576-15.382,2.036-22.029
              C214.47,149.447,196.16,125.661,215.605,106.216z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M309.219,106.216c16.428-16.428,21.905-38.324,15.424-61.657c-4.489-16.161-13.116-27.672-14.083-28.932
              c-5.277-6.859-15.137-8.172-21.996-2.897c-6.858,5.276-8.165,15.08-2.89,21.938c0.062,0.083,6.182,8.295,8.978,19.025
              c3.212,12.326,0.801,21.975-7.59,30.365c-16.499,16.501-21.954,37.939-15.357,60.364c4.586,15.592,13.41,26.472,14.4,27.661
              c3.107,3.728,7.588,5.659,12.097,5.659c3.53,0,7.079-1.184,9.998-3.617c6.647-5.539,7.576-15.382,2.036-22.029
              C308.085,149.447,289.774,125.661,309.219,106.216z"
          />
        </g>
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
  
  
  

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

