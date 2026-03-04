import { education, experience } from '../data';

function TimelineItem({ title, org, dates, notes }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-body">
        <div className="timeline-header">
          <span className="timeline-title">{title}</span>
          <span className="timeline-dates">{dates}</span>
        </div>
        <div className="timeline-org">{org}</div>
        {notes && <p className="timeline-notes">{notes}</p>}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-label">Experience</h2>
        <div className="experience-columns">
          <div className="exp-column">
            <h3 className="exp-heading">Education</h3>
            <div className="timeline">
              {education.map((item, i) => (
                <TimelineItem
                  key={i}
                  title={item.degree}
                  org={item.school}
                  dates={item.dates}
                  notes={item.notes}
                />
              ))}
            </div>
          </div>

          {experience.length > 0 && (
            <div className="exp-column">
              <h3 className="exp-heading">Work</h3>
              <div className="timeline">
                {experience.map((item, i) => (
                  <TimelineItem
                    key={i}
                    title={item.title}
                    org={item.company}
                    dates={item.dates}
                    notes={item.description}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
