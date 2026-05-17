export type WorkflowStage =
  | "script"
  | "storyboard"
  | "visual_prompts"
  | "assets"
  | "voiceover"
  | "edit_plan"
  | "render"
  | "export";

export const pipeline: WorkflowStage[] = [
  "script",
  "storyboard",
  "visual_prompts",
  "assets",
  "voiceover",
  "edit_plan",
  "render",
  "export"
];

export function buildScriptPrompt(idea: string, durationSec: number, tone: string) {
  return `Create a timestamped YouTube narration with scene instructions for ${durationSec}s. Tone: ${tone}. Idea: ${idea}. Include hook, curiosity loops, SFX, transitions and text overlays.`;
}
