import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Link } from "react-scroll";

// Styled Components
import { Flex, Box } from "grid-styled";
import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";

import Container from "../style/Container";
import Header from "../components/Header";
import Body from "../style/Body";
import ContactLink from "../style/ContactLink";

const Signature = styled.div`
  max-width: 250px;
`;

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Flex column>
            <Box p={3}>
              <Box>
                <Header>
                  <h1>HELLO</h1>
                </Header>
              </Box>
              <Box mt={2}>
                <Body>
                  <p>
                    I'm Andy. I'm a web developer. In a previous life, my best
                    friend and I started a company called CytexOne. It focused
                    on IoT and Smart Home Automation. It lasted 15 years. I'm
                    proud of the team & company that we built. Sadly, we had to
                    shut our doors.
                  </p>
                  <p>
                    Now, I am taking my professional journey solo. I would love
                    to bring my passion and skills to a new & exciting company.
                    If you're doing something clever with technology, then I'm
                    looking to work with you. Thank you for looking around, and
                    please{" "}
                    <Link
                      to="contact"
                      smooth={true}
                      duration={1500}
                      offset={-100}
                      animation="easeInOutQuart"
                    >
                      <ContactLink>contact</ContactLink>
                    </Link>{" "}
                    me if we can work together.
                  </p>
                  <h6>A DEDICATION</h6>
                  <p>
                    This site is dedicated to my mom and dad. To my dad because
                    he gave me the gifts of patience & learning. To my mom
                    because she gave me the gifts of persistence & love.
                  </p>
                </Body>
              </Box>
              <Box>
                <Signature>
                  <Img sizes={this.props.logo.sizes} />
                </Signature>
              </Box>
            </Box>
          </Flex>
        </Container>
      </ThemeProvider>
    );
  }
}
