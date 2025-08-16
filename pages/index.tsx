import CubeViewer from "../components/CubeViewer";
import SkillLevelSelector from "../components/SkillLevelSelector";
import MoveSuggestions from "../components/MoveSuggestions";
import ImageImport from "../components/ImageImport";
import { useState } from "react";

export default function Home() {
  const [skill, setSkill] = useState("Beginner");
  const [alg, setAlg] = useState("R U R' U' F R U R' U' F'");
  const [cubeState, setCubeState] = useState(alg);

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h1>Solve Master</h1>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <SkillLevelSelector skill={skill} setSkill={setSkill} />
        <ImageImport onStateReady={(algFromVision) => {
          if (algFromVision) {
            setAlg(algFromVision);
            setCubeState(algFromVision);
          }
        }} />
      </div>
      <div style={{ marginTop: 12 }}>
        <label style={{ display: 'grid', gap: 6 }}>
          <span>Scramble / Current Alg (WCA notation)</span>
          <input
            value={alg}
            onChange={(e) => { setAlg(e.target.value); setCubeState(e.target.value); }}
            placeholder="e.g. R U R' U' F R U R' U' F'"
            style={{ border: '1px solid #ddd', padding: '10px 12px', borderRadius: 8, fontFamily: 'monospace' }}
          />
        </label>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 16 }}>
        <CubeViewer alg={cubeState} onStateChange={setCubeState} />
        <MoveSuggestions skill={skill} cubeState={cubeState} />
      </div>
    </div>
  );
}
