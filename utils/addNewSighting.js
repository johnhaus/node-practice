import { getData } from '../utils/getData.js';
import { randomUUID } from "crypto";
import path from 'node:path';
import fs from 'node:fs/promises';

export async function addNewSighting(newSighting) {

  try {
    const sightings = await getData();

    const generatedId = randomUUID();
    newSighting.uuid = generatedId;

    sightings.push(newSighting)

    const pathJSON = path.join('data', 'data.json')

    await fs.writeFile(
      pathJSON,
      JSON.stringify(sightings, null, 2),
      'utf8'
    );
  } catch (err) {
    throw new Error(err);
  }

}
