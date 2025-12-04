import { Clock, Utensils, ClipboardList, Lock, CheckCircle, Lightbulb } from "lucide-react"; // Lightbulb 추가
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      
      {/* 헤더 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </span>
            지원사무국
          </h2>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-gray-500 text-lg">
            지원사무국 실무에 자주 사용되는 스마트 도구 모음입니다.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg whitespace-nowrap">
            <CheckCircle size={14} />
            <span>모든 앱은 목포장애인요양원 서식과 데이터에 맞춰 제작되었습니다.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ✅ 1. 초과근무 분석기 (활성) */}
        <Link href="/admin/overtime" className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-indigo-100"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-5 text-indigo-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              초과근무 분석기
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              엑셀 파일만 업로드하세요.<br/>
              개인별 월간 누적 시간을<br/>
              자동으로 합산하여 보여줍니다.
            </p>
          </div>
        </Link>

        {/* 💡 2. 기호도 & 식습관 조사 (준비 중 - 아이디어 단계) */}
        <div className="group relative bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300 overflow-hidden cursor-not-allowed select-none">
          <div className="absolute top-4 right-4 z-20">
            {/* 노란색 준비 중 라벨 */}
            <span className="px-3 py-1 bg-amber-100 text-amber-600 text-xs font-bold rounded-full flex items-center gap-1">
              <Lightbulb size={12} />
              준비 중
            </span>
          </div>
          <div className="relative z-10 opacity-50 group-hover:opacity-80 transition-all duration-500">
            <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-5 text-gray-400 shadow-sm">
              <Utensils size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              기호도 & 식습관 조사
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              수기 조사서는 그만.<br/>
              입력과 동시에 통계 그래프가<br/>
              자동으로 생성됩니다.
            </p>
          </div>
          {/* 잠금 화면 */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
              <Lightbulb size={20} />
            </div>
            <span className="text-gray-800 font-bold text-sm">아이디어 구상 중</span>
          </div>
        </div>

        {/* 💡 3. 개별서비스 욕구조사 (준비 중 - 아이디어 단계) */}
        <div className="group relative bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300 overflow-hidden cursor-not-allowed select-none">
          <div className="absolute top-4 right-4 z-20">
            {/* 노란색 준비 중 라벨 */}
            <span className="px-3 py-1 bg-amber-100 text-amber-600 text-xs font-bold rounded-full flex items-center gap-1">
              <Lightbulb size={12} />
              준비 중
            </span>
          </div>
          <div className="relative z-10 opacity-50 group-hover:opacity-80 transition-all duration-500">
            <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-5 text-gray-400 shadow-sm">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              개별서비스 욕구조사
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              이용인의 욕구를 스마트하게 분석.<br/>
              연도별 변화 추이까지<br/>
              한눈에 확인하세요.
            </p>
          </div>
          {/* 잠금 화면 */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
              <Lightbulb size={20} />
            </div>
            <span className="text-gray-800 font-bold text-sm">아이디어 구상 중</span>
          </div>
        </div>

      </div>
    </div>
  );
}