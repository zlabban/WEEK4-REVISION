import { promises as fs } from "node:fs";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";

const filePath = path.resolve(process.cwd(), "teams.json");