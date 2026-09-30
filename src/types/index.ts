export interface Course {
  id: string;
  title: string;
  category: 'Aptitude' | 'Core CS' | 'DSA' | 'Fullstack' | 'AI & System';
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  enrolledStudents: number;
  rating: number;
  companyTags: string[];
  featured?: boolean;
}

export interface CorporatePathway {
  id: string;
  companyName: string;
  role: string;
  salaryRange: string;
  batchEligibility: string;
  requiredSkills: string[];
  minCtcScore: number;
  status: 'Open' | 'Upcoming' | 'Filling Fast';
  hiringDriveDate: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  college: string;
  points: number;
  ctcScore: number;
  tier: 'Elite' | 'Growth' | 'Participation';
  badge: string;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Students' | 'CTC Score' | 'Institutions';
}

export interface ScoreFactors {
  aptitudeScore: number; // 0-100
  dsaProblemSolving: number; // 0-100
  coreFundamentals: number; // 0-100
  projectsReadiness: number; // 0-100
  softSkillsComm: number; // 0-100
}

export interface CalculatedCtcScore {
  finalScore: number; // 0.0 - 10.0
  percentile: number; // 0 - 99.9%
  statusBadge: string;
  tier: 'Elite' | 'Tier-1 Ready' | 'Growing' | 'Foundational';
  recommendations: string[];
  eligibleCompanies: string[];
}

export interface AssessmentQuestion {
  id: number;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  title: string;
  type: 'mcq' | 'code';
  codeSnippet?: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  college: string;
  phone: string;
  role: 'student' | 'college_admin' | 'recruiter';
  message: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
  submissionId: string;
}
