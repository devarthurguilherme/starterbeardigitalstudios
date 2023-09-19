//Components
import ComingSoon from "./components/ComingSoon";
import LogoBDS from "./components/LogoBDS";
import TestCountdownHere from "./components/TestCountdownHere";

//https://dribbble.com/shots/14632599-Air-jordan-shoes-pre-sale-countdown-time-animation-screen?showSimilarShots=true&_=1695101001031
function App() {
  return (
    <>
      <main className="bg-black">
        <div className="container mx-auto text-white">
          <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="mb-10 lg:mb-20">
              <LogoBDS/>
            </div>
            {/*
              <div className="flex flex-col justify-center items-center p-4 bg-red-400">
              <div className="mb-2 md:mb-4 lg:mb-6">
                <ComingSoon/>
              </div>
              <TestCountdownHere/>
            </div>
            */}
            <div className="flex flex-col justify-center items-center p-4 countdown-effect">
              <div className="mb-2 md:mb-4 lg:mb-6">
                <ComingSoon/>
              </div>
              <TestCountdownHere/>
            </div>
          </div>
          <div className="mx-auto container bg-blue-800 flex justify-center p-6">
            <div className="box text-center flex justify-center items-center">
              <h2 className="text-7xl font-bold">02</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
