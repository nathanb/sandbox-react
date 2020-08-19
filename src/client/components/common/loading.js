import React from 'react'
import DefaultLayout from '../start-context/default-layout'
import Icon from './icon'

const Loading = () => (
  <DefaultLayout>
    <p className="lead">Loading.... <Icon spin icon="sync"/></p>
  </DefaultLayout>
)

export default Loading
