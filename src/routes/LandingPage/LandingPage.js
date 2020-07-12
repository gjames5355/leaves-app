import React from 'react';
import './LandingPage.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <article>
        <h2>Leaves allows you to track your entire family history.</h2>
        <div className='landing'>
          <section className='how-to-use'>
            <h3 className='heading'> 1. Register an account</h3>
            <img
              src='static/register.png'
              alt='Register button on the top right'
            ></img>
          </section>
          <section className='how-to-use'>
            <h3 className='heading'>
              {' '}
              2. Click on your name to open your card
            </h3>
            <img
              src='static/startadding.png'
              alt='Find add parents button'
            ></img>
          </section>
          <section className='how-to-use'>
            <h3 className='heading'>
              3. Click add parents button and add your ancestors
            </h3>
            <img
              src='static/add.png'
              alt='Form to add your parents will open'
            ></img>
          </section>
          <section className='how-to-use'>
            <h3 className='heading'>4. Create your family tree</h3>
            <img src='static/tree.png' alt='Family tree view'></img>
          </section>
        </div>
        <p className='cred'>
          Do you want to demo before creating an account? Take a look at Joe
          Doe's family tree (user name: joe, password: Joe2joe!)
        </p>
      </article>
    );
  }
}
