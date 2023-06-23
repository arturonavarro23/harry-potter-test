import goldenSnitch from 'assets/goldenSnitch.svg'

const Loader = () => {
  return (
    <div className="flex h-full justify-center items-center animate-bounce">
      <img src={goldenSnitch} alt="loader image golden snitch" />
    </div>
  )
}

export default Loader
