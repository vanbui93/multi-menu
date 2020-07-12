import React, { Component } from 'react'
import Nav from './Components/Nav';

const menuList = [
  {
    menu: "Menu 1",
    link: 'link-1',
    submenu: [
      {
        menu: "Sub Menu 2.1",
        link: 'link-2.1',
        submenu: [
          {
            menu: "Sub Menu 3.1",
          },
          {
            menu: "Sub Menu 3.2",
          },
        ]
      },
      {
        menu: "Sub Menu 2.2",
        link: 'link-2.2',
        submenu: [
          {
            menu: "Sub Menu 3",
            link: 'link-sub-3',
          }
        ]
      }
    ]
  },
  {
    menu: "Menu 2",
    link: 'link-2',
    submenu: [
      {
        menu: "Sub Menu 2",
        link: 'link-sub-2',
        submenu: [
          {
            menu: "Sub Menu 3.1",
            link: 'link-sub-3.1',
          },
          {
            menu: "Sub Menu 3.2",
            link: 'link-sub-3.2',
          },
        ]
      }
    ]
  }
];



export default class App extends Component {
  render() {
    return (
      <div>
        <Nav menuList={menuList} />
      </div>
    )
  }
}
