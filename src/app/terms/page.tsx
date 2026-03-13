import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-zinc-800 p-8 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 overflow-y-auto">
        <Link href="/" className="text-zinc-400 hover:text-zinc-600 mb-8 inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-colors">
          <span>←</span> Back to home
        </Link>
        
        <h1 className="text-3xl font-black mb-8 text-zinc-900">Terms of Service</h1>
        
        <div className="space-y-6 text-sm text-zinc-600 leading-relaxed text-justify">
          <section>
            <h2 className="text-lg font-bold text-zinc-800 mb-2">1. 서비스의 성격</h2>
            <p>본 STOCK MIND 투자 성향 테스트(이하 "본 서비스")는 사용자의 심리적 선택을 기반으로 투자 스타일을 분류해주는 엔티테인먼트형 콘텐츠입니다. 본 서비스가 제공하는 결과는 어떠한 법적, 재무적 자문 근거로도 활용될 수 없습니다.</p>
          </section>
          
          <section className="bg-red-50 border border-red-100 p-4 rounded-xl">
            <h2 className="text-lg font-bold text-red-800 mb-2 font-black italic">2. 투자 책임 면책 조항 (Disclaimer)</h2>
            <p className="text-red-900 font-medium">본 테스트의 결과는 사용자가 입력한 답변에 근거한 추정치일 뿐이며, 실제 주식, 코인, 부동산 등 모든 투자 상품의 가격 변동을 예측하거나 보장하지 않습니다. 사용자가 본 서비스의 정보를 참고하여 행한 모든 투자 결정에 대한 책임은 전적으로 '사용자 본인'에게 있으며, 개발자 및 사이트 운영자는 이로 인해 발생하는 어떠한 손실에 대해서도 법적 책임을 지지 않습니다.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-zinc-800 mb-2">3. 저작권 보호</h2>
            <p>본 서비스 내의 모든 텍스트, 알고리즘, 로직 및 디자인 요소는 저작권법의 보호를 받습니다. 무단 복제, 배포 또는 상업적 이용을 엄격히 금지합니다.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-zinc-800 mb-2">4. 서비스의 중단</h2>
            <p>운영자는 시스템 유지보수, 서버 점검 또는 기타 경영상의 이유로 사전 고지 없이 서비스를 제한하거나 중단할 수 있습니다.</p>
          </section>

          <footer className="pt-8 border-t border-zinc-100 text-[11px] text-zinc-400">
            <p>Last updated: 2024. 03. 14</p>
            <p>Contact: resilient923@gmail.com</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
