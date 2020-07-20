import React from 'react'
import { Menu, Container, Dropdown, Header } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <>
      <Menu pointing secondary>
          <Menu.Item>
            <Header as='h2' floated='left' content="Space Share"/>
          </Menu.Item>
          <Menu.Item
            name='Spaces'
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Contact Us'
            />
            <Menu.Item
              name='Log In'
            />
          </Menu.Menu>
        </Menu>
    </>
  )
}

export default NavBar