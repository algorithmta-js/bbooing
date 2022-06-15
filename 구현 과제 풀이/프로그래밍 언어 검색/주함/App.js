import SearchInput from "./components/SearchInput.js";
import { fetchLanguages } from "./core/api.js";

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
    onChange: async (keyword) => {
      const data = await fetchLanguages(keyword);
      console.log(data);
    },
  });
}
