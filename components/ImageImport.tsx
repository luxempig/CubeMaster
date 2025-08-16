import { useRef, useState } from 'react';
import { analyzeImagesToAlg } from "../lib/stateFromImages";

type Props = { onStateReady: (algFromVision: string | null) => void };

export default function ImageImport({ onStateReady }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [busy, setBusy] = useState(false);

  const pick = () => inputRef.current?.click();

  async function onFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setBusy(true);
    try {
      const alg = await analyzeImagesToAlg(files);
      if (alg) onStateReady(alg);
      else alert('Vision import placeholder: could not reconstruct state yet.');
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div>
      <input ref={inputRef} type="file" accept="image/*" multiple onChange={onFiles} style={{ display: 'none' }} />
      <button onClick={pick} disabled={busy} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #ddd' }}>
        {busy ? 'Analyzingâ€¦' : 'Upload Cube Photos'}
      </button>
    </div>
  );
}
