export default function Template({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>
        我是 Template
      </h2>
      {children}
    </div>
  )
}