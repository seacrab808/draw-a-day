import Navbar from '@/components/utils/Navbar';
import Header from '../../components/utils/Header';

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-[100dvh] relative">
      {/* 상단 Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* 본문 */}
      <main className="flex-1 overflow-y-auto pb-[70px]">{children}</main>

      {/* 하단 Navbar */}
      <Navbar />
    </div>
  );
}
