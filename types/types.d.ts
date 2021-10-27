import { Update } from ".pnpm/typegram@3.4.3/node_modules/typegram";
import { Context } from "telegraf";
import { SceneContextScene, WizardContextWizard, WizardSessionData } from "telegraf/typings/scenes";

export {}

declare global {
  // make interface here
  type MySceneContext= Context<Update> & { scene: SceneContextScene<any, WizardSessionData>; wizard: WizardContextWizard<any>; }
  interface Cats  {
    name: String
    race: String
  }
}