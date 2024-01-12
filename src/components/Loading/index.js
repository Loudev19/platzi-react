import "./Loading.css";

function Loading({ nItems }) {
  return Array.from({ length: nItems }, (_, i) => i + 1).map((value) => (
    <div key={value} className="loading"></div>
  ));
}

export { Loading };
