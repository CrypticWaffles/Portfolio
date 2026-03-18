import { current } from '../data';

export default function Currently() {
  return (
    <div className="currently-strip">
      <div className="currently-inner">
        <div className="currently-item">
          <span className="currently-dot" aria-hidden="true" />
          <span className="currently-label">Building</span>
          {current.buildingLink
            ? <a href={current.buildingLink} className="currently-value currently-link">{current.building}</a>
            : <span className="currently-value">{current.building}</span>
          }
        </div>
        <div className="currently-item">
          <span className="currently-dot" aria-hidden="true" />
          <span className="currently-label">Learning</span>
          <span className="currently-value">{current.learning}</span>
        </div>
      </div>
    </div>
  );
}
