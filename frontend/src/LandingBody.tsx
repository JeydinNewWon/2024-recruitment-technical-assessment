import { SearchBar } from "./components/SearchBar/SearchBar";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { CourseGrid } from "./components/CourseGrid/CourseGrid";

export function LandingBody() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <SearchBar/>
      <Dropdown/>
      <CourseGrid/>
    </div>
  );
}