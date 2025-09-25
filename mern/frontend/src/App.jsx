import Campa from "./Campa"

function App() {
  return (
    <div className="bg-red-300 flex gap-3 text-green-900">
      hello
      {Campa()}
      <Campa />
      <Campa></Campa>
    </div>
  )
}
export default App