import _ from 'lodash'
import { all as knownCssProperties } from 'known-css-properties'
import camelCaseCss from 'camelcase-css'
import step from '@candour/step'

const fullMatch = (key) => (
  _.some(knownCssProperties, (knownProp) => camelCaseCss(knownProp) === key)
)

const selectValue = (val) => {
  if (_.isNumber(val)) return step(val)
  if (_.isBoolean(val) && val) return step(1)

  return val
}

const partialMatch = (key) => (
  _.find(_.reverse(_.sortBy(knownCssProperties, 'length')), (knownProp) =>
    _.startsWith(key, camelCaseCss(knownProp))
  )
)

const partialValue = (key, partial) => (
  _.kebabCase(key.replace(new RegExp(`^${camelCaseCss(partial)}`), ''))
)

export default (props) => {
  return _.map(props, (val, key) => {
    if (fullMatch(key)) return { [key]: selectValue(val) }

    const partial = partialMatch(key)
    if (!partial) return

    return {
      [camelCaseCss(partial)]: partialValue(key, partial)
    }
  })
}