import React from "react";
import ChWhyYourAgentHasAmnesia from "./why-your-agent-has-amnesia";
import ChTheThreeLayerBrain from "./the-three-layer-brain";
import ChKnowledgeBase from "./knowledge-base";
import ChDailyNotes from "./daily-notes";
import ChTacitKnowledge from "./tacit-knowledge";
import ChHeartbeatAndCron from "./heartbeat-and-cron";
import ChSecurityBasics from "./security-basics";
import ChDayOneChecklist from "./day-one-checklist";
import ChCopyPasteConfigs from "./copy-paste-configs";
import ChCronRecipes from "./cron-recipes";
import ChCaseStudyTrading from "./case-study-trading";
import ChCaseStudyContent from "./case-study-content";
import ChCaseStudyValidation from "./case-study-validation";
import ChBottleneckElimination from "./bottleneck-elimination";
import ChMultiAgentOrchestration from "./multi-agent-orchestration";
import ChPromptInjectionDefense from "./prompt-injection-defense";
import ChProgressiveTrust from "./progressive-trust";
import ChCostOptimization from "./cost-optimization";
import ChDebuggingObservability from "./debugging-observability";
import ChToolApiIntegration from "./tool-api-integration";
import ChPromptEngineeringAgents from "./prompt-engineering-agents";
import ChRevenuePlaybook from "./revenue-playbook";
import ChObsidianSecondBrain from "./obsidian-second-brain";
import ChMemoryThatScales from "./memory-that-scales";
import ChAgentWorkspace from "./agent-workspace";
import ChAgentTeams from "./agent-teams";
import ChDailyRoutine from "./daily-routine";
import ChBuildingInPublic from "./building-in-public";

export const chapterComponents: Record<string, React.ComponentType> = {
  "why-your-agent-has-amnesia": ChWhyYourAgentHasAmnesia,
  "the-three-layer-brain": ChTheThreeLayerBrain,
  "knowledge-base": ChKnowledgeBase,
  "daily-notes": ChDailyNotes,
  "tacit-knowledge": ChTacitKnowledge,
  "heartbeat-and-cron": ChHeartbeatAndCron,
  "security-basics": ChSecurityBasics,
  "day-one-checklist": ChDayOneChecklist,
  "copy-paste-configs": ChCopyPasteConfigs,
  "cron-recipes": ChCronRecipes,
  "case-study-trading": ChCaseStudyTrading,
  "case-study-content": ChCaseStudyContent,
  "case-study-validation": ChCaseStudyValidation,
  "bottleneck-elimination": ChBottleneckElimination,
  "multi-agent-orchestration": ChMultiAgentOrchestration,
  "prompt-injection-defense": ChPromptInjectionDefense,
  "progressive-trust": ChProgressiveTrust,
  "cost-optimization": ChCostOptimization,
  "debugging-observability": ChDebuggingObservability,
  "tool-api-integration": ChToolApiIntegration,
  "prompt-engineering-agents": ChPromptEngineeringAgents,
  "revenue-playbook": ChRevenuePlaybook,
  "obsidian-second-brain": ChObsidianSecondBrain,
  "memory-that-scales": ChMemoryThatScales,
  "agent-workspace": ChAgentWorkspace,
  "agent-teams": ChAgentTeams,
  "daily-routine": ChDailyRoutine,
  "building-in-public": ChBuildingInPublic,
};
