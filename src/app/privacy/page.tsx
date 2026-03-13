import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-zinc-800 p-8 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 overflow-y-auto">
        <Link href="/" className="text-zinc-400 hover:text-zinc-600 mb-8 inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-colors">
          <span>←</span> Back to home
        </Link>
        
        <h1 className="text-3xl font-black mb-8 text-zinc-900">Privacy Policy</h1>
        
        <div className="space-y-6 text-sm text-zinc-600 leading-relaxed text-justify">
          <section>
            <h2 className="text-lg font-bold text-zinc-800 mb-2">1. Introduction</h2>
            <p>본 STOCK MIND 사이트(이하 "본 서비스")는 이용자의 개인정보를 소중히 여기며, '개인정보 보호법' 등 관련 법령을 준수합니다. 본 방침은 이용자가 제공하는 개인정보가 어떤 용도와 방식으로 이용되고 있는지 알리기 위해 작성되었습니다.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-zinc-800 mb-2">2. Information Collection</h2>
            <p>본 서비스는 별도의 회원가입 절차가 없으며, 사용자가 테스트를 위해 입력하는 '닉네임'은 서버에 저장되지 않고 브라우저의 결과 노출용으로만 일시적으로 사용됩니다. 사용자가 입력한 데이터는 테스트 종료와 함께 세션에서 폐기됩니다.</p>
          </section>
          
          <section className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl">
            <h2 className="text-lg font-bold text-zinc-800 mb-2 underline">3. Log Files and Cookies (Google AdSense)</h2>
            <p>본 서비스는 타사 광고 업체인 Google을 통해 광고를 게재합니다. Google은 쿠키를 사용하여 사용자의 본 사이트 및 기타 사이트 방문 기록을 바탕으로 광고를 제공합니다.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Google은 DART 쿠키를 사용하여 사용자에게 맞춤형 광고를 제공합니다.</li>
              <li>사용자는 Google의 광고 및 콘텐츠 네트워크 개인정보 보호정책을 방문하여 DART 쿠키 사용을 해제할 수 있습니다.</li>
              <li>본 사이트에서 사용하는 쿠키는 사용자 경험 개선을 위한 분석 도구(Google Analytics 등)를 포함할 수 있습니다.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-zinc-800 mb-2">4. Data Security</h2>
            <p>본 서비스는 보안을 위해 SSL(Secure Socket Layer) 암호화를 사용하며, 수집된 최소한의 로그 데이터는 보안이 유지되는 서버 인프라(Vercel) 내에서 안전하게 처리됩니다.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-zinc-800 mb-2">5. Third-Party Links</h2>
            <p>본 서비스의 결과 페이지에는 외부 사이트(카카오톡 공유 등)로 연결되는 링크가 포함될 수 있습니다. 해당 사이트의 개인정보 보호정책은 본 사이트와 무관하므로 방문 시 주의가 필요합니다.</p>
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
