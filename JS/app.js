function App() {
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [isSignUp, setIsSignUp] = React.useState(false);
  
    const handleSignIn = (event) => {
      event.preventDefault();
      setIsSignedIn(true); // You can replace this with actual authentication logic
    };
  
    const handleSignUp = (event) => {
      event.preventDefault();
      setIsSignUp(false);
      setIsSignedIn(true); // Simulate sign-up and signing in
    };
  
    return (
      <div className="form-container">
        {!isSignedIn ? (
          isSignUp ? (
            <SignUp onSignUp={handleSignUp} onSwitch={() => setIsSignUp(false)} />
          ) : (
            <SignIn onSignIn={handleSignIn} onSwitch={() => setIsSignUp(true)} />
          )
        ) : (
          <Dashboard />
        )}
      </div>
    );
  }
  
  function SignIn({ onSignIn, onSwitch }) {
    return (
      <form onSubmit={onSignIn}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        <p className="text-center">
          Don't have an account? <a href="#" onClick={onSwitch}>Sign Up</a>
        </p>
      </form>
    );
  }
  
  function SignUp({ onSignUp, onSwitch }) {
    return (
      <form onSubmit={onSignUp}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="text-center">
          Already have an account? <a href="#" onClick={onSwitch}>Sign In</a>
        </p>
      </form>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2 className="text-center">Street Light Monitoring Dashboard</h2>
        <CameraSection />
        <WeatherSection />
        <DimmerControl />
        <MotionStatus />
      </div>
    );
  }
  
  function CameraSection() {
    return (
      <div className="camera-section">
        <h3>Surveillance Camera</h3>
        <video id="cameraFeed" controls autoplay></video>
      </div>
    );
  }
  
  function WeatherSection() {
    return (
      <div className="sensor-section">
        <h3>Weather & Humidity</h3>
        <p>Temperature: <span id="temperature">--</span> °C</p>
        <p>Humidity: <span id="humidity">--</span>%</p>
        <p>Weather Condition: <span id="weather">--</span></p>
      </div>
    );
  }
  
  function DimmerControl() {
    const [brightness, setBrightness] = React.useState(50);
  
    return (
      <div className="dimmer-section">
        <h3>AC Dimmer Control</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          className="form-control-range"
        />
        <p>Brightness Level: {brightness}%</p>
      </div>
    );
  }
  
  function MotionStatus() {
    return (
      <div className="motion-section">
        <h3>Motion Detection</h3>
        <p>Status: <span id="motionStatus">No Motion</span></p>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  