import type {
  ContactFormData,
  LeadSubmissionResponse,
  ScoreFactors,
  CalculatedCtcScore,
  Course,
  LeaderboardEntry,
} from '../types';
import { COURSES_DATA } from '../data/courses';
import { LEADERBOARD_DATA } from '../data/leaderboard';

const DELAY_MS = 400;

export const apiService = {
  /**
   * Calculate student CTC Score based on calibrated industry criteria
   */
  async calculateScore(factors: ScoreFactors): Promise<CalculatedCtcScore> {
    await new Promise((res) => setTimeout(res, DELAY_MS));

    // Weighted Formula:
    // Aptitude: 20%, DSA: 35%, Core CS: 20%, Projects: 15%, Soft Skills: 10%
    const rawWeighted =
      (factors.aptitudeScore * 0.2 +
        factors.dsaProblemSolving * 0.35 +
        factors.coreFundamentals * 0.2 +
        factors.projectsReadiness * 0.15 +
        factors.softSkillsComm * 0.1) /
      10;

    const finalScore = Math.min(10.0, Math.max(1.0, parseFloat(rawWeighted.toFixed(1))));

    // Percentile simulation based on normal distribution
    let percentile = 50.0;
    if (finalScore >= 9.0) {
      percentile = 98.0 + (finalScore - 9.0) * 1.9;
    } else if (finalScore >= 8.0) {
      percentile = 90.0 + (finalScore - 8.0) * 8.0;
    } else if (finalScore >= 7.0) {
      percentile = 75.0 + (finalScore - 7.0) * 15.0;
    } else if (finalScore >= 5.0) {
      percentile = 50.0 + (finalScore - 5.0) * 12.5;
    } else {
      percentile = Math.max(12.0, finalScore * 10);
    }
    percentile = parseFloat(percentile.toFixed(1));

    let tier: CalculatedCtcScore['tier'] = 'Growing';
    let statusBadge = 'Developing Candidate';
    const recommendations: string[] = [];
    const eligibleCompanies: string[] = [];

    if (finalScore >= 8.8) {
      tier = 'Elite';
      statusBadge = 'Tier-1 High Priority Talent';
      recommendations.push('Ready for Google, Microsoft & Amazon Direct Pipeline.');
      recommendations.push('Sharpen LLD and Concurrency patterns in Pro-Suite mock drills.');
      eligibleCompanies.push('Google', 'Microsoft', 'Amazon', 'Atlassian', 'Uber', 'SAP Labs');
    } else if (finalScore >= 7.5) {
      tier = 'Tier-1 Ready';
      statusBadge = 'Product & High-Package Ready';
      recommendations.push('Strong fundamentals! Practice high-speed coding under proctored timer.');
      recommendations.push('Focus on Advanced Graph DP algorithms to push above 9.0 CTC Score.');
      eligibleCompanies.push('TCS Digital', 'Infosys SP', 'Accenture AASE', 'SAP Labs', 'Capgemini');
    } else if (finalScore >= 6.0) {
      tier = 'Growing';
      statusBadge = 'Placement Qualified';
      recommendations.push('Focus on Quantitative Aptitude speed filters and SQL query indexing.');
      recommendations.push('Complete 2 structured Corporate Pathway tracks in Web Hub.');
      eligibleCompanies.push('TCS Ninja', 'Wipro Turbo', 'Cognizant GenC', 'Infosys SE');
    } else {
      tier = 'Foundational';
      statusBadge = 'Foundation Building Phase';
      recommendations.push('Complete the Core CS and Quantitative Reasoning crash courses.');
      recommendations.push('Solve at least 3 practice mock tests per week in Web Hub.');
      eligibleCompanies.push('Entry-level Placement Preparation Track');
    }

    const result: CalculatedCtcScore = {
      finalScore,
      percentile,
      statusBadge,
      tier,
      recommendations,
      eligibleCompanies,
    };

    try {
      localStorage.setItem('ctc_last_score_calc', JSON.stringify({ factors, result, date: new Date().toISOString() }));
    } catch {
      // Ignore if localStorage unavailable
    }

    return result;
  },

  /**
   * Submit Contact / Demo / Institution Request Form
   */
  async submitContactLead(data: ContactFormData): Promise<LeadSubmissionResponse> {
    await new Promise((res) => setTimeout(res, 600));

    if (!data.fullName || data.fullName.trim().length < 2) {
      throw new Error('Please enter a valid full name.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Please enter a valid academic or professional email address.');
    }
    if (!data.college || data.college.trim().length < 2) {
      throw new Error('Please specify your institution or college.');
    }

    const existing = JSON.parse(localStorage.getItem('ctc_leads') || '[]');
    const submissionId = 'CTC-' + Math.floor(100000 + Math.random() * 900000);
    existing.push({ ...data, submissionId, createdAt: new Date().toISOString() });
    localStorage.setItem('ctc_leads', JSON.stringify(existing));

    return {
      success: true,
      message: `Thank you, ${data.fullName}! Our campus team has received your inquiry. Reference ID: ${submissionId}.`,
      submissionId,
    };
  },

  /**
   * Submit Newsletter subscription
   */
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    await new Promise((res) => setTimeout(res, 400));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please provide a valid email.');
    }
    const subscribers = JSON.parse(localStorage.getItem('ctc_subscribers') || '[]');
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem('ctc_subscribers', JSON.stringify(subscribers));
    }
    return {
      success: true,
      message: 'You have been enrolled in the CTC Weekly Placement Brief!',
    };
  },

  /**
   * Fetch courses with category filtering
   */
  async getCourses(category?: string): Promise<Course[]> {
    await new Promise((res) => setTimeout(res, 200));
    if (!category || category === 'All') return COURSES_DATA;
    return COURSES_DATA.filter((c) => c.category === category);
  },

  /**
   * Fetch leaderboard rankings
   */
  async getLeaderboard(filter?: string): Promise<LeaderboardEntry[]> {
    await new Promise((res) => setTimeout(res, 200));
    if (!filter || filter === 'all') return LEADERBOARD_DATA;
    if (filter === 'elite') return LEADERBOARD_DATA.filter((l) => l.tier === 'Elite');
    return LEADERBOARD_DATA;
  },
};
