import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginTop: 20,
  width: '110px',
};

export default class Home extends React.Component {
  render() {
    return <React.Fragment>
      <div className='home_titre'>
        KIRIL
      </div>
      <div className='home_menu'>
        <Link to='/alphabet'>
          <RaisedButton label="Alphabet" primary={true} style={style} />
        </Link>
        <Link to='/words'>
          <RaisedButton label="Words" primary={true} style={style} />
        </Link>
        <Link to='/contact'>
          <RaisedButton label="Contact" primary={true} style={style} />
        </Link>
      </div>
    </React.Fragment>;
  }
}