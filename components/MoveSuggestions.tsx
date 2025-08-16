import { suggestMoves } from "../lib/moveSuggester";

type Props = { skill: string; cubeState: string };

export default function MoveSuggestions({ skill, cubeState }: Props) {
  const moves = suggestMoves(skill, cubeState);
  return (
    <div>
      <h3>Suggestions ({skill})</h3>
      <ul>
        {moves.map((m, i) => (
          <li key={i} style={{ fontFamily: 'monospace' }}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
