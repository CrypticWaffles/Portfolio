import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-label">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, groups]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              {groups.proficient?.length > 0 && (
                <div className="skill-level">
                  <span className="skill-level-label">Proficient</span>
                  <div className="skill-tags">
                    {groups.proficient.map(skill => (
                      <span key={skill} className="skill-tag skill-tag--proficient">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
              {groups.familiar?.length > 0 && (
                <div className="skill-level">
                  <span className="skill-level-label">Familiar</span>
                  <div className="skill-tags">
                    {groups.familiar.map(skill => (
                      <span key={skill} className="skill-tag skill-tag--familiar">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
