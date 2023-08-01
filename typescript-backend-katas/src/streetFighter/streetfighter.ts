import { parseCsvFile } from "./helpers/helpers";

export const rank = async (season: string): Promise<Array<string>> => {
    const test: any[] = await parseCsvFile(season)
    console.log(test)
    return test
}
