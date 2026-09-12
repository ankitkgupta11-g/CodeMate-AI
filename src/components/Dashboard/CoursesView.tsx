import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { COURSES } from '../../data/courses';
import { Course, Chapter } from '../../types';
import {
  BookOpen,
  ArrowRight,
  Clock,
  CheckCircle2,
  Lock,
  Search,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

export const CoursesView: React.FC = () => {
  const { state, navigateTo } = useApp();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourseSlug, setExpandedCourseSlug] = useState<string | null>(null);

  const filteredCourses = COURSES.filter(course => {
    const matchesDiff = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiff && matchesSearch;
  });

  const getCourseProgress = (course: Course) => {
    const totalChapters = course.chapters.length;
    if (totalChapters === 0) return 0;
    const completedCount = course.chapters.filter(ch =>
      state.completedChapters.includes(ch.id)
    ).length;
    return Math.round((completedCount / totalChapters) * 100);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">
            Courses Catalog
          </h1>
          <p className="text-xs sm:text-sm text-[#5a705d] mt-1">
            Master artificial intelligence, machine learning, and modern engineering tracks.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5a705d]" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-black/10 rounded-2xl text-xs font-medium outline-none focus:border-[#3cc74f]"
            />
          </div>

          {/* Difficulty pills */}
          <div className="flex items-center gap-1 bg-white/80 p-1 rounded-2xl border border-black/10 w-full sm:w-auto overflow-x-auto">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(diff => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDifficulty === diff
                    ? 'bg-[#3cc74f] text-white shadow-xs'
                    : 'text-[#5a705d] hover:text-[#102312]'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map(course => {
          const progress = getCourseProgress(course);
          const isExpanded = expandedCourseSlug === course.slug;
          const isEnrolled = state.enrolledCourses.includes(course.slug) || progress > 0;

          return (
            <div
              key={course.slug}
              className="bg-white/85 border border-white/80 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Banner Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-neutral-100 mb-5">
                  <img
                    src={course.bannerSrc}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#102312] shadow-sm backdrop-blur-xs">
                      {course.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#25a53a] border border-emerald-200 shadow-sm backdrop-blur-xs">
                      {course.accessType.toUpperCase()}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#102312]">
                  {course.name}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#5a705d] leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                {/* Progress bar */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-[#5a705d]">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#3cc74f] to-[#25a53a] rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Metadata details */}
                <div className="mt-4 flex items-center gap-4 text-xs font-medium text-[#5a705d]">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4 text-[#3cc74f]" />
                    <span>{course.chapters.length} Chapters</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-[#3cc74f]" />
                    <span>~{course.estimatedMinutes} mins</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setExpandedCourseSlug(isExpanded ? null : course.slug)}
                  className="text-xs font-bold text-[#5a705d] hover:text-[#102312] flex items-center gap-1 cursor-pointer"
                >
                  <span>{isExpanded ? 'Hide Chapters' : 'View Syllabus'}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  />
                </button>

                <button
                  onClick={() => {
                    const firstUncompleted =
                      course.chapters.find(ch => !state.completedChapters.includes(ch.id)) ||
                      course.chapters[0];
                    navigateTo('chapter-runner', {
                      courseSlug: course.slug,
                      chapterSlug: firstUncompleted?.slug,
                    });
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#3cc74f] hover:bg-[#2fa840] text-white text-xs font-bold rounded-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>{isEnrolled ? 'Continue' : 'Start Course'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Expanded Chapters Drawer */}
              {isExpanded && (
                <div className="mt-5 pt-4 border-t border-black/5 space-y-2 animate-fade-in">
                  <p className="text-xs font-mono font-bold uppercase text-[#5a705d]">
                    Course Chapters
                  </p>
                  <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                    {course.chapters.map((ch, idx) => {
                      const isComplete = state.completedChapters.includes(ch.id);
                      return (
                        <div
                          key={ch.id}
                          onClick={() =>
                            navigateTo('chapter-runner', {
                              courseSlug: course.slug,
                              chapterSlug: ch.slug,
                            })
                          }
                          className="flex items-center justify-between p-3 rounded-xl bg-neutral-50/70 hover:bg-neutral-100 transition-colors cursor-pointer border border-black/5"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-6 w-6 rounded-full bg-white text-xs font-mono font-bold flex items-center justify-center border border-black/10">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="text-xs font-bold text-[#102312]">{ch.name}</p>
                              <p className="text-[11px] text-[#5a705d] line-clamp-1">
                                {ch.description}
                              </p>
                            </div>
                          </div>
                          {isComplete ? (
                            <CheckCircle2 className="h-4 w-4 text-[#3cc74f] shrink-0" />
                          ) : (
                            <ArrowRight className="h-4 w-4 text-[#5a705d] shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
