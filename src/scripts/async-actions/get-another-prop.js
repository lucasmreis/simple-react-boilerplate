import { sleep } from 'medium'

export default async (dispatch, someProp) => {
  dispatch({ type: 'change-another-prop-loading' })

  try {
    // do some async work
    await sleep(1000)
    dispatch({ type: 'change-another-prop-success', key: 'someKey', value: someProp })

  } catch (e) {
    dispatch({ type: 'change-another-prop-error', errorMessage: 'Could not change anotherProp.' })
  }
}
