// app/data/sample-resume.js
export const sampleResume = {
  personal: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
  summary: 'Experienced software developer with 5+ years of expertise in building web applications using React, Node.js, and modern JavaScript frameworks. Strong problem-solving skills and a passion for creating efficient, scalable solutions.',
  experience: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      startDate: '2020-01',
      endDate: '2023-12',
      description: 'Led development of customer-facing web applications using React and TypeScript. Implemented responsive designs and optimized performance, resulting in 40% faster load times.'
    },
    {
      company: 'Digital Innovations LLC',
      position: 'Web Developer',
      startDate: '2018-06',
      endDate: '2019-12',
      description: 'Developed and maintained client websites using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive layouts and interactive features.'
    }
  ],
  education: [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      startDate: '2014-09',
      endDate: '2018-05',
      description: 'Graduated with honors. Relevant coursework: Algorithms, Data Structures, Web Development, Database Systems.'
    }
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Git', 'REST APIs', 'MongoDB', 'AWS'],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product catalog, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    }
  ],
  certifications: [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022-06-15",
    verificationLink: "https://www.credly.com/verify/your-certificate-id"
  },
]
};