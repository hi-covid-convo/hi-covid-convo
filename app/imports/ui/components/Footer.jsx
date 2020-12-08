import React from 'react';
import { List, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      padding: '40px 0 40px 0',
      color: 'white',
    };
    const gold = {
      color: '#DDAF78',
    };
    return (
        <footer as="footer4">
          <div style={divStyle} className="ui center aligned container">
            <br/>
            <Grid container stackable columns={4}>
              <Grid.Column>
                <List as='ul'>
                  <List.Item>
                    <List.Content>
                      <Link to='/' style={gold}>Home</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List as='ul'>
                  <List.Item>
                    <List.Content>
                      <Link to='/About' style={gold}>About</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List as='ul'>
                  <List.Item>
                    <List.Content>
                      <Link to='/general' style={gold}>General</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List as='ul'>
                  <List.Item>
                    <List.Content>
                      <Link to='/Resources' style={gold}>Resources</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid>
            <br/>
            <p>Hawaii Covid Convo team</p>
            <p>Glen Larita, Sydney Dempsey, Daniel Nilo, Brian Abad</p>
          </div>
        </footer>
    );
  }
}

export default Footer;
