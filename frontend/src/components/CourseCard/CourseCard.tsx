
interface CourseCardProps {
  course_prefix: string;
  course_code: number;
  course_title: string;
  average_stars: number;
  total_reviews: number;
  offered_terms: string[];
};

export function CourseCard({
  course_prefix,
  course_code,
  course_title, 
  average_stars,
  total_reviews,
  offered_terms
}: CourseCardProps) {
  return (
      <div className="box-border px-6 py-7 hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer text-2xl">
        <div className="flex flex-wrap justify-between">
          <h2 className="text-black font-bold w-[8ch]">{course_prefix + course_code.toString()}</h2>
          <div className="text-left">
            <div className="relative inline-block">
              <span className="text=[#999999] opacity-30">★★★★★</span>
              <span className="bg-unilectives-purple text-transparent select-none bg-clip-text absolute inset-0" style={{width: `${(average_stars/5.0) * 100.0 }%`}}>★★★★★</span>
            </div>
            <p className="text-xs font-normal" style={{color: 'rgb(152, 152, 152)'}}>{total_reviews} reviews</p>
          </div>
        </div>
        <p className="text-left text-sm font-normal h-16 break-all" style={{color: 'black'}}>{course_title}</p>
        <div className="flex flex-wrap gap-3 text-xs text-black font-normal">
          {offered_terms.map((term) => (
             <span className="rounded-full py-1 px-2 unilectives-tag">{term}</span>
          ))}
        </div>
      </div>
  );
}