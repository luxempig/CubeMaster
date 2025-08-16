export function suggestMoves(skill: string, cubeState: string): string[] {
  const beginner = ["R U R' U'", "F R U R' U' F'"];
  const intermediate = ["y' U2 R U R' U R U2 R'", "F R U R' U' R U R' U' F'"];
  const advanced = ["R2 U R U R' U' R' U' R' U R'", "U' L F' L' U' L F L'"];

  switch (skill) {
    case "Beginner": return beginner;
    case "Intermediate": return intermediate;
    case "Advanced": return advanced;
    default: return [];
  }
}
