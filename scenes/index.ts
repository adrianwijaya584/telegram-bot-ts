import { Scenes } from "telegraf"
import addCatScene from "./addCatScene"

//@ts-ignore
const scenes= new Scenes.Stage<Scenes.WizardContext>([addCatScene])

export default scenes