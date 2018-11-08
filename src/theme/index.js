import _ from 'lodash'
import fluid from '@candour/fluid'
import colors from './colors'
import borderRadius from './borderRadius'
import borders from './borders'
import fontFamilies from './fontFamilies'
import levels from '../helpers/levels'

const sizes = [4.5, 2.5, 2, 1.5, 1.25, 1, 0.85, 0.75, 0.65, 0.55]

export default {
  container: levels('fontSize', sizes),
  heading: levels('fontSize', sizes),
  text: levels('fontSize', sizes),
  input: {
    base: {
      border: borders.black,
      padding: 1,
    },
  },
  button: {
    base: {
      backgroundColor: colors.black,
      color: colors.white,
      cursor: 'pointer',
      padding: 1,
    },
  },
  code: {
    base: {
      backgroundColor: colors.almostWhite,
      padding: 1,
      fontFamily: fontFamilies.monospace,
      whiteSpace: 'pre-wrap',
    },
  },
}
