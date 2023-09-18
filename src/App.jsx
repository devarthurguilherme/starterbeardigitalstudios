//Components
import ComingSoon from "./components/ComingSoon";
import LogoBDS from "./components/LogoBDS";
import TestCountdownHere from "./components/TestCountdownHere";




function App() {
  return (
    <>
      <main className="bg-black">
        <div className="container mx-auto text-white">
          <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="mb-6">
              <LogoBDS/>
            </div>
            <div className="mb-4">
              <ComingSoon/>
            </div>
            <TestCountdownHere/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
