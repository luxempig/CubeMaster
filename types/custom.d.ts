declare namespace JSX {
  interface IntrinsicElements {
    'twisty-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      alg?: string;
      visualization?: string;
      background?: string;
      controls?: string;
    };
  }
}
