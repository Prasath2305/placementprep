"use client";

import { useState } from "react";

export default function ResumeForm({ resumeData, onUpdate }) {
  const [activeSection, setActiveSection] = useState("personal");

  const updateField = (section, field, value) => {
    const updatedData = {
      ...resumeData,
      [section]: {
        ...resumeData[section],
        [field]: value,
      },
    };
    onUpdate(updatedData);
  };

  const addItem = (section, item) => {
    const updatedData = {
      ...resumeData,
      [section]: [...(resumeData[section] || []), item],
    };
    onUpdate(updatedData);
  };

  const removeItem = (section, index) => {
    const updatedData = {
      ...resumeData,
      [section]: resumeData[section].filter((_, i) => i !== index),
    };
    onUpdate(updatedData);
  };

  const sections = [
    { id: "personal", label: "Personal Info", icon: "👤" },
    { id: "summary", label: "Summary", icon: "📝" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "certifications", label: "Certifications", icon: "🏆" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Build Your Resume
      </h2>

      {/* Section Navigation */}
      <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-lg transition-all duration-300 flex items-center ${
              activeSection === section.id
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      {/* Form Sections */}
      <div className="space-y-6">
        {activeSection === "personal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                value={resumeData.personal?.name || ""}
                onChange={(e) =>
                  updateField("personal", "name", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={resumeData.personal?.email || ""}
                onChange={(e) =>
                  updateField("personal", "email", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                value={resumeData.personal?.phone || ""}
                onChange={(e) =>
                  updateField("personal", "phone", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Location
              </label>
              <input
                type="text"
                value={resumeData.personal?.location || ""}
                onChange={(e) =>
                  updateField("personal", "location", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="San Francisco, CA"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-300">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={resumeData.personal?.linkedin || ""}
                onChange={(e) =>
                  updateField("personal", "linkedin", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Portfolio URL
              </label>
              <input
                type="url"
                value={resumeData.personal?.portfolio || ""}
                onChange={(e) =>
                  updateField("personal", "portfolio", e.target.value)
                }
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://johndoeportfolio.com"
              />
            </div>
          </div>
        )}

        {activeSection === "summary" && (
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Professional Summary
            </label>
            <textarea
              value={resumeData.summary || ""}
              onChange={(e) => {
                // Direct update for top-level field
                onUpdate({
                  ...resumeData,
                  summary: e.target.value,
                });
              }}
              rows={6}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Experienced software developer with 5+ years in web development..."
            />
          </div>
        )}

        {activeSection === "experience" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Work Experience
              </h3>
              <button
                onClick={() =>
                  addItem("experience", {
                    company: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                    current: false,
                  })
                }
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 shadow-md flex items-center"
              >
                <span className="mr-2">+</span> Add Experience
              </button>
            </div>

            {(!resumeData.experience || resumeData.experience.length === 0) && (
              <div className="text-center py-8 bg-gray-800/50 rounded-xl border border-dashed border-gray-700">
                <p className="text-gray-400 mb-2">No experience added yet</p>
                <p className="text-sm text-gray-500">
                  Click "Add Experience" to get started
                </p>
              </div>
            )}

            {resumeData.experience?.map((exp, index) => (
              <div
                key={index}
                className="mb-6 p-5 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-white flex items-center">
                    <span className="mr-2">💼</span> Experience #{index + 1}
                  </h4>
                  <button
                    onClick={() => removeItem("experience", index)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Company
                    </label>
                    <input
                      type="text"
                      value={exp.company || ""}
                      onChange={(e) => {
                        const updatedExp = [...resumeData.experience];
                        updatedExp[index].company = e.target.value;
                        onUpdate({ ...resumeData, experience: updatedExp });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Google Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Position
                    </label>
                    <input
                      type="text"
                      value={exp.position || ""}
                      onChange={(e) => {
                        const updatedExp = [...resumeData.experience];
                        updatedExp[index].position = e.target.value;
                        onUpdate({ ...resumeData, experience: updatedExp });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Senior Software Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Start Date
                    </label>
                    <input
                      type="month"
                      value={exp.startDate || ""}
                      onChange={(e) => {
                        const updatedExp = [...resumeData.experience];
                        updatedExp[index].startDate = e.target.value;
                        onUpdate({ ...resumeData, experience: updatedExp });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      End Date
                    </label>
                    <div className="flex items-center">
                      <input
                        type="month"
                        value={exp.endDate || ""}
                        onChange={(e) => {
                          const updatedExp = [...resumeData.experience];
                          updatedExp[index].endDate = e.target.value;
                          updatedExp[index].current = false;
                          onUpdate({ ...resumeData, experience: updatedExp });
                        }}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={exp.current}
                      />
                      <label className="ml-3 flex items-center text-sm text-gray-300">
                        <input
                          type="checkbox"
                          checked={exp.current || false}
                          onChange={(e) => {
                            const updatedExp = [...resumeData.experience];
                            updatedExp[index].current = e.target.checked;
                            if (e.target.checked) {
                              updatedExp[index].endDate = "";
                            }
                            onUpdate({ ...resumeData, experience: updatedExp });
                          }}
                          className="mr-2 h-4 w-4 rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                        />
                        Current
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Description
                  </label>
                  <textarea
                    value={exp.description || ""}
                    onChange={(e) => {
                      const updatedExp = [...resumeData.experience];
                      updatedExp[index].description = e.target.value;
                      onUpdate({ ...resumeData, experience: updatedExp });
                    }}
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your responsibilities and achievements..."
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === "education" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </h3>
              <button
                onClick={() =>
                  addItem("education", {
                    institution: "",
                    degree: "",
                    field: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  })
                }
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 shadow-md flex items-center"
              >
                <span className="mr-2">+</span> Add Education
              </button>
            </div>

            {(!resumeData.education || resumeData.education.length === 0) && (
              <div className="text-center py-8 bg-gray-800/50 rounded-xl border border-dashed border-gray-700">
                <p className="text-gray-400 mb-2">No education added yet</p>
                <p className="text-sm text-gray-500">
                  Click "Add Education" to get started
                </p>
              </div>
            )}

            {resumeData.education?.map((edu, index) => (
              <div
                key={index}
                className="mb-6 p-5 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-white flex items-center">
                    <span className="mr-2">🎓</span> Education #{index + 1}
                  </h4>
                  <button
                    onClick={() => removeItem("education", index)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Institution
                    </label>
                    <input
                      type="text"
                      value={edu.institution || ""}
                      onChange={(e) => {
                        const updatedEdu = [...resumeData.education];
                        updatedEdu[index].institution = e.target.value;
                        onUpdate({ ...resumeData, education: updatedEdu });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Stanford University"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={edu.degree || ""}
                      onChange={(e) => {
                        const updatedEdu = [...resumeData.education];
                        updatedEdu[index].degree = e.target.value;
                        onUpdate({ ...resumeData, education: updatedEdu });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Bachelor of Science"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Field of Study
                    </label>
                    <input
                      type="text"
                      value={edu.field || ""}
                      onChange={(e) => {
                        const updatedEdu = [...resumeData.education];
                        updatedEdu[index].field = e.target.value;
                        onUpdate({ ...resumeData, education: updatedEdu });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Computer Science"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Graduation Year
                    </label>
                    <input
                      type="month"
                      value={edu.endDate || ""}
                      onChange={(e) => {
                        const updatedEdu = [...resumeData.education];
                        updatedEdu[index].endDate = e.target.value;
                        onUpdate({ ...resumeData, education: updatedEdu });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Description
                  </label>
                  <textarea
                    value={edu.description || ""}
                    onChange={(e) => {
                      const updatedEdu = [...resumeData.education];
                      updatedEdu[index].description = e.target.value;
                      onUpdate({ ...resumeData, education: updatedEdu });
                    }}
                    rows={3}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Relevant courses, achievements, or activities..."
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === "skills" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </h3>
              <button
                onClick={() =>
                  addItem("skills", {
                    name: "",
                    level: "Intermediate",
                  })
                }
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 shadow-md flex items-center"
              >
                <span className="mr-2">+</span> Add Skill
              </button>
            </div>

            {(!resumeData.skills || resumeData.skills.length === 0) && (
              <div className="text-center py-8 bg-gray-800/50 rounded-xl border border-dashed border-gray-700">
                <p className="text-gray-400 mb-2">No skills added yet</p>
                <p className="text-sm text-gray-500">
                  Click "Add Skill" to get started
                </p>
              </div>
            )}

            {resumeData.skills?.map((skill, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-white flex items-center">
                    <span className="mr-2">⚡</span> Skill #{index + 1}
                  </h4>
                  <button
                    onClick={() => removeItem("skills", index)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Skill Name
                    </label>
                    <input
                      type="text"
                      value={skill.name || ""}
                      onChange={(e) => {
                        const updatedSkills = [...resumeData.skills];
                        updatedSkills[index].name = e.target.value;
                        onUpdate({ ...resumeData, skills: updatedSkills });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="JavaScript"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Proficiency Level
                    </label>
                    <select
                      value={skill.level || "Intermediate"}
                      onChange={(e) => {
                        const updatedSkills = [...resumeData.skills];
                        updatedSkills[index].level = e.target.value;
                        onUpdate({ ...resumeData, skills: updatedSkills });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Similar implementations for projects and certifications sections */}
        {activeSection === "projects" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </h3>
              <button
                onClick={() =>
                  addItem("projects", {
                    name: "",
                    technologies: "",
                    description: "",
                    url: "",
                  })
                }
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 shadow-md flex items-center"
              >
                <span className="mr-2">+</span> Add Project
              </button>
            </div>

            {(!resumeData.projects || resumeData.projects.length === 0) && (
              <div className="text-center py-8 bg-gray-800/50 rounded-xl border border-dashed border-gray-700">
                <p className="text-gray-400 mb-2">No projects added yet</p>
                <p className="text-sm text-gray-500">
                  Click "Add Project" to get started
                </p>
              </div>
            )}

            {resumeData.projects?.map((project, index) => (
              <div
                key={index}
                className="mb-6 p-5 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-white flex items-center">
                    <span className="mr-2">🚀</span> Project #{index + 1}
                  </h4>
                  <button
                    onClick={() => removeItem("projects", index)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Project Name
                    </label>
                    <input
                      type="text"
                      value={project.name || ""}
                      onChange={(e) => {
                        const updatedProjects = [...resumeData.projects];
                        updatedProjects[index].name = e.target.value;
                        onUpdate({ ...resumeData, projects: updatedProjects });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="E-commerce Website"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Technologies Used
                    </label>
                    <input
                      type="text"
                      value={project.technologies || ""}
                      onChange={(e) => {
                        const updatedProjects = [...resumeData.projects];
                        updatedProjects[index].technologies = e.target.value;
                        onUpdate({ ...resumeData, projects: updatedProjects });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Project URL (optional)
                    </label>
                    <input
                      type="url"
                      value={project.url || ""}
                      onChange={(e) => {
                        const updatedProjects = [...resumeData.projects];
                        updatedProjects[index].url = e.target.value;
                        onUpdate({ ...resumeData, projects: updatedProjects });
                      }}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Description
                  </label>
                  <textarea
                    value={project.description || ""}
                    onChange={(e) => {
                      const updatedProjects = [...resumeData.projects];
                      updatedProjects[index].description = e.target.value;
                      onUpdate({ ...resumeData, projects: updatedProjects });
                    }}
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the project, your role, and key achievements..."
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === "certifications" && (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Certifications
      </h3>
      <button
        onClick={() =>
          addItem("certifications", {
            name: "",
            url: "",
          })
        }
        className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 shadow-md flex items-center"
      >
        <span className="mr-2">+</span> Add Certification
      </button>
    </div>

    {(!resumeData.certifications ||
      resumeData.certifications.length === 0) && (
      <div className="text-center py-8 bg-gray-800/50 rounded-xl border border-dashed border-gray-700">
        <p className="text-gray-400 mb-2">No certifications added yet</p>
        <p className="text-sm text-gray-500">
          Click "Add Certification" to get started
        </p>
      </div>
    )}

    <div className="space-y-3">
      {resumeData.certifications?.map((cert, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
        >
          <div className="flex items-center flex-1">
            <span className="mr-3">🏆</span>
            <input
              type="text"
              value={cert.name || ""}
              onChange={(e) => {
                const updatedCerts = [...resumeData.certifications];
                updatedCerts[index].name = e.target.value;
                onUpdate({
                  ...resumeData,
                  certifications: updatedCerts,
                });
              }}
              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-gray-500"
              placeholder="Certification Name"
            />
            <span className="mx-2 text-gray-500">→</span>
            <input
              type="url"
              value={cert.url || ""}
              onChange={(e) => {
                const updatedCerts = [...resumeData.certifications];
                updatedCerts[index].url = e.target.value;
                onUpdate({
                  ...resumeData,
                  certifications: updatedCerts,
                });
              }}
              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-blue-300 placeholder-gray-500"
              placeholder="https://..."
            />
          </div>
          <button
            onClick={() => removeItem("certifications", index)}
            className="ml-3 px-2 py-1 bg-red-600 hover:bg-red-500 text-white rounded transition-colors text-sm"
          >
            ×
          </button>
        </div>
      ))}
    </div>

    <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
      <p className="text-sm text-gray-400 flex items-center">
        <span className="mr-2">💡</span>
        In your final resume, certifications will appear as clickable links with just the names showing
      </p>
    </div>
  </div>
)}
      </div>
    </div>
  );
}
