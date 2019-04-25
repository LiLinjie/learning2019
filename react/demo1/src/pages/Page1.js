import React from 'react'
import { Link } from 'react-router-dom'

export default class Page extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/page2">去Page2</Link>
      </div>
    )
  }
}
