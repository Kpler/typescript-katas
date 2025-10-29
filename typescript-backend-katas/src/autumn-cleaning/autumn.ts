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

type AssigmentResult = {
    [team: string]: { volunteer: Volunteer; task: Task }[]
}

export function assignTasks(
    volunteers: Volunteer[],
    tasks: Task[],
    rules: AssignmentRule[],
    defaultTeam?: string
): AssigmentResult {

    const result: AssigmentResult = {}

    const assignedVolunteers = new Set<string>();

    const sortedRules = rules
        .sort((rule1, rule2) => (rule2.priority || 0) - (rule1.priority || 0))

    for (const rule of sortedRules) {
        const matchingTask = tasks.find(task => rule.match.type === task.type)
        const team = rule?.team

        if (!matchingTask) continue;

        const assignedVolunteer = volunteers.find(
            v => !assignedVolunteers.has(v.id)
        )

        if (assignedVolunteer) {
            assignedVolunteers.add(assignedVolunteer.id)

            if (!result[team]) {
                result[team] = [];
            }

            result[team].push({
                volunteer: assignedVolunteer,
                task: matchingTask
            })
        }
    }

    return result;
}

