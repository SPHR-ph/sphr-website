export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="animate-pulse flex flex-col items-center">
  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700 mb-4" />
        <div className="h-4 w-48 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-32 bg-gray-200 rounded" />
        <span className="mt-4 text-gray-500 text-lg">Loading assets...</span>
      </div>
    </div>
  );
}
