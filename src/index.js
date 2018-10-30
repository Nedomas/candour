import React from 'react'
import _ from 'lodash'

import Container from './components/Container'
import Text from './components/Text'
import Heading from './components/Heading'
import Button from './components/Button'
import Input from './components/Input'
import Code from './components/Code'

import round from './theme/round'
import isSmall from './theme/isSmall'
import theme from './theme'
import levels from './helpers/levels'

const { Provider, Consumer } = React.createContext(theme)
const CandourProvider = ({ theme: value, children }) => (
  <Provider value={_.defaultsDeep(_.cloneDeep(value), theme)}>
    {children}
  </Provider>
)
const CandourConsumer = Consumer

export {
  CandourProvider,
  CandourConsumer,
  Container,
  Text,
  Heading,
  Button,
  Input,
  Code,
  isSmall,
  levels,
}
