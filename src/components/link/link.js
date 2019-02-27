import React from 'react';
import './link.css'

const Link = ({ gitLink }) => {

  return (
      <div className={'footer-link'}>
        <a target={'_blank'} href={ gitLink }>This App is on GitHub</a>
      </div>
  )
};

export default Link;