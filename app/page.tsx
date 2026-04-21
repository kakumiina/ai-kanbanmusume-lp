import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BRAND = "#8B4513";
const BRAND_ACCENT = "#E07856";
const BG_WARM = "#F4EEE6";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-block text-xs tracking-[0.2em] font-medium mb-4 uppercase"
      style={{ color: BRAND_ACCENT }}
    >
      {children}
    </div>
  );
}

function PainCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start py-2.5">
      <span
        className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0"
        style={{ backgroundColor: BRAND_ACCENT }}
      />
      <span className="text-base leading-relaxed">{children}</span>
    </li>
  );
}

function DeliverableItem({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4 items-start py-3 border-b border-neutral-200 last:border-b-0">
      <span className="text-xl shrink-0" aria-hidden="true">
        {icon}
      </span>
      <span className="text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <PainSection />
      <AboutSection />
      <PhilosophySection />
      <RoadmapSection />
      <BonusSkillsSection />
      <DeliverablesSection />
      <DifferenceSection />
      <VoiceSection />
      <PriceSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-[#FAF9F6]/85 border-b border-neutral-200/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: BRAND_ACCENT }}
            aria-hidden="true"
          />
          <span className="text-sm sm:text-base font-bold tracking-wide">
            AI看板娘
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-700">
          <a href="#about" className="hover:text-[color:var(--color-brand)]">
            プログラム
          </a>
          <a href="#roadmap" className="hover:text-[color:var(--color-brand)]">
            ステップ
          </a>
          <a href="#price" className="hover:text-[color:var(--color-brand)]">
            料金
          </a>
          <a href="#faq" className="hover:text-[color:var(--color-brand)]">
            よくある質問
          </a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full text-white"
          style={{ backgroundColor: BRAND }}
        >
          無料相談
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(224,120,86,0.10) 0%, transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(139,69,19,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-36">
        <div className="max-w-3xl">
          <SectionLabel>AI Kanban Musume</SectionLabel>
          <h1 className="text-[28px] sm:text-4xl md:text-5xl font-bold leading-[1.35] md:leading-[1.3] tracking-tight">
            あなたの店のことを
            <br className="sm:hidden" />
            誰より理解するAIを、
            <br />
            <span style={{ color: BRAND }}>3ヶ月で育てます。</span>
          </h1>
          <p className="mt-7 text-base md:text-lg leading-[2] text-neutral-700 max-w-2xl">
            月5万円×3ヶ月。卒業時には、あなたの店専用のAI看板娘が完成します。
            <br className="hidden sm:inline" />
            シフト・SNS・顧客対応まで、隣でずっと手伝ってくれる相棒を作りましょう。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm sm:text-base font-medium rounded-full px-7 py-3.5 text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              無料相談を予約する（30分）
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center text-sm sm:text-base font-medium rounded-full px-7 py-3.5 border transition hover:bg-neutral-50"
              style={{ borderColor: BRAND, color: BRAND }}
            >
              プログラム詳細を見る
            </a>
          </div>
          <p className="mt-8 text-xs text-neutral-500">
            ※ 現在、月5名限定でソフトローンチ中です
          </p>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  const items = [
    "シフト調整に毎月10時間以上かかっている",
    "SNS投稿のネタが浮かばず、更新が止まっている",
    "ChatGPTを開いてみたけど、何を聞けばいいか分からずに閉じた",
    "AIの話題が増えて、取り残されている気がする",
    "事務スタッフを雇うほどではない。でも誰かに手伝ってほしい",
  ];
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: BG_WARM }}>
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionLabel>Voices from the shop</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          飲食店オーナーの、こんな声に
          <br className="sm:hidden" />
          覚えはありませんか？
        </h2>
        <p className="mt-6 text-neutral-700 leading-[2]">
          AIに興味はあるけれど、自分には難しそう。
          <br className="hidden sm:inline" />
          そう感じている方は、思っているより多いです。
        </p>
        <ul className="mt-10 space-y-1">
          {items.map((t) => (
            <PainCheck key={t}>{t}</PainCheck>
          ))}
        </ul>
        <p className="mt-10 text-[15px] text-neutral-700 leading-relaxed">
          ひとつでも当てはまったら、AI看板娘があなたの隣に立てるかもしれません。
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionLabel>What is AI看板娘</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          AI看板娘は、
          <br className="sm:hidden" />
          <span style={{ color: BRAND }}>&ldquo;あなたの店のための専用AI&rdquo;</span>
          を
          <br />
          3ヶ月で育てるプログラムです。
        </h2>

        <div className="mt-10 space-y-8 text-[15px] md:text-base leading-[2.05] text-neutral-800">
          <p>
            ChatGPTやClaude、Geminiといった汎用AIは、初期状態では
            <span className="font-medium">&ldquo;誰にでも使える便利な道具&rdquo;</span>
            です。
            でも、あなたの店のメニュー、客層、営業スタイル、接客の言葉遣いを少しずつ教え込んでいくと、汎用AIはやがて
            <span className="font-medium">&ldquo;あなたの店にしか馴染まないAI&rdquo;</span>
            に変わっていきます。
          </p>
          <p>
            1日のセミナーや数回の講座では、使い方は分かっても
            <span className="font-medium">
              &ldquo;自分の店に馴染む&rdquo;
            </span>
            ところまでは届きません。
            3ヶ月、隔週のペースで一緒に手を動かしながら、月ごとに成果物（シフト管理ツール・LP・専用AI）を積み上げていきます。
          </p>
          <p>
            最後には、あなたの言葉で話し、あなたの店のことを理解しているAI看板娘が完成します。
            <span className="font-medium">
              &ldquo;あなたのお店でしか動かないAI&rdquo;
            </span>
            を、一緒に一個だけ作る。
            卒業後も自分で育て続けられる設計なので、毎月の
            <span className="font-medium">
              &ldquo;AI代行サービス料&rdquo;
            </span>
            は必要ありません。
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <div
            className="rounded-xl p-6 border"
            style={{ borderColor: "#E8DFD2", backgroundColor: "#FBF7F2" }}
          >
            <div className="text-xs text-neutral-500 tracking-widest mb-2">
              BEFORE
            </div>
            <div className="text-lg font-bold mb-2">汎用AI</div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              誰にでも使える便利な道具。
              <br />
              店舗の文脈は知らない。
            </p>
          </div>
          <div
            className="rounded-xl p-6 text-white"
            style={{ backgroundColor: BRAND }}
          >
            <div className="text-xs tracking-widest mb-2 opacity-80">AFTER</div>
            <div className="text-lg font-bold mb-2">AI看板娘</div>
            <p className="text-sm leading-relaxed opacity-95">
              あなたの店のDNAを理解し、
              <br />
              あなたの言葉で話す専用AI。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const quotes = [
    {
      body: "AIは感動体験商品。ディズニーランドみたいなもの。",
      caption: "まず感動してもらう。便利さや成果は、その後に自然とついてくる。",
    },
    {
      body: "便利で使えるには知性と根性が必要。でも、感動なら誰にでも届けられる。",
      caption:
        "『使いこなせないと意味がない』は間違い。AI看板娘は、感動から入れる入口です。",
    },
    {
      body: "お店専用のAIを、一個だけ作る。育てる。",
      caption:
        "量産品の汎用AIでは届かない場所に、あなたのお店だけのAIを置きにいきます。",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#2B1D14" }}
    >
      <div
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 10%, rgba(224,120,86,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(139,69,19,0.25) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-white">
        <div
          className="inline-block text-xs tracking-[0.2em] font-medium mb-4 uppercase"
          style={{ color: "#F2C9B8" }}
        >
          Our philosophy
        </div>
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          AI看板娘が売っているのは、
          <br className="sm:hidden" />
          <span style={{ color: "#F2C9B8" }}>&ldquo;感動体験&rdquo;</span>です。
        </h2>
        <div className="mt-8 text-[15px] md:text-base leading-[2.1] text-white/85 max-w-3xl space-y-5">
          <p>
            &ldquo;売上が伸びます&rdquo;とは言いません。売上は、お店とお客様の関係の結果でしか生まれないからです。
            代わりにAI看板娘が届けるのは、オーナー自身が&ldquo;AIってこう使うのか&rdquo;と目を輝かせる瞬間。
            その感動が、3ヶ月後にはお店の武器に変わっている。そういうプログラムです。
          </p>
          <p className="text-white/70 text-[14px]">
            — 創業者ミーティングより
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {quotes.map((q) => (
            <div
              key={q.body}
              className="rounded-2xl p-7 border"
              style={{
                borderColor: "rgba(242,201,184,0.25)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="text-[22px] md:text-[24px] leading-[1.6] font-bold"
                style={{ color: "#F2C9B8" }}
              >
                「{q.body}」
              </div>
              <p className="mt-5 text-[13px] text-white/70 leading-[2]">
                {q.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusSkillsSection() {
  const bonuses = [
    {
      tag: "Bonus 01",
      title: "SNSネタだし自動化",
      catch: "今日の投稿が30秒で決まる",
      body: "天気・季節・在庫・時事ネタをAIが拾って、飲食店向けの&ldquo;今日のSNS投稿案&rdquo;を5つ提案。オーナーはピンと来たものを選んで投稿するだけ。&ldquo;書くネタがない日&rdquo;が消えます。",
      points: [
        "Instagram / Xに流用できる短文フォーマット",
        "最低限のハッシュタグ・絵文字も自動",
        "毎朝の習慣にすると、更新が止まらなくなる",
      ],
    },
    {
      tag: "Bonus 02",
      title: "経営の天才会議",
      catch: "複数AI人格で、ひとり会議を卒業",
      body: "秘書・営業担当・フロアマネージャーといった&ldquo;AI人格&rdquo;を立てて、複数の視点で議論させる仕組み。&ldquo;このメニュー削っていい？&rdquo;&ldquo;新メニューはいつ入れる？&rdquo;に、3人のAIが多角的に意見します。",
      points: [
        "最終判断はオーナー。AIはあくまで視点提供",
        "ひとり経営の&ldquo;相談相手がいない&rdquo;を解決",
        "運営元でも日々この仕組みで意思決定中",
      ],
    },
    {
      tag: "Bonus 03",
      title: "シフト作成、月10時間 → 月2時間へ",
      catch: "スプレッドシート × AI で下書き自動化",
      body: "スタッフの希望、営業時間、曜日ごとの混雑予測からAIがシフトの&ldquo;下書き&rdquo;を生成。オーナーは微調整するだけ。毎月の&ldquo;もう一回休みの日だ&rdquo;が確実に早く終わります。",
      points: [
        "Googleスプレッドシートで完結",
        "希望休の回収フォームもセットで用意",
        "スタッフにそのまま共有できるクリーン出力",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>+ Bonus skills</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          3ヶ月の本編に組み込まれる
          <br className="sm:hidden" />
          <span style={{ color: BRAND }}>&ldquo;おまけスキル&rdquo;</span>も。
        </h2>
        <p className="mt-6 text-[15px] md:text-base text-neutral-700 leading-[2] max-w-3xl">
          本編のカリキュラムに自然に織り込みながら、最初のセッションで&ldquo;サクッと動いて感動する&rdquo;体験を届けるための3つのおまけです。
          <br className="hidden sm:inline" />
          どれも卒業後もオーナーひとりで回せる形で渡します。
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {bonuses.map((b, i) => (
            <Card
              key={b.title}
              className="bg-white border border-neutral-200/80 shadow-none rounded-2xl"
            >
              <CardHeader>
                <div
                  className="text-xs tracking-widest font-semibold"
                  style={{ color: BRAND_ACCENT }}
                >
                  {b.tag}
                </div>
                <CardTitle className="mt-2 text-xl">{b.title}</CardTitle>
                <CardDescription className="mt-2 text-[13px]">
                  {b.catch}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p
                  className="text-sm leading-[2] text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
                <div
                  className="mt-5 pt-5 border-t"
                  style={{ borderColor: "#EFE7DB" }}
                >
                  <ul className="space-y-1.5">
                    {b.points.map((p) => (
                      <li
                        key={p}
                        className="text-sm flex gap-2 items-start leading-relaxed"
                      >
                        <span
                          className="mt-2 inline-block h-1 w-1 rounded-full shrink-0"
                          style={{ backgroundColor: BRAND }}
                        />
                        <span dangerouslySetInnerHTML={{ __html: p }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-xs text-neutral-400">
                  Bonus {i + 1} / 3
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const months = [
    {
      m: "Month 1",
      title: "基礎を整える",
      catch: "AIに「店のこと」を教える月",
      body: "ChatGPT・Claude・Geminiの使い分けを整理しながら、店舗の基本情報（メニュー・営業時間・客層・こだわり）をAIに渡していきます。シフト管理の第一歩として、Googleスプレッドシートの活用方法もここで。",
      deliverables: [
        "店舗プロファイル資料",
        "シフト管理シート雛形",
        "問い合わせ回答プロンプト集",
      ],
    },
    {
      m: "Month 2",
      title: "業務に組み込む",
      catch: "AIを日常の仕事の一部に",
      body: "シフト管理の下書き自動化、SNS投稿文の下書き半自動化を進めつつ、あなたの店の簡易LP（紹介ページ）を制作します。&ldquo;AIが勝手にやる&rdquo;のではなく、&ldquo;AIが下書きして、あなたが整える&rdquo;バランスで。",
      deliverables: [
        "稼働中のシフト管理ツール",
        "SNS投稿テンプレート（Instagram / X）",
        "公開済み店舗LP",
      ],
    },
    {
      m: "Month 3",
      title: "専用AIに育てる",
      catch: "あなたの言葉で話すAI看板娘へ",
      body: "オーナーの口癖、接客スタイル、常連さんとの会話ネタ。あなたの店のDNAをAIに学ばせて、卒業後もひとりで動ける状態に仕上げます。月次の運用サイクルを定着させて、&ldquo;育て続けられる看板娘&rdquo;になります。",
      deliverables: [
        "店舗専用AI看板娘",
        "月次運用マニュアル",
        "卒業証書",
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-20 md:py-28"
      style={{ backgroundColor: BG_WARM }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>Roadmap</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold">3ヶ月のロードマップ</h2>
        <p className="mt-4 text-neutral-700 leading-[2]">
          月1つずつ、目に見える成果物を積み上げていきます。
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {months.map((x, i) => (
            <Card
              key={x.m}
              className="bg-white border border-neutral-200/80 shadow-none rounded-2xl"
            >
              <CardHeader>
                <div
                  className="text-xs tracking-widest font-semibold"
                  style={{ color: BRAND_ACCENT }}
                >
                  {x.m}
                </div>
                <CardTitle className="mt-2 text-xl">{x.title}</CardTitle>
                <CardDescription className="mt-2 text-[13px]">
                  {x.catch}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p
                  className="text-sm leading-[2] text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: x.body }}
                />
                <div
                  className="mt-5 pt-5 border-t"
                  style={{ borderColor: "#EFE7DB" }}
                >
                  <div className="text-xs text-neutral-500 mb-3 tracking-wider">
                    成果物
                  </div>
                  <ul className="space-y-1.5">
                    {x.deliverables.map((d) => (
                      <li
                        key={d}
                        className="text-sm flex gap-2 items-start leading-relaxed"
                      >
                        <span
                          className="mt-2 inline-block h-1 w-1 rounded-full shrink-0"
                          style={{ backgroundColor: BRAND }}
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-xs text-neutral-400">
                  Step {i + 1} / 3
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  const items = [
    { icon: "📋", text: "店舗プロファイル資料（AIが参照する&ldquo;店のDNA&rdquo;）" },
    { icon: "📊", text: "シフト管理ツール（Googleスプレッドシート＋AI連携）" },
    { icon: "🌐", text: "公開済みの店舗LP（独自ドメイン対応可）" },
    { icon: "📱", text: "SNS投稿テンプレート集（Instagram / X）" },
    { icon: "💬", text: "問い合わせ回答プロンプト集" },
    {
      icon: "🌟",
      text: "<strong class=\"font-bold\">店舗専用AI看板娘</strong>（GPT Custom / Claude Project / Gemini Gem のいずれか）",
    },
    { icon: "📘", text: "月次運用マニュアル" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionLabel>Deliverables</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold">
          3ヶ月後、あなたの手元に残るもの
        </h2>
        <p className="mt-6 text-neutral-700 leading-[2]">
          全て&ldquo;目に見える形&rdquo;で残ります。卒業後もあなた自身で使い続けられる設計です。
        </p>
        <ul className="mt-10 bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
          {items.map((it) => (
            <DeliverableItem key={it.text} icon={it.icon}>
              <span dangerouslySetInnerHTML={{ __html: it.text }} />
            </DeliverableItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: BG_WARM }}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel>Difference</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold">
          AI講座や経営コンサルとの違い
        </h2>

        <div className="mt-10 overflow-x-auto">
          <Table className="bg-white rounded-2xl overflow-hidden border border-neutral-200">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[22%] text-xs tracking-wider">
                  観点
                </TableHead>
                <TableHead className="text-xs tracking-wider text-neutral-500">
                  一般的なAI講座
                </TableHead>
                <TableHead className="text-xs tracking-wider text-neutral-500">
                  一般的な経営支援
                </TableHead>
                <TableHead
                  className="text-xs tracking-wider font-bold"
                  style={{ color: BRAND }}
                >
                  AI看板娘
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["期間", "1〜数日", "6〜12ヶ月", "3ヶ月"],
                ["価格", "3〜10万円", "100万円〜", "15万円（税抜）"],
                [
                  "ゴール",
                  "使い方を知る",
                  "改善レポート",
                  "専用AIが残る",
                ],
                [
                  "成果物",
                  "テキスト・受講証",
                  "診断書類",
                  "動くツール＋LP＋AI",
                ],
                [
                  "伴走スタイル",
                  "自習中心",
                  "主導型",
                  "オーナー主体の共創",
                ],
              ].map((row) => (
                <TableRow key={row[0]}>
                  <TableCell className="font-medium text-[13px]">
                    {row[0]}
                  </TableCell>
                  <TableCell className="text-[13px] text-neutral-600">
                    {row[1]}
                  </TableCell>
                  <TableCell className="text-[13px] text-neutral-600">
                    {row[2]}
                  </TableCell>
                  <TableCell
                    className="text-[13px] font-bold"
                    style={{ color: BRAND }}
                  >
                    {row[3]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-8 text-[15px] leading-[2] text-neutral-700">
          AI看板娘の特徴は
          <span className="font-semibold">
            「3ヶ月で、目に見える成果物と一緒に、あなたの店専用のAIが残る」
          </span>
          こと。
          <br className="hidden sm:inline" />
          &ldquo;教えて終わり&rdquo;でも、&ldquo;代行サービス&rdquo;でもない、第三の選択肢を目指しています。
        </p>
      </div>
    </section>
  );
}

function VoiceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <SectionLabel>Our story</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold">
          なぜ&ldquo;専用AI&rdquo;にこだわるのか
        </h2>
        <div className="mt-10 text-left text-[15px] md:text-base leading-[2.1] text-neutral-800 space-y-6">
          <p>
            AIを試してみたオーナーの多くが、最初の数回で手を止めてしまう、という話をよく聞きます。
            理由はシンプルで、AIの返事が&ldquo;どこかの誰か向け&rdquo;にしか聞こえないからです。
          </p>
          <p>
            シフトを組むにも、SNSに投稿するにも、お客様に返事するにも、
            そこには「あなたの店の文脈」が必要です。
            メニューの呼び方、常連さんへの距離感、忙しい時間帯のしのぎ方。
            それはテキストを数行読めば身につくものではありません。
          </p>
          <p>
            AI看板娘は、その文脈を3ヶ月かけて一緒に注ぎ込むプログラムです。
            卒業後もあなたの横で、あなたの言葉で話してくれるAI。
            それが、このプログラムが目指すゴールです。
          </p>
        </div>
        <p className="mt-12 text-xs text-neutral-500">
          ※ 2026年4月スタートのプログラムです。Month 1の受講者の声は随時このページに追加していきます。
        </p>
      </div>
    </section>
  );
}

function PriceSection() {
  return (
    <section
      id="price"
      className="py-20 md:py-28"
      style={{ backgroundColor: BG_WARM }}
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold">料金プラン</h2>

        <Card className="mt-10 bg-white rounded-2xl border border-neutral-200 shadow-none overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="text-sm text-neutral-500 tracking-wider mb-3">
              AI看板娘 3ヶ月プログラム
            </div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-4xl md:text-5xl font-bold tracking-tight">
                150,000
              </span>
              <span className="text-base">円（税抜）</span>
            </div>
            <div className="mt-2 text-sm text-neutral-500">
              3ヶ月（月2回 × 計6回のセッション）
            </div>

            <div
              className="mt-7 grid grid-cols-2 gap-px rounded-xl overflow-hidden"
              style={{ backgroundColor: "#EFE7DB" }}
            >
              <div className="bg-white p-5">
                <div className="text-xs text-neutral-500">月額換算</div>
                <div className="mt-1 font-bold">50,000円 / 月</div>
              </div>
              <div className="bg-white p-5">
                <div className="text-xs text-neutral-500">日額換算</div>
                <div className="mt-1 font-bold">約1,667円 / 日</div>
              </div>
            </div>

            <div className="mt-7 text-sm text-neutral-700 leading-relaxed">
              支払方法：一括 または 3回分割（手数料なし）
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Month 1終了時点の全額返金保証",
                "3ヶ月後の自走保証（未達の場合1ヶ月無償延長）",
                "チャットサポート3ヶ月無制限（平日9:00-18:00）",
              ].map((g) => (
                <div key={g} className="flex gap-3 items-start">
                  <span
                    className="text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center mt-0.5 shrink-0"
                    style={{ backgroundColor: BRAND }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">{g}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-8 rounded-xl p-5 text-sm leading-[2] border"
              style={{
                backgroundColor: "#FBF7F2",
                borderColor: "#EFE7DB",
                color: "#5F4A35",
              }}
            >
              事務スタッフを1名、半年雇うと約60万円。
              <br />
              AI看板娘なら15万円で業務効率化と、3ヶ月後も残り続けるAIが手に入ります。
            </div>

            <a
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center text-sm font-medium rounded-full py-4 text-white transition hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              まずは無料相談から
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FAQSection() {
  const faq = [
    {
      q: "パソコンが苦手でも大丈夫ですか？",
      a: "はい。セッションは画面共有で進めるので、マウス操作ができれば問題ありません。分からないところは都度、一緒に確認していきます。",
    },
    {
      q: "どのAIを使えばいいか分かりません",
      a: "プログラム内で3つのAI（ChatGPT / Claude / Gemini）の使い分けを一緒に整理します。どれか1つに絞る必要はなく、用途ごとに使い分ける方針でお伝えしています。",
    },
    {
      q: "3ヶ月以上続けたい場合は？",
      a: "卒業後に月額5,000円〜のフォローアップ契約をご用意しています。月1回のオンライン相談と、チャットサポートの継続が中心です。",
    },
    {
      q: "複数店舗でも大丈夫ですか？",
      a: "1店舗での受講が基本です。複数店舗の場合はご相談ください。店舗ごとに&ldquo;専用AI&rdquo;を育てる都合上、追加料金でご対応する形になります。",
    },
    {
      q: "対面セッションはありますか？",
      a: "基本はZoomです。東京都内の場合は対面も相談可能です。遠方の場合もオンラインで過不足なく進められるよう設計しています。",
    },
    {
      q: "AIが苦手で、Month 1で合わないと感じたら？",
      a: "Month 1終了時点で全額返金します。まずは安心してお試しいただける設計にしています。",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold">よくある質問</h2>
        <p className="mt-6 text-neutral-700 leading-[2]">
          受講前によくいただく質問をまとめました。
        </p>

        <Accordion className="mt-10 w-full">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-[15px] font-medium leading-relaxed py-5">
                <span className="flex gap-3 items-baseline">
                  <span
                    className="text-xs tracking-widest shrink-0"
                    style={{ color: BRAND_ACCENT }}
                  >
                    Q{i + 1}
                  </span>
                  <span>{item.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[2] text-neutral-700 pl-9">
                <span dangerouslySetInnerHTML={{ __html: item.a }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div
          className="rounded-3xl p-8 md:p-16 text-center"
          style={{ backgroundColor: BRAND, color: "white" }}
        >
          <div
            className="inline-block text-xs tracking-[0.2em] uppercase mb-4 opacity-70"
          >
            Free consultation
          </div>
          <h2 className="text-2xl md:text-[32px] font-bold leading-relaxed">
            まずは30分、話してみませんか？
          </h2>
          <p className="mt-6 text-sm md:text-base leading-[2] opacity-95 max-w-xl mx-auto">
            無料のオンライン相談で、あなたのお店にAI看板娘が合うかどうか、一緒に確認します。
            無理な勧誘はありません。
            <br className="hidden sm:inline" />
            「うちには違うな」と感じたら、そのまま帰っていただいて大丈夫です。
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:contact@miinai.example"
              className="inline-flex items-center justify-center text-sm md:text-base font-semibold rounded-full px-9 py-4 shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "white", color: BRAND }}
            >
              無料相談を予約する
            </a>
          </div>
          <p className="mt-6 text-xs opacity-70">
            ※ 現在、月5名限定でソフトローンチ中です
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-neutral-200 py-12"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: BRAND_ACCENT }}
              aria-hidden="true"
            />
            <span className="text-sm font-bold">AI看板娘</span>
          </div>
          <div className="mt-3 text-xs text-neutral-500">
            運営: miinAI
          </div>
        </div>
        <nav className="flex flex-wrap gap-5 text-xs text-neutral-500">
          <a href="#" className="hover:text-neutral-800">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:text-neutral-800">
            特定商取引法に基づく表記
          </a>
          <a href="#contact" className="hover:text-neutral-800">
            お問い合わせ
          </a>
        </nav>
        <div className="text-xs text-neutral-400">
          © 2026 miinAI / AI看板娘
        </div>
      </div>
    </footer>
  );
}
