export default function TemplateOne({ resumeData }) {
  return (
    <div className="p-8 text-gray-800">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          {resumeData.personal?.name || "Your Name"}
        </h1>
        <div className="flex justify-center space-x-4 text-sm mt-2">
          <span>{resumeData.personal?.email || "email@example.com"}</span>
          <span>•</span>
          <span>{resumeData.personal?.phone || "(123) 456-7890"}</span>
          <span>•</span>
          <span>{resumeData.personal?.location || "City, State"}</span>
        </div>
        {resumeData.personal?.linkedin && (
          <div className="mt-1">
            <span className="text-blue-600">LinkedIn: </span>
            <a
              href={resumeData.personal.linkedin}
              className="text-blue-600 underline"
            >
              {resumeData.personal.linkedin}
            </a>
          </div>
        )}
        {resumeData.personal?.portfolio && (
          <div className="mt-1">
            <span className="text-blue-600">Portfolio: </span>
            <a
              href={resumeData.personal.portfolio}
              className="text-blue-600 underline"
            >
              {resumeData.personal.portfolio}
            </a>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-3">
          Professional Summary
        </h2>
        <p className="text-sm">
          {resumeData.summary ||
            "A brief summary of your professional background and skills."}
        </p>
      </div>

      {resumeData.experience && resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-3">
            Work Experience
          </h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{exp.position || "Position"}</h3>
                <span className="text-sm">
                  {exp.startDate || "Start"} -{" "}
                  {exp.current ? "Present" : exp.endDate || "End"}
                </span>
              </div>
              <div className="text-sm italic">{exp.company || "Company"}</div>
              <p className="text-sm mt-1">
                {exp.description ||
                  "Description of your responsibilities and achievements."}
              </p>
            </div>
          ))}
        </div>
      )}

      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-3">
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{edu.degree || "Degree"}</h3>
                <span className="text-sm">
                  {edu.startDate || "Start"} - {edu.endDate || "End"}
                </span>
              </div>
              <div className="text-sm italic">
                {edu.institution || "Institution"}
              </div>
              {edu.field && (
                <div className="text-sm">Field of Study: {edu.field}</div>
              )}
              <p className="text-sm mt-1">
                {edu.description ||
                  "Description of your studies and achievements."}
              </p>
            </div>
          ))}
        </div>
      )}

      {resumeData.skills && resumeData.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap items-center">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="flex items-center">
                <span className="text-sm">
                  {skill.name || "Skill"} {skill.level && `(${skill.level})`}
                </span>
                {index < resumeData.skills.length - 1 && (
                  <span className="text-gray-400 mx-1">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {resumeData.projects && resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-3">
            Projects
          </h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">
                {project.name || "Project Name"}
              </h3>
              {project.technologies && (
                <div className="text-sm italic">
                  Technologies: {project.technologies}
                </div>
              )}
              {project.url && (
                <div className="text-sm">
                  <a href={project.url} className="text-blue-600 underline">
                    View Project
                  </a>
                </div>
              )}
              <p className="text-sm mt-1">
                {project.description || "Project description."}
              </p>
            </div>
          ))}
        </div>
      )}

      {resumeData.certifications && resumeData.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-3">
            Certifications
          </h2>
          <div className="flex flex-wrap items-baseline">
            {resumeData.certifications.map(
              (cert, index) =>
                cert.name && (
                  <span key={index} className="text-sm">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      <span className="text-black">{cert.name}</span>
                    )}
                    {index < resumeData.certifications.length - 1 && (
                      <span className="text-black mx-1">•</span>
                    )}
                  </span>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
