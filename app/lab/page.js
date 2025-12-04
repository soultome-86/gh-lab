import { FlaskConical, Bot, Code, Terminal, AlertTriangle } from "lucide-react";

export default function LabPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      
      {/* 1. 페이지 헤더 (경고/안내 배너 스타일) */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <span className="p-2 bg-purple-100 rounded-lg text-purple-600">
            <FlaskConical size={24} />
          </span>
          디지털 연구소
        </h2>

        {/* 개발자 전용 안내 배너 */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
            <div>
              <h3 className="text-amber-800 font-bold text-sm">개발자 전용 테스트 구역 (Sandbox)</h3>
              <p className="text-amber-700 text-sm mt-1">
                이곳은 새로운 기능을 실험하고 테스트하는 공간입니다.<br/>
                데이터가 저장되지 않거나 예고 없이 삭제될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* 실험 1: AI 챗봇 프로토타입 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-purple-300 transition-all group cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">AI 요양 상담 봇</h3>
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-bold">Alpha Test</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            보호자 상담 시나리오를 학습 중인 AI 모델입니다.<br/>
            (현재 응답 정확도 70%)
          </p>
          {/* 터미널 느낌의 미리보기 창 */}
          <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs text-green-400">
            $ AI: 무엇을 도와드릴까요?<br/>
            $ User: 입소 비용 문의...<br/>
            <span className="animate-pulse">_</span>
          </div>
        </div>

        {/* 실험 2: UI 컴포넌트 테스트 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">UI/UX 디자인 실험</h3>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">Component</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            새로운 버튼 스타일, 애니메이션, 차트 등을<br/>
            미리 적용해보는 캔버스입니다.
          </p>
          <div className="flex gap-2 mt-2">
            <button className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-lg shadow-lg shadow-indigo-200">Button A</button>
            <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 text-xs rounded-lg hover:bg-gray-50">Button B</button>
          </div>
        </div>

        {/* 실험 3: 서버 로그 확인 */}
        <div className="col-span-1 md:col-span-2 bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-700 text-gray-300">
          <div className="flex items-center gap-3 mb-4 text-white">
            <Terminal size={20} />
            <h3 className="font-bold">System Log Viewer</h3>
          </div>
          <div className="font-mono text-xs space-y-1 h-32 overflow-hidden opacity-80">
            <p>[INFO] Server started at port 3000</p>
            <p>[INFO] Database connected: Supabase</p>
            <p className="text-yellow-400">[WARN] Memory usage at 65%</p>
            <p>[INFO] User access: Admin (IP: 192.168.0.1)</p>
            <p>...</p>
          </div>
        </div>

      </div>
    </div>
  );
}