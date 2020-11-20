import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

/** Renders the CECE chat-bot page broken up into two columns. One for instructions, and the other for Cece. */
/** Will also include a link to a survey page, where users can rate how well Cece answered their questions. */
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
            <Header as='h4'>
              Let us know what you think about Cece, and please fill out this survey to let us know how helpful Cece
              was!
            </Header>
          </Grid.Column>

          <Grid.Column textAlign='center'>

            <Header as='h1'>Ask Now!</Header>
            <iframe width="450" height="320" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/efa452bd-9d6e-4580-9aa0-5800d8027fdf"></iframe>
          </Grid.Column>
        </Grid>
    );
  }
}
