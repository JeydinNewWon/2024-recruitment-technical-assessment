import { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export function SearchBar() {
    let [display, setDisplay] = useState('none');

    function update() {
      if (display === 'none') {
        setDisplay('block');
      } else {
        setDisplay('none');
      }
      console.log(display);
    }

    return (
      <>
        <div className="flex flex-col justify-center w-full items-center">
          <div className="flex w-5/6 items-center bg-white rounded border-2 border-unilectives-search" onClick={update}>
            <HiMiniMagnifyingGlass className="w-6 h-6 text-unilectives-search mx-2"/>
            <input type="text" className="cursor-pointer bg-transparent w-full py-2 px-3 text-sm text-unilectives-search focus:outline-none placeholder-unilectives-search font-medium" autoComplete="off" placeholder="Search for a course e.g. COMP1511"></input>
          </div>
          <div className="fixed text-black z-[999] px-4 py-2 bg-white rounded-md border-black border-solid border-2 w-[300px]" style={{display: display, left: 'calc(50vw - 115px)', top: 'calc(50vh - 120px)' }}>
              <p>Hi, all! Please stan Archbishop Rhea!</p>
              <img src='./src/assets/rhea.png'></img>
              <button className="hover:bg-[#a10ef1] border-0" onClick={update}>Close</button>
          </div>
        </div>
      </>
    )
}