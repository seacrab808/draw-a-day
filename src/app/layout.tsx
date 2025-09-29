import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '한판',
  description: '최저가 비교 사이트',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-[100dvh] bg-neutral-100 overflow-x-hidden">
        <div
          className="relative mx-auto w-full max-w-[430px] min-h-[100dvh]
                        bg-background text-foreground
                        md:mb-6 md:mt-0
                        md:border md:border-black/10 dark:md:border-white/10
                        md:shadow-sm md:shadow-black/10 overflow-hidden"
        >
          {/* 좌우/하단 safe-area만 유지 */}
          <div
            className="
            pl-[max(env(safe-area-inset-left),20px)]
            pr-[max(env(safe-area-inset-right),20px)]
            pb-[max(env(safe-area-inset-bottom),12px)]
          "
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
