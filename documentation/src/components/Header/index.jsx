import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ title, versions = ['1.0'] }) => <div className='container'>
    <div className='title-container'>
      <div className='title-text'>{ title }</div>
    </div>
    <select name='version'>
      {
        versions.map(version =>
          <option key={ version } value={ version }>{ version }</option>
        )
      }
    </select>
  </div>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  versions: PropTypes.arrayOf(PropTypes.string),
};

export default Header;
