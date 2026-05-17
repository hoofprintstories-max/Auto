export function buildFfmpegCommand(manifestPath: string, outputPath: string) {
  return [
    "ffmpeg",
    "-f", "concat",
    "-safe", "0",
    "-i", manifestPath,
    "-vf", "scale=1920:1080,format=yuv420p",
    "-r", "60",
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "18",
    "-c:a", "aac",
    "-b:a", "320k",
    outputPath
  ];
}
