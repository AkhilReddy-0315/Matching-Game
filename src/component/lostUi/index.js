import './index.css'

const LostUi = props => {
  const {count, resetBtn} = props

  const triggerReset = () => {
    resetBtn()
  }

  return (
    <div className="game-inner-con">
      <div className="lost-bg">
        <img
          className="trophy-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="para">YOUR SCORE </p>
        <p className="para">{count}</p>
        <div className="reset-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <button
            className="play-again-btn"
            onClick={triggerReset}
            type="button"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default LostUi
