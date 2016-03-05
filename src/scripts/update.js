/**

  ACTIONS

  ( optionally use this comment to document the actions )

  'change-some-prop'
    ==> { type, value }

  'change-another-prop-loading'
    ==> { type }

  'change-another-prop-success'
    ==> { type, key, value }

  'change-another-prop-error'
    ==> { type, errorMessage }

**/

export default function (action, state) {
  const { someProp, anotherProp, loading, warnings, errors } = state
  const { type } = action

  if (type === 'change-some-prop') {
    const { value } = action
    return { ...state, someProp: value }

  } else if (type === 'change-another-prop-loading') {
    return { ...state, loading: [ 'anotherProp', ...loading ] }

  } else if (type === 'change-another-prop-success') {
    const { key, value } = action
    return {
      ...state,
      anotherProp: { ...anotherProp, [key]: value },
      loading: loading.filter(l => l !== 'anotherProp')
    }

  } else if (type === 'change-another-prop-error') {
    const { error } = action
    return {
      ...state,
      errors: [ error, ...errors ],
      loading: loading.filter(l => l !== 'anotherProp')
    }

  } else {
    return state
  }
}

// export default function (action, state) {
//   const { someProp, anotherProp, loading, warnings, errors } = state
//
//   switch (action.type) {
//     case 'change-some-prop':
//       return { ...state, someProp: action.value }
//
//     case 'change-another-prop-loading':
//       return { ...state, loading: [ 'anotherProp', ...loading ] }
//
//     case 'change-another-prop-success':
//       const newAnotherProp = { ...anotherProp, [action.key]: action.value }
//       return {
//         ...state,
//         anotherProp: newAnotherProp,
//         loading: loading.filter(l => l !== 'anotherProp')
//       }
//
//     case 'change-another-prop-error':
//       const err = { entity: 'anotherProp', message: action.errorMessage }
//       const newErrors = [ err, ...errors ]
//       return { ...state, errors: newErrors, loading: loading.filter(l => l !== 'anotherProp') }
//
//     default:
//       return state
//   }
// }
