import { SearchBar } from "../SearchBar/SearchBar";
import { Dropdown } from "../Dropdown/Dropdown";
import { CourseGrid } from "../CourseGrid/CourseGrid";

export function LandingBody() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <SearchBar/>
      <Dropdown/>
      <CourseGrid/>
    </div>
  );
}