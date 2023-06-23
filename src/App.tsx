import Header from 'components/Header'
import Landing from 'components/Landing'

function App() {
  return (
    <main className="bg-dark bg-center bg-no-repeat bg-cover h-screen w-screen">
      <div className="container m-auto h-full  flex flex-col">
        <Header />
        <Landing />
      </div>
    </main>
  )
}

export default App
