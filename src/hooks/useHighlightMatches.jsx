import { useSearchProvider } from "../contexts/SearchContext";

export function useHighlightMatches() {
  const { searchValue } = useSearchProvider();

  const highlightMatches = (text) => {
    if (!searchValue) return text; // If there's no query, return the original text
    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = text && text?.split(regex);

    return parts?.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-green-600/30">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return highlightMatches;
}
