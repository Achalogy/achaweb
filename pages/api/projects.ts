import connectDB from "db/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { MProjects } from "src/models/IProject";

export default connectDB(async (req: NextApiRequest, res: NextApiResponse) => {
  const projects = await MProjects.find()

  return res.status(200).json(projects)
  
})