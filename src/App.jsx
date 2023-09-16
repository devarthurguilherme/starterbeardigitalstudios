//Components
import ComingSoon from "./components/ComingSoon";
import LogoBDS from "./components/LogoBDS";
import StayTuned from "./components/StayTuned";
import Loader from "./components/Loader";


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
           {/*  
            <div className="">
              <StayTuned/>
            </div>
            
            <div>
              <Loader />
            </div>*/}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
