import type { AssessmentQuestion } from '../types';

export const MOCK_ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    topic: 'DSA & Algorithms',
    difficulty: 'Medium',
    title: 'Time Complexity of Binary Search with Array Copies',
    type: 'mcq',
    options: [
      { label: 'A', text: 'O(log N)' },
      { label: 'B', text: 'O(N)' },
      { label: 'C', text: 'O(N log N)' },
      { label: 'D', text: 'O(1)' },
    ],
    codeSnippet: `function binarySearchSlice(arr, target) {
  if (arr.length === 0) return false;
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return true;
  if (arr[mid] > target) {
    // Slicing creates a new array copy each step!
    return binarySearchSlice(arr.slice(0, mid), target);
  }
  return binarySearchSlice(arr.slice(mid + 1), target);
}`,
    correctAnswer: 'B',
    explanation:
      'Because Array.prototype.slice() takes O(k) time to copy k elements, T(N) = T(N/2) + O(N), which sums to O(N + N/2 + N/4 + ...) = O(N) by the Master Theorem.',
  },
  {
    id: 2,
    topic: 'Core CS - Operating Systems',
    difficulty: 'Medium',
    title: 'Deadlock Necessary Conditions',
    type: 'mcq',
    options: [
      { label: 'A', text: 'Mutual Exclusion, Hold and Wait, Preemption, Circular Wait' },
      { label: 'B', text: 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait' },
      { label: 'C', text: 'Semaphores, Paging, Context Switch, Round Robin' },
      { label: 'D', text: 'Critical Section, Priority Inversion, Starvation, Thrashing' },
    ],
    correctAnswer: 'B',
    explanation:
      'The four Coffman conditions for a deadlock to occur are: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. If any one is broken, deadlock cannot occur.',
  },
  {
    id: 3,
    topic: 'Quantitative Aptitude',
    difficulty: 'Easy',
    title: 'Work & Time (Accenture & TCS Pattern)',
    type: 'mcq',
    options: [
      { label: 'A', text: '4.8 Days' },
      { label: 'B', text: '5.2 Days' },
      { label: 'C', text: '6.0 Days' },
      { label: 'D', text: '4.0 Days' },
    ],
    codeSnippet: `Problem Statement:
Pipeline A can complete data migration in 8 hours.
Pipeline B can complete the same migration in 12 hours.
If both pipelines run concurrently with load balancers,
how many hours will the total job take?`,
    correctAnswer: 'A',
    explanation:
      'Combined work rate = 1/8 + 1/12 = 5/24 work per hour. Total time = 24/5 = 4.8 hours (or days).',
  },
  {
    id: 4,
    topic: 'System Design & Web',
    difficulty: 'Hard',
    title: 'Idempotency in API Architecture',
    type: 'mcq',
    options: [
      { label: 'A', text: 'POST requests are always idempotent by HTTP specification' },
      { label: 'B', text: 'Making the same request multiple times produces the same server state as a single request' },
      { label: 'C', text: 'Requests that execute in constant O(1) latency' },
      { label: 'D', text: 'Requests that require authentication tokens' },
    ],
    correctAnswer: 'B',
    explanation:
      'An idempotent HTTP method (like PUT or DELETE) means identical requests have the exact same effect on the server state regardless of whether executed 1 time or 100 times.',
  },
];
