import { useState } from "react";

export function Title() {
  const [colour, setColour] = useState('rgb(18 121 242)');
  return (
    <div className='flex flex-row w-full justify-center items-center mt-10'>
      <div className="flex flex-row w-5/6 space-0 justify-between items-left">
        <div className="flex flex-col w-full gap-3 text-left">
          <p id='devsocpresents' className="text-black drop-shadow-md text-base">DevSoc presents</p>
          <h1 id='unilectivestitle' className="select-none cursor-pointer justify-center font-bold text-7xl" style={{color: colour}} onClick={() => setColour(`rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`)}>unilectives</h1>
          <p id='onestopshop' className="justify-center text-black font-semibold">Your one-stop shop for UNSW course and elective reviews.</p>
        </div>
      </div>
    </div>

  );
}