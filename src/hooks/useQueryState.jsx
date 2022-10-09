import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import qs from "qs"

export function useQueryState(query, utils={filterQuery: [], isClearAll: false}) {
  const location = useLocation()
  const navigate = useNavigate();

  const setQuery = useCallback(
    value => {
      let existingQueries = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      })
      // FILTERING
      if(utils.isClearAll){
        existingQueries = {};
      }else if(utils.filterQuery.length != 0){
        existingQueries = filteringQuery(existingQueries, utils.filterQuery);
      }
      
      const queryString = qs.stringify(
        { ...existingQueries, [query]: value },
        { skipNulls: true }
      )
      navigate(`${location.pathname}?${queryString}`)
    },
    [navigate, location, query]
  )

  return [
    qs.parse(location.search, { ignoreQueryPrefix: true })[query],
    setQuery,
  ]
}

function filteringQuery(existingQueries,filterQuery){
  let filterExistingQuery = {};
    Object.entries(existingQueries)
      .forEach(([key, value]) => {
        let flag = filterQuery.includes(key);
        if (!flag) {
          filterExistingQuery = { ...filterExistingQuery, [key]: value };
        }
      });
  return filterExistingQuery;
}
