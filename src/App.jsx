import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BarChart2, MousePointer2, Globe, Users, MessageSquare, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import ChatBot from './components/ChatBot';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'サービス', href: '#services' },
    { name: '私たちの強み', href: '#strengths' },
    { name: '導入事例', href: '#cases' },
    { name: '会社情報', href: '#company' },
  ];

  const services = [
    {
      title: 'Web広告運用',
      desc: 'Google, Yahoo!, Metaなど、成果に直結する最適な広告運用を実現します。',
      icon: <MousePointer2 className="w-8 h-8 text-[#2563EB]" />
    },
    {
      title: 'SEO・コンテンツ制作',
      desc: '検索エンジンからの流入を最大化し、ブランドの信頼性を高めるコンテンツを提供。',
      icon: <BarChart2 className="w-8 h-8 text-[#2563EB]" />
    },
    {
      title: 'DX支援・ツール導入',
      desc: '営業効率化やデータ活用など、企業のデジタル変革をトータルでサポート。',
      icon: <Globe className="w-8 h-8 text-[#2563EB]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-gray-900 font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className={`text-3xl font-black tracking-tighter ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              SOLD<span className="text-[#2563EB]">OUT</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-gray-600 hover:text-[#2563EB] transition-colors tracking-wide">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-[#2563EB] text-white px-7 py-3 rounded-lg font-bold text-sm hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
              お問い合わせ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-2xl">
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-bold text-gray-800 hover:text-[#2563EB]" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-[#2563EB] text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-blue-500/30" onClick={() => setIsMenuOpen(false)}>
                お問い合わせ
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        {/* モダンな背景装飾 */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-blue-50 rounded-bl-[120px] -z-10 hidden lg:block opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-10 z-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-gray-100 shadow-sm rounded-full text-xs font-extrabold tracking-widest text-[#2563EB] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
                <span>Digital Marketing Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                中小・ベンチャーの<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
                  成長を加速させる。
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
                ソウルドアウトは、日本全国の中小・ベンチャー企業の潜在能力をデジタルマーケティングの力で引き出し、地方から日本を元気にすることを目指しています。
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button className="bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1D4ED8] transition-all flex items-center justify-center group shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40">
                  サービスを見る
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:border-gray-900 transition-all">
                  導入事例を詳しく
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-10 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-black text-gray-900 mb-1">3,000<span className="text-[#2563EB]">+</span></div>
                  <div className="text-sm font-bold text-gray-400">累計支援社数</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-gray-900 mb-1">20<span className="text-[#2563EB]">+</span></div>
                  <div className="text-sm font-bold text-gray-400">全国拠点数</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative w-full">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                  alt="Business Meeting"
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2563EB] rounded-full -z-10 mix-blend-multiply opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-[#2563EB] font-bold tracking-widest text-sm mb-4 uppercase">Services</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">最適なソリューションを<br/>提供します</h2>
            </div>
            <p className="text-gray-500 font-medium pb-2 max-w-md">お客様のビジネスフェーズや課題に合わせ、デジタルを軸とした多角的なアプローチで成長を支援します。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#FCFCFC] p-10 rounded-3xl hover:bg-white transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 group">
                <div className="bg-white border border-gray-100 shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(service.icon, { className: "w-8 h-8 group-hover:text-[#2563EB] transition-colors" })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 font-medium">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                  詳細を見る <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1a1a] rounded-bl-[150px] -z-10 hidden lg:block"></div>
        <div className="absolute top-20 right-20 text-[#2563EB] opacity-5">
           <Users size={400} />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <div className="text-[#2563EB] font-bold tracking-widest text-sm mb-4 uppercase">Our Strengths</div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight tracking-tight">
                なぜ、ソウルドアウトが<br />選ばれるのか
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-800 text-[#2563EB] rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">01</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 tracking-tight">日本全国を網羅する地方拠点網</h4>
                    <p className="text-gray-400 leading-relaxed font-medium">全国主要都市に拠点を構え、対面でのコミュニケーションを重視。地域の特性に合わせた戦略を立案します。</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-800 text-[#2563EB] rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">02</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 tracking-tight">中小企業に特化した独自メソッド</h4>
                    <p className="text-gray-400 leading-relaxed font-medium">大手とは異なる中小企業ならではの制約や強みを理解し、限られた予算で最大の結果を出す手法を確立しています。</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-800 text-[#2563EB] rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">03</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 tracking-tight">一貫した伴走型サポート</h4>
                    <p className="text-gray-400 leading-relaxed font-medium">単なる広告運用代行ではなく、事業計画の策定から実行、改善まで、お客様の「マーケティング部」として機能します。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-[2rem] p-10 md:p-14 relative w-full">
                <MessageSquare className="w-12 h-12 text-[#2563EB] mb-8" />
                <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-10 text-gray-100 tracking-tight">
                  「デジタル化の第一歩を、誰よりも近くで支えてくれました。今では売上の半分以上がWeb経由です。」
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-gray-600 overflow-hidden border-2 border-gray-500">
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white tracking-wide">佐藤 健太 氏</div>
                    <div className="text-gray-400 text-sm font-medium">株式会社サンプル 代表取締役</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-[#2563EB] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">あなたのビジネスを、<br />デジタルの力で次のステージへ</h2>
          <p className="text-xl text-blue-100 mb-12 font-medium">
            現状の課題整理から、具体的な集客プランの提案まで、まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-black transition-all shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1">
              無料相談を予約する
            </button>
            <div className="flex items-center gap-4 text-left border-l-0 md:border-l-2 border-blue-400 pl-0 md:pl-8 py-2">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-blue-200 font-bold mb-1">お電話でのご相談</div>
                <div className="text-2xl font-black tracking-wider">03-xxxx-xxxx</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="col-span-1 md:col-span-4">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer">
                <span className="text-3xl font-black tracking-tighter text-gray-900">
                  SOLD<span className="text-[#2563EB]">OUT</span>
                </span>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 max-w-xs">
                中小・ベンチャー企業のデジタルマーケティング支援。全国20拠点以上で展開し、地方企業の成長をサポートします。
              </p>
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#2563EB] hover:text-white cursor-pointer transition-all border border-gray-100">
                  <Globe size={20} />
                </div>
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#2563EB] hover:text-white cursor-pointer transition-all border border-gray-100">
                  <Mail size={20} />
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 md:col-start-6">
              <h4 className="text-gray-900 font-black tracking-wider mb-6">サービス</h4>
              <ul className="space-y-4 font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Web広告運用</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">コンテンツマーケティング</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">DXコンサルティング</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">EC支援サービス</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-gray-900 font-black tracking-wider mb-6">会社情報</h4>
              <ul className="space-y-4 font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">代表メッセージ</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">採用情報</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">ニュースリリース</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-3">
              <h4 className="text-gray-900 font-black tracking-wider mb-6">お問い合わせ</h4>
              <ul className="space-y-5 font-medium text-gray-500">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">東京都文京区後楽1-4-14<br/>後楽森ビル19F</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-[#2563EB] flex-shrink-0" />
                  <span>03-xxxx-xxxx</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={20} className="text-[#2563EB] flex-shrink-0" />
                  <span>contact@soldout.co.jp</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-400">
            <p>&copy; 2024 SOLDOUT Inc. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-[#2563EB] transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">サイト利用規約</a>
            </div>
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
};

export default App;
