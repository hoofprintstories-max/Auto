export type CreateProjectInput = {
  title: string;
  idea: string;
  durationSec: number;
  tone: string;
  language: string;
  voiceStyle: string;
  visualStyle: string;
  targetAudience: string;
  niche: string;
};

export function buildGenerationPayload(input: CreateProjectInput) {
  return {
    retentionProfile: {
      hookSeconds: 15,
      pacing: "high-retention",
      ctaPlacement: "late-mid"
    },
    input
  };
}
