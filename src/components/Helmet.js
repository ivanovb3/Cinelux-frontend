import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Cinelux'

class TitleManager extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>       
      </>
    )
  }
}
export default TitleManager