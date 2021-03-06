import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
/** Only users that will be able to log in are admin users, and they will have one extra tab in the navbar called
 * statistics, which will link them to a statistics page for the application.
 */
class NavBar extends React.Component {
  render() {
    const menuStyle = {
      marginBottom: '10px',
      backgroundColor: '#eff5fd',
      border: 0,
      borderRadius: 0,
      margin: 0,
      boxShadow: 'none',
      position: 'sticky',
      zIndex: 1,
    };
    return (
        <Menu style={menuStyle} attached="top" borderless fluid stackable>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image src='../images/logo2NEW.png' size='tiny'/>
          </Menu.Item>
          <Menu.Item id="navbar-about" as={NavLink} activeClassName="" exact to="/about">
            About <Icon name='info circle'/>
          </Menu.Item>
          <Menu.Item id="navbar-general" as={NavLink} activeClassName="" exact to="/general">
            General Knowledge <Icon name='question circle outline'/>
          </Menu.Item>
          {this.props.currentUser ? (
              <Menu.Item id = "navbar-analytics" as={NavLink} activeClassName="active" exact to="/analytics" key='analytics'>
                Analytics
                <Icon name='line graph'/>
              </Menu.Item>
          ) : ''}
            <Menu.Item position='right'>
              {this.props.currentUser === '' ? (
                  <Dropdown id="login-dropdown" text='Login' pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact
                                     to="/signin"/>
                      <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact
                                     to="/signup"/>
                    </Dropdown.Menu>
                  </Dropdown>
              ) : (
                  <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact
                                     to="/signout"/>
                    </Dropdown.Menu>
                  </Dropdown>
              )}
            </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
