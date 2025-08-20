'use server';

export async function calculateATSScore(resumeData) {
  let score = 50; // Base score
  
  if (resumeData.personal?.name) score += 5;
  if (resumeData.personal?.email) score += 5;
  if (resumeData.personal?.phone) score += 5;
  if (resumeData.summary) score += 5;
  if (resumeData.experience && resumeData.experience.length > 0) score += 10;
  if (resumeData.education && resumeData.education.length > 0) score += 10;
  if (resumeData.skills && resumeData.skills.length > 0) score += 10;
  
  // Check for keywords (simplified)
  const contentString = JSON.stringify(resumeData).toLowerCase();
  const keywords = ['managed', 'developed', 'achieved', 'increased', 'created', 'led', 'implemented'];
  const foundKeywords = keywords.filter(keyword => contentString.includes(keyword));
  score += Math.min(foundKeywords.length * 2, 10);
  
  // Ensure score is between 0 and 100
  return Math.min(Math.max(score, 0), 100);
}