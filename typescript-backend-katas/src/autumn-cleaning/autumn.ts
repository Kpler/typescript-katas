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
    const teamName = 'Leaf Team'
    const assignments :Record<string, { volunteer: Volunteer; task: Task }[]> = {[teamName]: []}
    for (const task of tasks) {
        const doesTaskMatchRule = rules.some(rule => rule.match.type === task.type)

        if (doesTaskMatchRule) {
          const volunteersMatching = volunteers.filter(vol => vol.skillLevel >= task.difficulty);

          if (volunteersMatching.length) {
            // TODO: check volunteers
            assignments[teamName].push({
                volunteer: volunteersMatching[0],
                task: task,
            })
          }

        }
    }
    return assignments;
}
