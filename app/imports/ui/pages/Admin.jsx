import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class Admin extends React.Component {
  render() {
    const white = { color: 'white' };
    return (
        <div className="spacing" id="admin-page">
          <Container text style={white}>
            <Header as='h1' textAlign='center' inverted>Admin Page</Header>
          </Container>
        </div>
    );
  }
}
