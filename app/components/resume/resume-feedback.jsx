'use client';

export default function ResumeFeedback({ resumeData, atsScore }) {
  // This would analyze the resume and provide feedback
  const analyzeResume = (resume) => {
    const feedback = [];
    
    // Check for keywords
    const importantKeywords = ['managed', 'developed', 'achieved', 'increased', 'created', 'led'];
    const hasKeywords = importantKeywords.some(keyword => 
      JSON.stringify(resume).toLowerCase().includes(keyword)
    );
    
    if (!hasKeywords) {
      feedback.push({
        type: 'warning',
        message: 'Your resume could benefit from more action-oriented keywords like "managed", "developed", or "achieved".'
      });
    }
    
    // Check length
    const wordCount = JSON.stringify(resume).split(' ').length;
    if (wordCount < 300) {
      feedback.push({
        type: 'warning',
        message: 'Your resume might be too short. Consider adding more details about your experiences.'
      });
    } else if (wordCount > 1000) {
      feedback.push({
        type: 'warning',
        message: 'Your resume might be too long. Try to keep it concise and relevant.'
      });
    }
    
    // Check contact info
    if (!resume.personal?.email || !resume.personal?.phone) {
      feedback.push({
        type: 'error',
        message: 'Your resume is missing contact information. Add your email and phone number.'
      });
    }
    
    // Check experience
    if (!resume.experience || resume.experience.length === 0) {
      feedback.push({
        type: 'error',
        message: 'Add your work experience to make your resume more compelling.'
      });
    }
    
    return feedback;
  };

  const feedbackItems = analyzeResume(resumeData);

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">ATS Analysis & Feedback</h2>
      
      {atsScore !== null && (
        <div className="mb-6 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium mb-2">ATS Compatibility Score</h3>
          <div className="flex items-center">
            <div className="w-full bg-gray-600 rounded-full h-4">
              <div 
                className="bg-blue-600 h-4 rounded-full" 
                style={{ width: `${atsScore}%` }}
              ></div>
            </div>
            <span className="ml-4 font-bold text-xl">{atsScore}%</span>
          </div>
          <p className="text-sm mt-2">
            {atsScore >= 80 
              ? 'Excellent! Your resume is well optimized for ATS systems.' 
              : atsScore >= 60 
                ? 'Good, but there is room for improvement.' 
                : 'Your resume needs significant optimization for ATS systems.'}
          </p>
        </div>
      )}
      
      <div>
        <h3 className="text-lg font-medium mb-3">Feedback & Suggestions</h3>
        <div className="space-y-3">
          {feedbackItems.length > 0 ? (
            feedbackItems.map((item, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg ${
                  item.type === 'error' ? 'bg-red-900/30 border border-red-800' : 
                  item.type === 'warning' ? 'bg-yellow-900/30 border border-yellow-800' : 
                  'bg-green-900/30 border border-green-800'
                }`}
              >
                <p className="text-sm">{item.message}</p>
              </div>
            ))
          ) : (
            <div className="p-3 rounded-lg bg-green-900/30 border border-green-800">
              <p className="text-sm">Your resume looks good! No major issues detected.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Tips for ATS Optimization</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
          <li>Use standard section headings like "Work Experience", "Education", and "Skills"</li>
          <li>Include keywords from the job description you're applying for</li>
          <li>Use common job titles rather than company-specific titles</li>
          <li>Avoid graphics, tables, and columns that can confuse ATS systems</li>
          <li>Use standard fonts like Arial, Calibri, or Times New Roman</li>
          <li>Save your resume as a PDF unless otherwise specified</li>
        </ul>
      </div>
    </div>
  );
}