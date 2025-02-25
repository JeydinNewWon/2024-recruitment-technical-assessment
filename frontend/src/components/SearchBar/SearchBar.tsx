import { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export function SearchBar() {
    let [display, setDisplay] = useState('none');

    return (
      <>
        <div className="flex flex-col justify-center w-full items-center">
          <div className="flex w-5/6 items-center bg-white rounded border-2 border-[#9cade9]" onClick={() => setDisplay('block')}>
            <HiMiniMagnifyingGlass className="w-6 h-6 text-unilectives-search mx-2" style={{color: '#9cade9'}}/>
            <input id="searchbar" type="text" className="cursor-pointer bg-transparent w-full py-2 px-3 text-sm focus:outline-none placeholder-unilectives-search font-medium" autoComplete="off" placeholder="Search for a course e.g. COMP1511" style={{color: 'rgb(156 173 233)'}}></input>
          </div>
          <div className="fixed text-black z-[999] px-4 py-2 bg-white rounded-md border-black border-solid border-2 w-[300px]" style={{display: display, left: 'calc(50vw - 115px)', top: 'calc(50vh - 120px)' }}>
              <p>Hi, all! Please stan Archbishop Rhea!</p>
              <img src='./src/assets/rhea.png'></img>
              <button className="shadow-md bg-[#42da9f] text-white border-0" onClick={() => setDisplay('none')}>Close</button>
          </div>
        </div>
      </>
    )
}