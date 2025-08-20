'use client';

import { useState } from 'react';
import TemplateOne from './templates/template-one';
import TemplateTwo from './templates/template-two';
import TemplateThree from './templates/template-three';
import TemplateFour from './templates/template-four';

export default function ResumePreview({ resumeData, template }) {
  const [scale, setScale] = useState(0.8);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const renderTemplate = () => {
    switch (template) {
      case 'template-one':
        return <TemplateOne resumeData={resumeData} />;
      case 'template-two':
        return <TemplateTwo resumeData={resumeData} />;
      case 'template-three':
        return <TemplateThree resumeData={resumeData} />;
      case 'template-four':
        return <TemplateFour resumeData={resumeData} />;
      default:
        return <TemplateOne resumeData={resumeData} />;
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 1.2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleZoomReset = () => {
    setScale(0.8);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col p-4">
        <div className="flex justify-between items-center mb-4 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume Preview - Full Screen
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handleZoomOut}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Zoom Out"
            >
              <span className="text-white">🔍➖</span>
            </button>
            <button
              onClick={handleZoomReset}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Reset Zoom"
            >
              <span className="text-white">🔍🔄</span>
            </button>
            <button
              onClick={handleZoomIn}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Zoom In"
            >
              <span className="text-white">🔍➕</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
              title="Exit Fullscreen"
            >
              <span className="text-white">✕</span>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto bg-gray-700 p-4 rounded-lg flex justify-center items-center">
          <div 
            className="bg-white shadow-2xl rounded-lg transition-transform duration-300 origin-top"
            style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
          >
            {renderTemplate()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Resume Preview
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handleZoomOut}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            title="Zoom Out"
            disabled={scale <= 0.5}
          >
            <span className="text-white">🔍➖</span>
          </button>
          <button
            onClick={handleZoomReset}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            title="Reset Zoom"
          >
            <span className="text-white">🔍🔄</span>
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            title="Zoom In"
            disabled={scale >= 1.2}
          >
            <span className="text-white">🔍➕</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            title="Fullscreen"
          >
            <span className="text-white">📺</span>
          </button>
        </div>
      </div>
      
      <div className="text-sm text-gray-400 mb-4 flex items-center">
        <span className="mr-2">📄</span>
        Viewing: <span className="ml-1 font-medium text-white capitalize">{template.replace('-', ' ')}</span>
        <span className="mx-2">•</span>
        <span>Zoom: {Math.round(scale * 100)}%</span>
      </div>
      
      <div className="overflow-auto bg-gray-700 p-4 rounded-lg border border-gray-600 max-h-[70vh]">
        <div 
          className="bg-white shadow-xl mx-auto rounded-lg transition-transform duration-300 origin-top"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top center',
            width: '210mm', // Standard A4 width
            minHeight: '297mm' // Standard A4 height
          }}
        >
          {renderTemplate()}
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 flex justify-between items-center">
        <div>
          <span className="inline-flex items-center">
            <span className="mr-1">💡</span> 
            Tip: Use fullscreen mode for better viewing
          </span>
        </div>
        <div className="text-right">
          Preview size: A4 (210mm × 297mm)
        </div>
      </div>
    </div>
  );
}