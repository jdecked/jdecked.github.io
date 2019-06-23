import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <a
          href="https://github.com/jdecked"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: 'none'}}
        >
          <img
            width="32"
            width="32"
            className="github-icon"
            src="https://unpkg.com/simple-icons@latest/icons/github.svg"
          />
        </a>
        <a
          href="https://linkedin.com/in/jdecaires"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: 'none'}}
        >
          <img
            width="32"
            width="32"
            className="linkedin-icon"
            src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
          />
        </a>
        <a
          href="mailto:justine@minerva.kgi.edu"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: 'none'}}
        >
          <i className="material-icons">email</i>
        </a>
        <a
          href="https://medium.com/@jdecked"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: 'none'}}
        >
          <img
            width="32"
            width="32"
            className="medium-icon"
            src="https://unpkg.com/simple-icons@latest/icons/medium.svg"
          />
        </a>
      </div>
    );
  }
}
