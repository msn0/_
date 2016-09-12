import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className='login-wrapper'>
        <a href='https://www.strava.com/oauth/authorize?client_id=13458&response_type=code&redirect_uri=http://localhost&approval_prompt=force'>
          <img src='https://strava.github.io/api/images/LogInWithStrava@2x.png' />
        </a>
      </div>
    );
  }
}

export default Login;
