
export interface PracticeQuestion {
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'speaking';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  feedback?: {
    correct: string;
    incorrect: string;
  };
}
