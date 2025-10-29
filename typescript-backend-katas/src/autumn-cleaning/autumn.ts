interface Volunteer {
    id: string;
    name: string;
    stamina: number;      // e.g. 0–100
    skillLevel: number;   // 1–5
    available: boolean;
}

interface Task {
    id: string;
    type: "leaves" | "branches" | "compost" | "misc";
    difficulty: number;   // 1–5
    urgent?: boolean;
}

interface AssignmentRule {
    match: Partial<Task> & {
        minDifficulty?: number;
        maxDifficulty?: number;
    };
    condition?: Partial<Volunteer>;
    priority?: number;
    team: string;
}

export function assignTasks(
    volunteers: Volunteer[],
    tasks: Task[],
    rules: AssignmentRule[],
    defaultTeam?: string
): { [team: string]: { volunteer: Volunteer; task: Task }[] } {

    const result: { [team: string]: { volunteer: Volunteer; task: Task }[] } = {}

    const assignedVolunteers = new Set<string>();

    for (const task of tasks) {
        const matchedRule = rules.find(rule => rule.match.type === task.type)
        const team = matchedRule?.team

        if (!team) continue;

        const assignedVolunteer = volunteers.find(
                v => !assignedVolunteers.has(v.id)
            )

        if (assignedVolunteer) {
            assignedVolunteers.add(assignedVolunteer.id)

            if(!result[team]) {
                result[team] = [];
            }

            result[team].push({
                volunteer: assignedVolunteer,
                task: task
            })
        }
    }
    
    return result

    // const volunteer: Volunteer = volunteers[0];
    // const task: Task = tasks[0];
    // const rule: AssignmentRule = rules[0];

    // if (task.type == rule.match.type) {
    //     return {
    //         "Leaf Team": [
    //             {
    //                 volunteer: { name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" },
    //                 task: { id: "t1", type: "leaves" as const, difficulty: 2 }
    //             }
    //         ]
    //     }
    // }
    // return {"Leaf Team": []}
}

// → { "Leaf Team": [ { volunteer: ..., task: ... } ] }
