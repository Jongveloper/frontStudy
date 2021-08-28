import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <>
        <nav className="navbar">
          <i className="fas fa-leaf leaf" />
          <span>Habit Tracker</span>
          <span className="habit-count">{this.props.totalCount}</span>
        </nav>
      </>
    );
  }
}

export default Navbar;
