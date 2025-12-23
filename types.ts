
export interface EthioDateResponse {
  day_amharic: string;
  day_english: string;
  month_amharic: string;
  month_english: string;
  month_number: number;
  date: number;
  year: number;
  numeric_date: string;
}

export interface EthioTimeResponse {
  system_time: string;
  ethiopian_time: {
    hour: number;
    minute: number;
    second: number;
    period_amharic: string;
  };
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}
