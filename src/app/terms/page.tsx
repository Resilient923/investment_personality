import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-zinc-800 p-8 flex justify-center">
      <div className="max-w-2xl w-full bg-surface rounded-3xl shadow-xl p-8 overflow-y-auto">
        <Link href="/" className="text-zinc-400 hover:text-zinc-600 mb-6 inline-block">← 홈으로</Link>
        <h1 className="text-2xl font-bold mb-6">이용약관</h1>
        <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
          <p>본 약관은 STOCK MIND 서비스 이용과 관련하여 이용자와의 권리, 의무 및 책임사항을 규정합니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">1. 서비스의 목적</h2>
          <p>본 서비스는 사용자의 투자 성향을 재미로 분석해주는 엔터테인먼트 목적의 콘텐츠입니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">2. 책임의 한계</h2>
          <p>본 테스트 결과는 과학적 근거가 없으며, 실제 투자 조언으로 활용될 수 없습니다. 본 서비스의 결과를 바탕으로 행한 투자 결정에 대한 책임은 전적으로 이용자 본인에게 있습니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">3. 서비스의 변경 및 중단</h2>
          <p>개발자는 사이트 운영 사정상 서비스를 예고 없이 변경하거나 중단할 수 있습니다.</p>
          
          <h2 className="text-lg font-semibold text-zinc-800 mt-6">4. 저작권</h2>
          <p>본 서비스에 사용된 텍스트 및 디자인의 저작권은 개발자에게 있습니다.</p>
        </div>
      </div>
    </div>
  );
}
