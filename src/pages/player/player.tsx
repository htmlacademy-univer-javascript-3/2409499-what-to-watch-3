import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectIsLoading } from '../../store/data-process/data-process.selectors';
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { fetchFilmByID } from '../../store/api-actions';
import { selectFilm } from '../../store/film-process/film-process.selectors';
import Spinner from '../../components/spinner/spinner';
import PageNotFound from '../page-not-found/page-not-found';

function Player(): JSX.Element {
  const id = Number(useParams().id);
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState(true);
  const [playedTime, setPlayedTime] = useState(0);

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  const film = useAppSelector(selectFilm);
  const isLoading = useAppSelector(selectIsLoading);

  const playerRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const playerScreenRef = useRef() as MutableRefObject<HTMLDivElement>;

  if (playerRef && playerRef.current) {
    playerRef.current.ontimeupdate = () => {
      setPlayedTime(playerRef.current.currentTime);
    }
  }

  const getTimeLeft = useCallback(() => {
    if (film === null) {
      return '00:00:00';
    }

    const timeLeft = film.runTime * 60 - playedTime;
    const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeLeft / 60) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((timeLeft % 60)).toString().padStart(2, '0');
    return (hours !== '00') ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  }, []);

  const handleFullScreen = () => {
    document.fullscreenElement ? document.exitFullscreen() : playerScreenRef.current.requestFullscreen();
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!film) {
    return <PageNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>Плеер</title>
      </Helmet>
      <div className="player" ref={playerScreenRef}>
        <video src={film.videoLink} className="player__video" poster={film.posterImage} ref={playerRef}
          onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} autoPlay></video>

        <Link to={`/films/${id}`} className="player__exit">Exit</Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={playedTime / 60} max={film.runTime}></progress>
              <div className="player__toggler" style={{ left: `${(playedTime / (film.runTime * 60)) * 100}%` }}>Toggler</div>
            </div>
            <div className="player__time-value">-{getTimeLeft()}</div>
          </div>

          <div className="player__controls-row">
            {
              isPlaying ? (
                <button type="button" className="player__play" onClick={() => playerRef.current.pause()}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button>
              ) : (
                <button type="button" className="player__play" onClick={() => playerRef.current.play()}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
              )
            }

            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen" onClick={handleFullScreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
