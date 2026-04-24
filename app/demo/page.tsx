import Link from 'next/link';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── 헤더 (sticky) ─────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">UD</div>
            <span className="font-bold text-slate-900">유디임팩트 AI 역량 진단</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/demo/dashboard" className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">체험하기</Link>
            <a href="https://forms.gle/GRcf2iNKxL21ys5B9" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">도입 문의</a>
          </div>
        </div>
      </header>

      {/* ── 히어로 (다크 그라디언트) ─────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            대학 창업지원단 · 교육기획팀 전용 데모
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
            {"해커톤 한 번으로\n학생의 AI 역량 성장을\n"}
            <span className="text-cyan-300">숫자로 증명합니다</span>
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            사전/사후 진단 데이터로 만든 성과 리포트 한 장이,<br className="hidden sm:block" />
            다음 해커톤 예산을 지켜줍니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo/report" className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-base hover:bg-blue-50 transition-colors shadow-lg">
              📄 리포트 미리보기 (30초)
            </Link>
            <Link href="/demo/dashboard" className="bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/25 transition-colors border border-white/20">
              대시보드 체험 →
            </Link>
          </div>
        </div>

        {/* 임팩트 수치 카드 */}
        <div className="max-w-3xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '평균 +49%', label: 'AI 역량 향상률' },
            { value: 'NPS 86점', label: '참가자 만족도' },
            { value: '4.5 / 5점', label: '전반적 만족도' },
            { value: '94%', label: '재참여 의향률' },
          ].map(s => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center">
              <div className="text-2xl font-bold mb-1">{s.value}</div>
              <div className="text-blue-200 text-xs leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 페인포인트 섹션 ────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">혹시 이런 고민 있으신가요?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              "해커톤 끝나고 나서... 학생들이 얼마나 성장했는지 숫자로 보여달라는데 막막합니다",
              "매년 예산을 받아서 해커톤을 열지만, 성과를 정량적으로 보고할 수 있는 자료가 없습니다",
              "참가 학생 설문지 수작업으로 취합하다 보니 리포트 하나 만드는 데 일주일이 걸립니다",
            ].map((pain, i) => (
              <div key={i} className="rounded-2xl p-7 border-2 border-red-100 bg-red-50/50 relative">
                <div className="text-3xl mb-4">😔</div>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">"{pain}"</p>
                <div className="absolute top-4 right-4 text-red-300 text-2xl font-bold opacity-40">"</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-slate-500">이 세 가지를 자동으로 해결합니다 ↓</p>
          </div>
        </div>
      </section>

      {/* ── 솔루션 3단계 ──────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">3단계로 끝나는 성과 증명</h2>
            <p className="text-slate-500">설문 수집부터 리포트 발행까지 플랫폼이 자동으로 처리합니다</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🧠',
                title: '사전/사후 AI 역량 진단',
                desc: '5개 영역 10문항. 해커톤 전후에 동일 진단으로 성장을 정량화합니다',
                color: 'violet',
              },
              {
                icon: '📊',
                title: '실시간 KPI 대시보드',
                desc: '참가자 현황, 역량 평균, NPS를 한 화면에서 실시간으로 확인합니다',
                color: 'blue',
              },
              {
                icon: '📄',
                title: '성과 리포트 자동 생성',
                desc: '히트맵·레이더 차트·벤치마크를 포함한 PDF 리포트를 클릭 한 번에 발행합니다',
                color: 'emerald',
              },
            ].map(f => (
              <div key={f.title} className={`rounded-2xl p-8 border shadow-sm ${
                f.color === 'violet' ? 'bg-violet-50 border-violet-100' :
                f.color === 'blue' ? 'bg-blue-50 border-blue-100' :
                'bg-emerald-50 border-emerald-100'
              }`}>
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className={`text-lg font-bold mb-3 ${
                  f.color === 'violet' ? 'text-violet-900' :
                  f.color === 'blue' ? 'text-blue-900' :
                  'text-emerald-900'
                }`}>{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 리포트 프리뷰 CTA ─────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">이런 리포트가 자동으로 만들어집니다</h2>
            <p className="text-slate-500">샘플 데이터로 만든 성과 리포트를 지금 바로 확인해보세요</p>
          </div>
          <div className="rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">리포트 포함 내용</p>
                <ul className="space-y-3">
                  {[
                    '역량 성장률 (사전→사후 정량 비교)',
                    '참가자 역량 히트맵 (개인별 분포)',
                    'NPS & 항목별 만족도',
                    '팀 프로젝트 현황 & 수상 내역',
                    '타 대학 벤치마크 비교',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <span className="text-blue-500 font-bold flex-shrink-0">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 text-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
                  <div className="text-5xl mb-3">📄</div>
                  <div className="text-sm font-semibold text-slate-700 mb-1">2025 AI 해커톤</div>
                  <div className="text-xs text-slate-400">성과 리포트 샘플</div>
                </div>
                <Link
                  href="/demo/report"
                  className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
                >
                  성과 리포트 미리보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 체험 섹션 ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">지금 바로 체험해보세요</h2>
            <p className="text-slate-400">로그인 없이 샘플 데이터로 모든 기능을 확인할 수 있습니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* 운영진 대시보드 */}
            <div className="bg-blue-950 border border-blue-800 rounded-2xl p-8">
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="text-xl font-bold text-white mb-2">운영진 대시보드</h3>
              <p className="text-blue-300 text-sm mb-6 leading-relaxed">
                KPI 카드, AI 역량 성장 차트, 해커톤 목록을 한눈에 확인합니다.<br />
                <span className="text-blue-400 font-semibold">로그인 없이 바로 체험</span>
              </p>
              <Link
                href="/demo/dashboard"
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold text-sm transition-colors"
              >
                대시보드 체험하기 →
              </Link>
            </div>

            {/* 성과 리포트 */}
            <div className="bg-emerald-950 border border-emerald-800 rounded-2xl p-8">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">성과 리포트</h3>
              <p className="text-emerald-300 text-sm mb-6 leading-relaxed">
                역량 히트맵, 벤치마크, NPS까지 담긴 완성형 리포트를 미리봅니다.<br />
                <span className="text-emerald-400 font-semibold">로그인 없이 바로 체험</span>
              </p>
              <Link
                href="/demo/report"
                className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm transition-colors"
              >
                성과 리포트 미리보기 →
              </Link>
            </div>
          </div>

          {/* 참가자 체험 */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-3xl flex-shrink-0">🎓</div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-white mb-1">참가자 체험</h3>
              <p className="text-slate-400 text-sm">학생 눈으로 보는 역량 진단 & 성장 리포트</p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start mt-2">
                <span className="text-xs bg-black/30 text-slate-300 px-3 py-1 rounded-full font-mono">학번: 2021001001</span>
                <span className="text-xs bg-black/30 text-slate-300 px-3 py-1 rounded-full font-mono">비밀번호: test1234</span>
              </div>
            </div>
            <Link
              href="/participant/login"
              className="flex-shrink-0 bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              참가자 체험 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 클로징 CTA ────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            귀 대학 해커톤,<br />다음 번엔 성과 리포트와 함께
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            도입 문의 주시면 맞춤 시연을 제공해드립니다.<br />
            <span className="text-blue-200 text-sm">평일 응답 보장 · contact@udimpact.kr</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/GRcf2iNKxL21ys5B9"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
            >
              📩 도입 문의하기
            </a>
            <Link
              href="/demo/dashboard"
              className="bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/30 transition-colors border border-white/30"
            >
              체험 먼저 하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 푸터 ──────────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">UD</div>
            <span className="font-semibold text-white text-sm">유디임팩트</span>
          </div>
          <div className="text-xs text-center">
            AI 역량 진단 플랫폼 · 대학 창업지원단 전용 데모
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/demo/dashboard" className="hover:text-white transition-colors">대시보드</Link>
            <Link href="/demo/report" className="hover:text-white transition-colors">성과 리포트</Link>
            <a href="https://forms.gle/GRcf2iNKxL21ys5B9" className="hover:text-white transition-colors">도입 문의</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
