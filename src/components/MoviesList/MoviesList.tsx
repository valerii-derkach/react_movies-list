import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieItem } from '../../react-app-env';

type Props = {
  movies: MovieItem[]
};

export const MoviesList: React.FC<Props> = ({
  movies = [],
}) => (
  <div className="movies">
    {movies.map(movie => (
      <React.Fragment key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      </React.Fragment>
    ))}
  </div>
);
