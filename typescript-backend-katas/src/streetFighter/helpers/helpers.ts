import {parse} from "csv-parse";
import * as fs from "fs";
import * as path from "path";
import {Fighter} from "../Fighter";

// TODO: any? It's not good!
export const parseCsvFile = async (): Promise<any[]> => {
    const csvFilePath = path.resolve("src/streetFighter/sources/SFPL_DB/2021-2022.csv");
    const headers = ['timeslot', 'home', 'roundsWon1', 'roundsWon2', 'away'];
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

export const parseJsonFile = (): Fighter[] => {
    const filePath = path.resolve("src/streetFighter/sources/getFcaApiFighters.json");
    const jsonString = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(jsonString);

    const fighters: Fighter[] = jsonData.map((fighterData: any) => {
        const {id, firstname, lastname, country} = fighterData;
        return new Fighter(id, firstname, lastname, country);
    });

    return fighters;
};
