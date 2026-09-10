import './App.css'
import confetti from './assets/Confetti.png'
import pixel from './assets/PixelConfetti.png'

function App() {
  return (
    <main className="page-shell">
      <div className="confetti" aria-hidden="true">
        <img src={pixel} alt="" className="confetti-layer confetti-layer-back" />
        <img src={pixel} alt="" className="confetti-layer confetti-layer-front" />
      </div>
      <h1>21 For 21</h1>
    </main>
  )
}

export default App
