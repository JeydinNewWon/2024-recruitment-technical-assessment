import { CourseCard } from "../CourseCard/CourseCard";

const courseData = [
  {
    "course_prefix": "COMP",
    "course_code": 1511,
    "course_title": "Programming Fundamentals",
    "average_stars": 4.8,
    "total_reviews": 68,
    "offered_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 1531,
    "course_title": "Software Engineering Fundamentals",
    "average_stars": 3.9,
    "total_reviews": 47,
    "offered_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 1521,
    "course_title": "Computer Systems Fundamentals",
    "average_stars": 4,
    "total_reviews": 40,
    "offered_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 2521,
    "course_title": "Data Structures and Algorithms",
    "average_stars": 4,
    "total_reviews": 36,
    "offered_terms": [
      "Summer", "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 2511,
    "course_title": "Object-Oriented Design & Programming",
    "average_stars": 3,
    "total_reviews": 33,
    "offered_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 3311,
    "course_title": "Database Systems",
    "average_stars": 4,
    "total_reviews": 33,
    "offered_terms": [
      "Term 1", "Term 3"
    ]
  }
];

export function CourseGrid() {
  return (
    <div className="grid grid-cols-3 gap-12 mt-10 w-5/6 items-center text-black mb-10">
      {
        courseData.map((course) => (
        <CourseCard course_prefix={course.course_prefix} course_code={course.course_code}
        course_title={course.course_title} average_stars={course.average_stars} total_reviews={course.total_reviews} 
        offered_terms={course.offered_terms}></CourseCard>
      ))}
    </div>
  );
}