import React, { Component } from 'react'

const menuList = [
  {
    menu: "Menu 1",
    submenu: [
      {
        menu: "Menu 2",
        submenu: [
          {
            menu: "Menu 3",
            submenu: [
              {
                menu: "Menu 4",
              }
            ]
          }
        ]
      },
      {
        menu: "About"
      }
    ]
  },
  {
    menu: "Liverpool",
    submenu: [
      {
        menu: "Menu 2",
        submenu: [
          {
            menu: "Menu 3"
          }
        ]
      }
    ]
  }
];

const Dropdown = ({ menuList }) => {
  const renderMenu = items => {
    return items.map((item, index) => {
      return (
        <div style={{ marginLeft: 10 }} key={index}>
          {item.menu}
          {item.submenu ? renderMenu(item.submenu) : null}
        </div>
      );
    });
  };

  return <div>{renderMenu(menuList)}</div>;
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Dropdown menuList={menuList} />
      </div>
    )
  }
}
