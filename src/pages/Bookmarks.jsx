import Button from "../components/Button"
import Errors from "../components/Errors"

const Bookmarks = () => {
  return (
    <div className="w-full px-3 py-3">
        <h1 className="text-6xl font-bold text-center text-[#3f2a7b] mt-2">Bookmarks system</h1>
        <form className=" w-[70%] mx-auto">
            <input type="text" className="border-[2px] border-[#322c2c] rounded-[10px] outline-none focus:border-blue-400"/>
            <Button buttonText="Add"/>
        </form>

        <Errors paragrapthText="Now every thing is okay" />
        <Errors paragrapthText="Is easy as abding" />
        <Errors paragrapthText="Only need settle down" />
        <Errors paragrapthText="Now I get basic and milestone" />
        <Errors paragrapthText="Imagine This is too easy" />

    </div>
  )
}

export default Bookmarks                                                                                                                                                                                            