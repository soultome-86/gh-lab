import { Clock, Utensils, ClipboardList, Lock, Construction, CheckCircle, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up pb-10">
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
            <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </span>
            지원사무국
          </h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col gap-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg">
            지원사무국 실무에 자주 사용되는 스마트 도구 모음입니다.
          </p>
          <div className="w-fit flex items-start gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-2 rounded-lg">
            <CheckCircle size={14} className="mt-0.5 shrink-0" />
            <span className="whitespace-normal break-keep text-left">
              모든 앱은 목포장애인요양원 서식과 데이터에 맞춰 제작되었습니다.
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        {/* 1. 초과근무 분석기 (활성) */}
        <Link href="/admin/overtime" className="group relative bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden flex md:block items-center gap-4">
          <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-indigo-50 dark:bg-indigo-900/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/20"></div>
          <div className="relative z-10 shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              초과근무 분석기
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
              엑셀 파일만 업로드하세요. 개인별 월간 누적 시간을 자동으로 합산하여 보여줍니다.
            </p>
          </div>
        </Link>

        {/* 2. 기호도 (준비 중) */}
        <div className="group relative bg-gray-50 dark:bg-gray-900 p-5 md:p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 overflow-hidden cursor-not-allowed select-none flex md:block items-center gap-4">
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] md:text-xs font-bold rounded-full flex items-center gap-1">
              <Lightbulb size={10} />
              준비 중
            </span>
          </div>
          <div className="relative z-10 opacity-50 shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm">
              <Utensils className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
          <div className="relative z-10 opacity-60">
            <h3 className="text-lg md:text-xl font-bold text-gray-400 dark:text-gray-500 mb-1 md:mb-2">
              기호도 & 식습관
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm leading-relaxed">
              수기 조사서는 그만. 입력과 동시에 통계 그래프가 생성됩니다.
            </p>
          </div>
        </div>

        {/* 3. 욕구조사 (준비 중) */}
        <div className="group relative bg-gray-50 dark:bg-gray-900 p-5 md:p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 overflow-hidden cursor-not-allowed select-none flex md:block items-center gap-4">
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] md:text-xs font-bold rounded-full flex items-center gap-1">
              <Lightbulb size={10} />
              준비 중
            </span>
          </div>
          <div className="relative z-10 opacity-50 shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm">
              <ClipboardList className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
          <div className="relative z-10 opacity-60">
            <h3 className="text-lg md:text-xl font-bold text-gray-400 dark:text-gray-500 mb-1 md:mb-2">
              개별서비스 욕구조사
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm leading-relaxed">
              이용인의 욕구를 스마트하게 분석. 연도별 변화 추이까지 확인하세요.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}