import { assignTasks } from './autumn';

describe('Autumn Cleaning - Level 0: Basic Matching', () => {
    describe('assignTasks', () => {
        it('should assign a task to a team based on simple type matching', () => {
            const volunteers = [{ name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" }];
            const tasks = [{ id: "t1", type: "leaves" as const, difficulty: 2 }];
            const assignmentRules = [{ match: { type: "leaves" as const }, team: "Leaf Team" }];

            const result = assignTasks(volunteers, tasks, assignmentRules);

            expect(
                result
            ).toEqual({
                "Leaf Team": [
                    {
                        volunteer: { name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" },
                        task: { id: "t1", type: "leaves" as const, difficulty: 2 }
                    }
                ]
            });
        });

        it('should not assign a task to a team based on simple type matching', () => {
            const volunteers = [{ name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" }];
            const tasks = [{ id: "t1", type: "branches" as const, difficulty: 2 }];
            const assignmentRules = [{ match: { type: "leaves" as const }, team: "Leaf Team" }];

            const result = assignTasks(volunteers, tasks, assignmentRules);

            expect(
                result
            ).toEqual({
                "Leaf Team": []
            });
        });
    });
});

