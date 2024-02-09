export function Dropdown() {
    return (
        <div className='w-5/6 justify-center items-center'>
            <div className="flex-1 mt-4 min-w-[150px] max-w-[200px]">
                <button className="relative flex items-center justify-between gap-2 w-full text-black cursor-pointer bg-white py-2 px-4 text-left font-normal dropdown-border shadow-md">
                Alphabetical (A-Z)
                </button>
            </div>
        </div>
    )
}