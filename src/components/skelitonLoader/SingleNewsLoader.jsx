export default function SingleNewsLoader() {
  return (
    <div className="flex-1 gap-2 flex flex-col justify-between">
      <div className="w-80 h-24 skeleton-loading"></div>
      <div className="w-80 h-36 skeleton-loading"></div>
      <div className="w-32 h-4 skeleton-loading"></div>
    </div>
  );
}
