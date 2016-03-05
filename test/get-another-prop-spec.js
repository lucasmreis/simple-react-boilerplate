import 'babel-polyfill'
import test from 'ava'
import spy from 'spy'
import getAnotherProp from '../src/scripts/async-actions/get-another-prop'

test('get-another-prop', async t => {
  const dispatch = spy()

  await getAnotherProp(dispatch, 'Some Prop')

  t.same(dispatch.called, true)
  t.same(dispatch.callCount, 2)
  t.same(dispatch.calls[0].calledWith({ type: 'change-another-prop-loading' }), true)
  t.same(dispatch.calls[1].calledWith({
    type: 'change-another-prop-success',
    key: 'someKey',
    value: 'Some Prop'
  }), true)
})
