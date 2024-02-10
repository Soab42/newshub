import LeftFeed from "./LeftFeed";
import RightFeed from "./RightFeed";

export default function NewsFeed() {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* <!-- left --> */}
        <LeftFeed />
        {/* <!-- right --> */}
        <RightFeed />
      </div>
    </main>
  );
}
