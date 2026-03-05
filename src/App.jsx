import CardList from "./components/CardList"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Merveille's ID Card Generator
      </h1>

      <CardList />
    </div>
  )
}

export default App