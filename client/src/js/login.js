import React from 'react';
import Header from './header';
import Button from './button';

function Login () {
      return (
      <div>
       <Header />

        <div className="login">
          <Button text={"Login with Facebook"}> </Button>
          <Button text={"Login with Google"}> </Button>
          <Button text={"Play as Guest"}> </Button>
        </div>
      
      </div>
    )
}

export default Login;