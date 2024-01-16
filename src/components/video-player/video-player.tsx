type VideoPlayerProps = {
  autoPlay?: boolean;
  src: string;
  muted?: boolean;
  poster: string;
  width: string;
  height: string;
};

export function VideoPlayer({ autoPlay, src, muted, poster, width, height }: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={src}
      autoPlay={autoPlay}
      muted={muted}
      poster={poster}
      width={width}
      height={height}
      data-testid="video-player"
    >
    </video>
  );
}
