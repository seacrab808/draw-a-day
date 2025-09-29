'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 top-0 z-50 max-w-[430px] mx-auto">
      <div className="mx-auto w-full max-w-[430px] relative overflow-hidden ">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative flex items-center justify-between px-6 h-[80px] pt-[var(--safe-top)]">
          <div
            className="relative h-[40px] w-[95px] cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image
              src="/logo/hanpan-main.svg"
              alt="한판"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* <button className="mt-2 text-md font-semibold text-[#3C7A3C] active:translate-y-[1px]">
            최근 본 항목
          </button> */}
        </div>

        <div className="relative"></div>
      </div>
      <div className="-mt-px h-3 w-full bg-gradient-to-b from-black/10 to-transparent opacity-40 pointer-events-none" />
    </div>
  );
}
