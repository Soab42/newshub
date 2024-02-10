import MainNewsFeed from "./MainNewsFeed";
import TrendingNewsFeed from "./TrendingNewsFeed";

export default function NewsFeed() {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* Here actually should have a trending news portion or to show relevant news based on current news .But there is no option for that from that database. Thats why I keep that functionality for further improvisation.I make a calculation based on current news data and split it into two portion and show data based on length on news data  */}
        {/* <!-- left --> */}
        <MainNewsFeed />
        {/* <!-- right --> */}
        <TrendingNewsFeed />
      </div>
    </main>
  );
}
