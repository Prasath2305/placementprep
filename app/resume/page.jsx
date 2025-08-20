'use client';

import { useState, useEffect } from 'react';
import ResumeForm from '../components/resume/resume-form';
import ResumePreview from '../components/resume/resume-preview';
import ResumeFeedback from '../components/resume/resume-feedback';
import { compileResume } from '../actions/resume/compile';
import { calculateATSScore } from '../actions/resume-actions';
import { validateResume } from '../lib/schemas/resume-schema';
import { sampleResume } from '../data/sample-resume';

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState(sampleResume);
  const [activeTab, setActiveTab] = useState('form');
  const [atsScore, setAtsScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('template-one');
  const [activeSection, setActiveSection] = useState('personal');

  const handleResumeUpdate = (updatedData) => {
    setResumeData(updatedData);
  };

  const handleATSCheck = async () => {
    setIsLoading(true);
    try {
      const score = await calculateATSScore(resumeData);
      setAtsScore(score);
      setActiveTab('feedback');
    } catch (error) {
      console.error('Error calculating ATS score:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateResume = async () => {
    setIsLoading(true);
    try {
      const validation = validateResume(resumeData);
      if (!validation.valid) {
        console.error('Resume validation failed:', validation.errors);
        return;
      }
      
      await compileResume(resumeData, selectedTemplate);
    } catch (error) {
      console.error('Error generating resume:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume Builder
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create a professional, ATS-optimized resume that stands out to employers
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-800 p-1 rounded-xl border border-gray-700 shadow-lg">
            {['form', 'preview', 'feedback'].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-6 font-medium rounded-lg transition-all duration-300 ${activeTab === tab 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'form' && 'Build Resume'}
                {tab === 'preview' && 'Preview'}
                {tab === 'feedback' && 'ATS Analysis'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Template Selection */}
        <div className="mb-8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Choose a Template</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['template-one', 'template-two', 'template-three', 'template-four'].map((template) => (
              <div
                key={template}
                className={`rounded-xl p-3 cursor-pointer transition-all duration-300 border-2 ${selectedTemplate === template 
                  ? 'border-blue-500 bg-blue-500/10 scale-105' 
                  : 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-700/50'}`}
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-2 border border-gray-600">
                  <span className="text-gray-400 font-medium capitalize">
                    {template.split('-')[1]}
                  </span>
                </div>
                <p className="text-xs text-center capitalize text-gray-300 font-medium">
                  {template.replace('-', ' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeTab === 'form' && (
            <ResumeForm 
              resumeData={resumeData} 
              onUpdate={handleResumeUpdate} 
            />
          )}
          
          {activeTab === 'preview' && (
            <ResumePreview 
              resumeData={resumeData} 
              template={selectedTemplate} 
            />
          )}
          
          {activeTab === 'feedback' && (
            <ResumeFeedback 
              resumeData={resumeData} 
              atsScore={atsScore} 
            />
          )}
          
          {/* Action Buttons */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Resume Actions</h2>
              
              <button
                onClick={() => setActiveTab('preview')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-xl mb-4 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span className="mr-2"></span> Preview Resume
              </button>
              
              <button
                onClick={handleATSCheck}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-xl mb-4 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span> Analyzing...
                  </>
                ) : (
                  <>
                    <span className="mr-2">📊</span> Check ATS Score
                  </>
                )}
              </button>
              
              <button
                onClick={handleGenerateResume}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <span className="animate-pulse mr-2">⚡</span> Generating...
                  </>
                ) : (
                  <>
                    <span className="mr-2">📥</span> Download Resume
                  </>
                )}
              </button>
            </div>
            
            {atsScore !== null && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg">
                <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Current ATS Score</h3>
                <div className="flex items-center mb-3">
                  <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full shadow-md" 
                      style={{ width: `${atsScore}%` }}
                    ></div>
                  </div>
                  <span className="ml-4 font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {atsScore}%
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-2 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  {atsScore >= 80 
                    ? '🎉 Excellent! Your resume is well optimized for ATS systems.' 
                    : atsScore >= 60 
                      ? '👍 Good, but there is room for improvement.' 
                      : '⚠️ Your resume needs significant optimization for ATS systems.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}