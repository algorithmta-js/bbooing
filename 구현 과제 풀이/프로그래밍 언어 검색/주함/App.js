import SearchInput from "./components/SearchInput.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = function (nextState) {
    //
  };

  const searchInput = new SearchInput({
    $target,
    initialState: "",
  });
}
