import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext(null);

export const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/?format=json',
    );
    const { results } = await response.json();
    const newPlanets = results.filter((planet) => delete planet.residents)
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: false }));
    setFilteredPlanets(newPlanets);
    return setData(newPlanets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const memo = useMemo(
    () => ({
      data,
      filteredPlanets,
      setFilteredPlanets,
    }),
    [data, filteredPlanets],
  );

  StarWarsProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  return (
    <StarWarsContext.Provider value={ memo }>{children}</StarWarsContext.Provider>
  );
};
