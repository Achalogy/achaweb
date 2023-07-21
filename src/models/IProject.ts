import { Model, Schema, model, models } from "mongoose"

export interface IProject {
  title: string,
  tags: string[],
  time: string,
  description: string,
  image: string,
  icon: string,
  url: string
}

const schema = new Schema<IProject>({}, { strict: false })

const MProjects: Model<IProject> = models.project || model("project", schema)

export {
  MProjects
}