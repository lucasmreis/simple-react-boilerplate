import React from 'react'

import getAnotherProp from '../async-actions/get-another-prop'

export default ({ appState, dispatch }) => (
  <div>
    <h2>Application State</h2>
    <pre>{JSON.stringify(appState, null, '  ')}</pre>

    <h3>Simple Action Example</h3>
    <p>
      <input
        type="text"
        value={appState.someProp}
        onChange={e => dispatch({ type: 'change-some-prop', value: e.target.value })} />
    </p>

    <h3>Async Action Example</h3>
    <p>
      <button onClick={() => getAnotherProp(dispatch, appState.someProp)}>
        Change "someProp" with "anotherProp" value
      </button>
    </p>
  </div>
)
