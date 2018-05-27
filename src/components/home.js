import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 20,
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
      </div>
    </React.Fragment>;
  }
}