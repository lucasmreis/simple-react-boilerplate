export default function (action) {
  console.log(`Received action '${action.type}' in actions channel`)
  console.log(action)
}
