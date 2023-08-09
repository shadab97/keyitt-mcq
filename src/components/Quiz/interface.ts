export type selectedDifficulty = {
    label: "easy" | "medium" | "hard"
};
export interface Iquestion {
    category: string;
    type: string;
    difficulty: "easy" | "medium" | "hard";
    question: string;
    correct_answer: string;
    incorrect_answers?: (string)[] | null;
}