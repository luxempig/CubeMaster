type Props = { skill: string; setSkill: (s: string) => void };

export default function SkillLevelSelector({ skill, setSkill }: Props) {
  return (
    <select value={skill} onChange={(e) => setSkill(e.target.value)} style={{ padding: 8, borderRadius: 8 }}>
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>
  );
}
