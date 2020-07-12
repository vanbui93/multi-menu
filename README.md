Menu đa cấp đơn giản <br>

File Nav
```js
const Dropdown = ({ menuList }) => {
  const renderMenu = items => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <a href={(item.link) ? item.link : ''}>{item.menu}</a>
          <ul>
            {item.submenu ? renderMenu(item.submenu) : null}
          </ul>
        </li>
      );
    });
  };

  return <ul className="dropdown-menu">{renderMenu(menuList)}</ul>;
};


class Nav extends Component {
  render() {
    const { menuList } = this.props;
    return (
      <div>
        {Dropdown({ menuList })}
      </div>
    )
  }
}
```
file App.js
```js
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
    }
]

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav menuList={menuList} />
      </div>
    )
  }
}
```