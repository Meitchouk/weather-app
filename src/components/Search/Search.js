import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';
import { useTranslation } from 'react-i18next';

const uniqBy = (a, key) => {
  var seen = {};
  return a.filter(function(item) {
      var k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  })
}

const Search = ({ onSearchChange }) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);
    const mapped = citiesList.data.map((city) => {
      return {
        id: city.id,
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      };
    });

    return {
      options: uniqBy(mapped, item => item.id)
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <AsyncPaginate
      placeholder={t('SEARCH-CITY')}
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
      loadingMessage={() => t('LOADING')}
    />
  );
};

export default Search;
