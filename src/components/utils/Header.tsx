'use client';

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 max-w-[430px] mx-auto">
      <div className="mx-auto w-full max-w-[430px] relative overflow-hidden ">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative flex items-center justify-between px-6 h-[80px] pt-[var(--safe-top)] bg-[#FDEBEE]/40">
          <div className="text-[#DD9CA7]">안녕하세요,</div>

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
