import { useLocation } from "react-router-dom";
import queryString from "query-string";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParams = queryString.parse(search);
  return queryParams;
};

export default useQueryParams;
