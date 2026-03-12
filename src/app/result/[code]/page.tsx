import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const RESULT_MAP: Record<
  string,
  { title: string; description: string; accent: string; imageFile: string }
> = {
  DGRN: {
    title: "상장폐지 수집가",
    description: "휴지조각 수집이 취미인 마이너스의 손.",
    accent: "blue",
    imageFile: "DGRN.jpg"
  },
  FMOD: {
    title: "상따 중독 포모충",
    description: "남 벌 때 못 벌면 혈압 올라서 고점 매수하는 뇌.",
    accent: "red",
    imageFile: "FMOD.jpg"
  },
  YOLO: {
    title: "한강뷰 아니면 입수",
    description: "인생 한 방에 건 노빠꾸 야수의 심장.",
    accent: "red",
    imageFile: "YOLO.png"
  },
  HODL: {
    title: "망부석 좀비",
    description: "수익률 -95%에도 아직 안 팔았으니 손해 아니라는 분.",
    accent: "blue",
    imageFile: "HODL.jpg"
  },
  ALGO: {
    title: "방구석 워런 버핏",
    description: "차트 선 긋다 밤새고 세력 탓만 하는 선무당.",
    accent: "neon",
    imageFile: "ALGO.png"
  },
  STRE: {
    title: "1분봉 노예",
    description: "주가 10원 하락에 수명 1시간씩 단축되는 유리 멘탈.",
    accent: "blue",
    imageFile: "STRE.jpg"
  },
  CHIK: {
    title: "익절병 환자",
    description: "0.5%만 빨간불 들어와도 치킨 사 먹는 쫄보.",
    accent: "neon",
    imageFile: "CHIK.jpg"
  },
  GHOST: {
    title: "비번 까먹은 시체",
    description: "강제 장기투자 중인 계좌 주인 (생사불명).",
    accent: "blue",
    imageFile: "GHOST.jpg"
  },
  NEWS: {
    title: "찌라시 하이에나",
    description: "카톡방 '카더라'에 전 재산 태우는 정보 호구.",
    accent: "red",
    imageFile: "NEWS.jpg"
  },
  MATH: {
    title: "계산기 중독자",
    description: "수익은 마이너스인데 엑셀로 복리 망상 중.",
    accent: "neon",
    imageFile: "MATH.jpg"
  },
  PRAY: {
    title: "정한수 메타",
    description: "분석은 사치, 매수 후 조상님께 비는 무속인.",
    accent: "blue",
    imageFile: "PRAY.jpg"
  },
  FIRE: {
    title: "망상형 파이어족",
    description: "50만 원 투자하고 내년 강남 입주 꿈꾸는 자.",
    accent: "red",
    imageFile: "FIRE.jpg"
  },
  BLUE: {
    title: "우량주 가스라이팅",
    description: '\"삼전은 안 망해\"라며 5년째 인질 잡힌 분.',
    accent: "blue",
    imageFile: "BLUE.jpg"
  },
  SHOR: {
    title: "인간 인버스",
    description: "내가 사면 고점, 팔면 저점인 기적의 지표.",
    accent: "red",
    imageFile: "SHOR.jpg"
  },
  GOLD: {
    title: "예적금 광신도",
    description: "인플레이션한테 뺨 맞으면서 현금만 쥐고 있는 자.",
    accent: "neon",
    imageFile: "GOLD.jpg"
  },
  FLEX: {
    title: "계좌 녹이는 셀럽",
    description: "수익 나면 오마카세로 원금까지 탕진하는 자.",
    accent: "red",
    imageFile: "FLEX.jpg"
  }
};

const VALID_CODES = Object.keys(RESULT_MAP);

const SITE_URL = "https://investment-personality.vercel.app";

export async function generateMetadata({
  params,
  searchParams
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { code } = await params;
  const upperCode = (code || "").toUpperCase();

  if (!VALID_CODES.includes(upperCode)) {
    return { title: "결과 없음 | 호구냐 씹고수냐 테스트" };
  }

  const result = RESULT_MAP[upperCode];
  const searchParamsValue = await searchParams;
  const nickname =
    typeof searchParamsValue?.nickname === "string"
      ? searchParamsValue.nickname
      : "맑은 눈의 광인";

  const imageUrl = `${SITE_URL}/results/${result.imageFile}`;

  return {
    title: `${nickname}님은 ${result.title} | 호구냐 씹고수냐 테스트`,
    description: result.description,
    openGraph: {
      title: `${nickname}님은 ${result.title} (${upperCode})`,
      description: result.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: result.title
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${nickname}님은 ${result.title}`,
      description: result.description,
      images: [imageUrl]
    }
  };
}

export default async function ResultPage({
  params,
  searchParams
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { code } = await params;
  const upperCode = (code || "").toUpperCase();
  const result = RESULT_MAP[upperCode];
  const searchParamsValue = await searchParams;
  const nickname =
    typeof searchParamsValue?.nickname === "string"
      ? searchParamsValue.nickname
      : "맑은 눈의 광인";
  const score =
    typeof searchParamsValue?.score === "string"
      ? searchParamsValue.score
      : "?";

  if (!result) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-zinc-800 mb-2">
            결과를 찾을 수 없어요
          </h1>
          <Link
            href="/"
            className="inline-block rounded-2xl bg-accentRed text-white font-semibold px-6 py-3 mt-4"
          >
            테스트 하러 가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-zinc-800 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-sm">
        <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden mb-6 shadow-xl bg-white">
          <Image
            src={`/results/${result.imageFile}`}
            alt={result.title}
            fill
            className="object-contain"
            priority
            unoptimized
            sizes="(max-width: 480px) 100vw, 400px"
          />
        </div>

        <div className="rounded-2xl border-2 border-zinc-200 bg-white shadow-xl px-5 py-5 mb-6">
          <span className="text-[11px] uppercase tracking-widest text-zinc-500">
            당신의 투자 성향
          </span>
          <h1 className="text-xl font-bold text-zinc-800 mt-1">
            {result.title}
            <span className="text-sm font-normal text-zinc-500 ml-2">
              {upperCode}
            </span>
          </h1>
          <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
            {result.description}
          </p>

          <div className="mt-4 rounded-xl border border-zinc-200 bg-[#f5f5f7] px-4 py-3">
            <span className="text-xs text-zinc-500">내 투자 지능 점수</span>
            <p className="text-2xl font-bold text-accentNeon">{score} / 100</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full rounded-2xl bg-accentRed text-center text-base font-semibold text-white py-4 block"
          >
            나도 테스트 하기
          </Link>
        </div>


        <p className="mt-4 text-xs text-zinc-500 text-center">
          경고: 본 테스트는 과학적 근거가 1도 없습니다.
        </p>

        <footer className="mt-8 flex gap-4 text-[10px] text-zinc-400 justify-center pb-8 border-t border-zinc-200 pt-4">
          <Link href="/privacy" className="hover:underline">개인정보처리방침</Link>
          <span>|</span>
          <Link href="/terms" className="hover:underline">이용약관</Link>
        </footer>
      </div>
    </div>
  );
}
