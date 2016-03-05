import test from 'ava'
import update from '../src/scripts/update'

test('change-some-prop', t => {
  const state = {
    someProp: 'Initial Value'
  }

  const expected = {
    someProp: 'New Value'
  }

  const actual = update({
    type: 'change-some-prop',
    value: 'New Value'
  }, state)

  t.same(actual, expected)
})

test('change-another-prop-loading', t => {
  const state = {
    loading: ['something']
  }

  const expected = {
    loading: ['anotherProp', 'something']
  }

  const actual = update({
    type: 'change-another-prop-loading'
  }, state)

  t.same(actual, expected)
})

test('change-another-prop-success', t => {
  const state = {
    anotherProp: {},
    loading: ['anotherProp']
  }

  const expected = {
    anotherProp: {
      newKey: 'New Value'
    },
    loading: []
  }

  const actual = update({
    type: 'change-another-prop-success',
    key: 'newKey',
    value: 'New Value'
  }, state)

  t.same(actual, expected)
})

test('change-another-prop-error', t => {
  const state = {
    loading: ['anotherProp'],
    errors: []
  }

  const expected = {
    loading: [],
    errors: [{
      type: 'error-type',
      message: 'error-message'
    }]
  }

  const actual = update({
    type: 'change-another-prop-error',
    error: {
      type: 'error-type',
      message: 'error-message'
    }
  }, state)

  t.same(actual, expected)
})
