import React from 'react'
import FilterButton from '../../utils/filterButton'
import Divider from '../../utils/divider'
import Breadcrumbs from '../../utils/breadCrumbs'
import SearchBar from '../../utils/searchBar'
import CardDataCategory from '../../utils/cardDataCategory'
import { getFromApi } from '../../../api/jikanApi'
import { useQuery } from 'react-query'
import Pagination from '../../utils/pagination'
import { useLocation, useSearchParams } from 'react-router-dom'
import qs from "qs"

const filterBy = [ "Favorites", "Name",];

const PeoplePage = () => {
  const [searchParams] = useSearchParams();

  let searchedQuery = getSearchParams(searchParams);

  const url = `https://api.jikan.moe/v4/people${searchedQuery.data? "?"+qs.stringify(searchedQuery.data, { skipNulls: true }) : ''}`;
  const { data, isLoading, isError, error } = useQuery(['list-people', url], async () => getFromApi(url), { refetchOnWindowFocus: false, keepPreviousData: true }
  );

  if (isError) {
    return <h2>{error}</h2>
  }
  if (!isLoading && data.data != []) {

    let maxPage = data.pagination.last_visible_page;
    const cards = data.data.map(
      (d, index) => {
        if(index + 1 <= 3 && searchedQuery.top){
          return <CardDataCategory key={d.mal_id} popularity={index + 1} data={d}/>
        }else{
          return <CardDataCategory key={d.mal_id} data={d}/>
        }
        // return <CardDataCategory key={d.mal_id} data={d} />
      }
    )
    return (
      <div>
        <Breadcrumbs />
        <SearchBar />
        <Divider left={<h1 className='text-white font-bold text-xl'>Seiyuu</h1>} right={<FilterButton filterBy={filterBy} />} />
        {
          data.data.length != 0 ?
            <>
              <div className='grid grid-cols-4 gap-4'>
                {cards}
              </div>

              {data.pagination.last_visible_page != 1 && <Pagination maxPage={maxPage} />}
            </>
            :
            <div className='flex justify-center items-center h-96'>
              <h2 className='text-white text-4xl font-bold'>Data not found</h2>
            </div>
        }
      </div>
    )
  }
  return (<h2 className='text-white'>loading...</h2>)
}

export default PeoplePage

function getSearchParams(searchParams){
  let top = false;
  let data = qs.parse(useLocation().search, { ignoreQueryPrefix: true });

  if(searchParams.get("order_by") == '' || !searchParams.get("order_by")){
    data = {...data, "order_by": "favorites"};
  }
  if(searchParams.get("sort") == '' || !searchParams.get("sort")){
    data = {...data, "sort": "desc"};
  }
  if(searchParams.get("page") == '' || !searchParams.get("page")){
    data = {...data, "page": 1};
  }

  if(data.order_by == 'favorites' && data.sort == 'desc' && (!searchParams.get("q") || searchParams.get("q") == '') && data.page == 1){
    top = true;
  }
  return {top, data}
}