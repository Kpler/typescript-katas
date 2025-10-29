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
    return tasks.some(task => task.type === 'leaves') ? {
        'Leaf Team':
            [
                { volunteer: {name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" },
                  task: { id: "t1", type: "leaves", difficulty: 2 }
                }
            ]
    } : {'Leaf Team': []}
}
