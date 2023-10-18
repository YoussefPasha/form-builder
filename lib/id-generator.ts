import { v4 as uuidv4 } from "uuid";

export function idGenerator(): string {
  return uuidv4();
}
