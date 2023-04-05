import { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Header,
  Icon,
  Label,
  Menu,
  MenuItem,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Navi = () => {
  const trigger = (
    <span style={{ fontWeight: "bold", fontSize: 14 }}>
      <Icon name="user" /> Hello, Bob
    </span>
  );

  const optionsUser = [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>Bob Smith</strong>
        </span>
      ),
      disabled: true,
    },
    { key: "profile", text: "Your Profile" },
    { key: "stars", text: "Your Stars" },
    { key: "explore", text: "Explore" },
    { key: "integrations", text: "Integrations" },
    { key: "help", text: "Help" },
    { key: "settings", text: "Settings" },
    { key: "sign-out", text: "Sign Out" },
  ];
  const options = [
    {
      key: "TR",
      text: "TR",
      value: "TR",
      content: "TR",
    },
    {
      key: "EN",
      text: "EN",
      value: "EN",
      content: "EN",
    },
  ];
  return (
    <div>
      <Menu size="small">
        <Container fluid>
          <Menu.Item name="home" />
          <div className="ui right aligned category search item w-80">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search animals..."
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>

          <Menu.Menu position="right">
            <Menu.Item>
              <Dropdown trigger={trigger} options={optionsUser} />
            </Menu.Item>
            <Menu.Item name="cart" link>
              <Icon name="cart" size="large" />
              <span style={{ fontWeight: "bold", fontSize: 14 }}>Cart</span>
              <Label color="red" horizontal size="small">
                1
              </Label>
            </Menu.Item>
            <Menu.Item>
              <Header as={"h5"}>
                <Icon name="world" />
                <Header.Content>
                  <Dropdown
                    inline
                    header="Lang"
                    options={options}
                    defaultValue={options[0].value}
                  />
                </Header.Content>
              </Header>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};
export default Navi;
