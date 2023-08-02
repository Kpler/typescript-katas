import { parse } from "csv-parse";
import * as fs from "fs";

export const parseCsvFile = async <T>(filePath: string, delimiter: string): Promise<T[]> => {
  const csvString = fs.readFileSync(filePath, 'utf-8');
  const parser = parse(csvString, {
      columns: true,
      delimiter,
      cast: true,
      bom: true,
  });

  const records: T[] = [];
  for await (const record of parser) {
    records.push(record as T);
  }
  return records;
};

export const parseJsonFile = <T>(filePath: string): T[] => {
  const jsonString = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(jsonString);
  return jsonData;
};
