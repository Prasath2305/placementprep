// app/lib/schemas/resume-schema.js
export function validateResume(resumeData) {
  const errors = [];
  
  // Check required personal info
  if (!resumeData.personal?.name) {
    errors.push('Name is required');
  }
  
  if (!resumeData.personal?.email) {
    errors.push('Email is required');
  } else if (!/\S+@\S+\.\S+/.test(resumeData.personal.email)) {
    errors.push('Valid email is required');
  }
  
  // Check for at least one experience entry
  if (!resumeData.experience || resumeData.experience.length === 0) {
    errors.push('At least one work experience is required');
  } else {
    resumeData.experience.forEach((exp, index) => {
      if (!exp.company) {
        errors.push(`Company name is required for experience #${index + 1}`);
      }
      if (!exp.position) {
        errors.push(`Position is required for experience #${index + 1}`);
      }
    });
  }
  
  // Check for at least one education entry
  if (!resumeData.education || resumeData.education.length === 0) {
    errors.push('At least one education entry is required');
  }
  
  // Check for skills
  if (!resumeData.skills || resumeData.skills.length === 0) {
    errors.push('At least one skill is required');
  }
  
  return {
    valid: errors.length === 0,
    errors: errors
  };
}