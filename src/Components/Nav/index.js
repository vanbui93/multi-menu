import React, { Component } from 'react';
import './styles.scss';

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

export default Nav;