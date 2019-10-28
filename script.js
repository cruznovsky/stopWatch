class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      isRunning: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  start = () => {
    this.setState({
      isRunning: true
    })
    this.watch = setInterval(() => this.step(), 10);
  };

  step() {
    this.calculate();
  }

  stop = () => {
    clearInterval(this.watch);
    this.setState({
      isRunning: false,
    })
  };

  reset = () => {
    if (!this.isRunning) {
      this.setState({
        miliseconds: 0,
        seconds: 0,
        minutes: 0,
      })
    }
    else {
      alert('Stop stopwatch!');
    }
  };

  calculate = () => {
    this.setState({
      miliseconds: this.state.miliseconds + 1
    });
    if (this.state.miliseconds >= 100) {
      this.state.seconds += 1;
      this.state.miliseconds = 0;
    }
    if (this.state.seconds >= 60) {
      this.state.minutes += 1;
      this.state.seconds = 0;
    }
  };

  render() {
    return (
      <div>
        <h1> Stopwatch </h1>
        <p className="stopwatch" > {
          `${missZero(this.state.minutes)}:${missZero(
            this.state.seconds
          )}:${missZero(this.state.miliseconds)}`
        }
        </p>
        <nav className="controls" >
          {this.state.isRunning === false && (<button onClick={this.start} className="button" id="start">Start </button>)}
          {this.state.isRunning === true && (<button onClick={this.stop} className="button" id="stop" >Stop
          </button>)}
          <button onClick={this.reset} className="button" id="reset" >Reset
          </button>
        </nav>
      </div>
    );
  }
}

let missZero = value => {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
};

ReactDOM.render(< Stopwatch />, document.getElementById("app"));