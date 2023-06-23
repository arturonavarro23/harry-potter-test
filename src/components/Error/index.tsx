import seamus from 'assets/seamus-finnigan.gif'
const Error = () => {
  return (
    <section className="flex flex-col gap-5 justify-center items-center text-white w-full h-full">
      <img
        src={seamus}
        className="border-4 border-[#F3D692] rounded"
        alt="seamus"
      />
      <span className="text-2xl text-[#F3D692] font-PPEikoThin tracking-wide">
        Oopsie, something is not working...
      </span>
    </section>
  )
}

export default Error
