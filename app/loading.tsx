export default function Loading() {
  return (
    <div className="fixed inset-0 bg-cream/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <div className="mt-4 text-primary font-medium">Načítání...</div>
      </div>
    </div>
  )
}