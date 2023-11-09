type VideoPlayerProps = {
  autoPlay?: boolean;
  src: string;
  muted?: boolean;
  poster: string;
  width: number;
  height: number;
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
    >
    </video>
  );
}
