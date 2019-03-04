import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Image, Icon, Grid } from 'semantic-ui-react';

const topLogo = "http://murphyshawaii.com/media/2014/04/murphyshawaii.png";
const midLogo = "http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png";

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image src={topLogo}/></Menu.Item>
            <Menu.Item position="right">Home</Menu.Item>

            <Dropdown item text="About Us" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
                <Dropdown.Item>Catering and Private Events</Dropdown.Item>
                <Dropdown.Item>Upcoming Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>St.Patrick's Day</Menu.Item>

            <Dropdown item text="Menus" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Weekly Specials</Dropdown.Item>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
                <Dropdown.Item>Dinner Menu</Dropdown.Item>
                <Dropdown.Item>Desserts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    const padding = {
      paddingTop: 175,
    };

    return (
        <div className='murphys-background'>
          <Container textAlign='center'>
            <Grid>
              <Grid.Row columns='2' style={padding}>
                <Grid.Column>
                  <Image src={midLogo}/>
                </Grid.Column>
                <Grid.Column>
                  <p>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block
                    off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));