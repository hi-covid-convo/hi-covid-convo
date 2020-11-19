import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class Cece extends React.Component {
  render() {
    return (
        <Grid container centered stackable columns={2}>

          <Grid.Column textAlign='center'>
            <Header as='h1'>Meet Cece!</Header>
            <Header as='h3'>
              Meet the Hawaii Covid-19 chat-bot, Cece! If you have any questions that you have wanted to
              ask about Covid-19, you can just ask in the message box to the right, and Cece will be able to help you!
            </Header>
            <Header as='h3'>
              Whether you are unsure of what the current Covid-19 rules and regulations in Hawaii are, or if you want to
              find Covid-19 testing locations on the island, Cece will be able to help you and provide the appropriate
              sources for you so you don&apos;t have to do any research or searching!
            </Header>
          </Grid.Column>

          <Grid.Column textAlign='center'>

            <Header as='h1'>Ask Now!</Header>
          </Grid.Column>

        </Grid>
    );
  }
}
