import Particles from './particles';

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <h1 className="text-white text-6xl font-bold">Coming Soon</h1>
        <div className='absolute w-screen h-screen'>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
    </>
  )
}

export default App
