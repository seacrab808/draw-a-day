import Header from '../../components/utils/Header';

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="flex items-center justify-between md:mt-5">
      <Header />
      {children}
    </header>
  );
}
