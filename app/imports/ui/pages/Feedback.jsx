import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, RadioField, SelectField, SubmitField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Reviews } from '../../api/review/Reviews';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  rating: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
  howHelpfulWasCece: {
    type: String,
    allowedValues: ['Very helpful', 'Somewhat helpful', 'Not very helpful', 'Not helpful at all'],
  },
  wouldYouRecommendCece: {
    type: String,
    allowedValues: ['Yes', 'No'],
  },
  whatCanBeImproved: String,
  finalThoughts: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class Feedback extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { rating, howHelpfulWasCece, wouldYouRecommendCece, whatCanBeImproved, finalThoughts } = data;
    Reviews.collection.insert({ rating, howHelpfulWasCece, wouldYouRecommendCece, whatCanBeImproved, finalThoughts },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Form successfully completed', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <div className="spacing" id="feedback-page">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Feedback</Header>
              <Header as="h4" textAlign="center" inverted>Please complete the form below.</Header>
              <AutoForm ref={ref => {
                fRef = ref;
              }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
                <Segment>
                  <SelectField name='rating' id='ratingField'/>
                  <RadioField name='howHelpfulWasCece' id='helpfulField'/>
                  <RadioField name='wouldYouRecommendCece' id='recommendField'/>
                  <LongTextField name='whatCanBeImproved' id='improveField'/>
                  <LongTextField name='finalThoughts' id='thoughtField'/>
                  <SubmitField value='Submit' id='submitSurvey'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Feedback;
