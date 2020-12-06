import React from 'react';
import { Container, Header, List, Icon } from 'semantic-ui-react';

export default class Resources extends React.Component {
  render() {
    const white = { color: 'white' };
    const gold = {
      color: '#DDAF78',
    };
    return (
        <div className="spacing" id="resources-page">
          <Container text style={white}>
            <Header as='h1' textAlign='center' inverted>Resources</Header>
            <p>Below are some of the resources used to gather information on COVID-19. You can also find the resources
              used from Cece, as she provides educated answers with links for most of her answers.
            </p>
            <List as='ul'>
              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Safety</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold} href='https://hawaiicovid19.com/everyday-prevention/'>hawaiicovid19.com -
                      prevention</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Covid at Workplace</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href=' https://hawaiicovid19.com/wp-content/uploads/2020/08/What-to-Do-if-a-Person-at-Your-Worksite-has-COVID-19.pdf'> hawaiicovid19.com
                      - workplace</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>News</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://health.hawaii.gov/coronavirusdisease2019/ and https://hawaiicovid19.com/news/'>
                      COVID-19 news in Hawaii</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Cases</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold} href='https://health.hawaii.gov/coronavirusdisease2019/'>health.hawaii.gov - cases
                      in Hawaii</a>
                  </List.Description>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold} href='https://www.worldometers.info/coronavirus/country/us'>Cases in the U.S.</a>
                  </List.Description>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold} href='https://www.worldometers.info/coronavirus/'>Cases worldwide</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>COVID-19 Tracing</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://health.hawaii.gov/coronavirusdisease2019/what-you-should-know/what-hdoh-is-doing/'>
                      COVID-19 Tracing in Hawaii</a>
                  </List.Description>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold} href='https://hawaiicovid19.com/safe-gatherings/'>Safety</a>
                  </List.Description>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/community/large-events/considerations-for-events-gatherings.html'>Number
                      of People</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Animals and COVID-19</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/pets.html'>
                      Pets</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href=' https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/positive-pet.html'>
                      Pet Testing</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Survival Rate</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/library/covid19/112420_covidupdate.html'>
                      Recent statistics on survival rate</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>General</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.webmd.com/lung/news/20200604/covid19-loss-of-smell-taste-might-be-long-term#1'>
                      Senses returning post COVID-19</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.today.com/health/coronavirus-loss-smell-taste-will-it-come-back-t188574'>
                      How long until senses return
                    </a>
                  </List.Description>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/covid-19-frequently-asked-questions'>
                      Smoking
                    </a>
                  </List.Description>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/end-home-isolation.html'>
                      How long does it last?
                    </a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html'>
                      Grocery Shopping
                    </a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/returning-to-work.html'>
                      Returning to work
                    </a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.helpguide.org/articles/healthy-living/exercise-during-coronavirus.htm'>
                      Exercise
                    </a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/downloads/2019-ncov-factsheet.pdf'>
                      What is COVID-19?
                    </a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.webmd.com/lung/coronavirus-history#:~:text=Experts%20say%20SARS%2DCoV,“wet%20markets'>
                      Where did it come from?
                    </a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/end-home-isolation.html'>
                      How long does it last?
                    </a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Masks</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href=' https://www.oneoahu.org/masks'>
                      Rules and Regulations</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://hawaiicovid19.com/mask-guidance/'>
                      Guidance</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://hawaiicovid19.com/mask-guidance/'>
                      Guidance</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Symptoms</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'>
                      Common and Severe Symptoms</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://hawaiicovid19.com/symptoms/'>
                      More Symptoms</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Spread</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://hawaiicovid19.com/wp-content/uploads/2020/03/Fact-Sheet-Kupuna_032420.pdf'>
                      Elderly</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'>
                      How is it spread?</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Testing</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://health.hawaii.gov/coronavirusdisease2019/what-you-can-do/if-you-become-sick/'>
                      Testing positive</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-air-travel.html'>
                      Before travel</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://covidfreehawaii.com/testing-locations/ and https://doineedacovid19test.com/'>
                      Testing in Hawaii</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href=' https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html'>
                      Types of tests</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.webmd.com/lung/coronavirus-testing#3-7'>
                      Results</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://hawaiicovid19.com/testing-isolation-quarantine/'>
                      What to expect</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://faq.coronavirus.gov/symptoms-and-testing/#should-i-be-tested-for-covid-19'>
                      When should I get tested?</a>
                  </List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header text style={white}>Travel</List.Header>
                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href=' https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html'>
                      Best time to travel during COVID-19</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://hawaiicovid19.com/travel/ or https://health.hawaii.gov/coronavirusdisease2019/travel/travel-advisories/'>
                      Travelling to Hawaii</a>
                  </List.Description>

                  <List.Description>
                    <Icon inverted name='right triangle'/>
                    <a style={gold}
                       href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html'>
                      Travelling safely</a>
                  </List.Description>
                </List.Content>
              </List.Item>

            </List>

          </Container>
        </div>
    );
  }
}
