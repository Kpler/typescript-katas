import { parse } from "csv-parse";
import * as fs from "fs";
import * as path from "path";

// TODO: any? It's not good!
export const parseCsvFile = async (): Promise<any[]> => {
  const csvFilePath = path.resolve("src/streetFighter/sources/SFPL_DB/2021-2022.csv");
  const headers = ['timeslot','home','roundsWon1','roundsWon2','away'];
  const records = [];
  const parser = fs
    .createReadStream(csvFilePath)
    .pipe(parse({
      delimiter: ',',
      columns: headers,
    }));
  for await (const record of parser) {
    records.push(record);
  }
  return records;
};

interface testInterface {
  id: number;
  firstname: string;
  test: boolean; // Warning: you can see here that the type is not checked
}

export const parseJsonFile = (): testInterface[] => {
  const filePath = path.resolve("src/streetFighter/sources/getFcaApiFighters.json");
  const jsonString = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(jsonString);
  return jsonData;
};
