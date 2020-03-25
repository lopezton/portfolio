export interface Job {
    company: Company;
    title: string;
    startDate: string;
    endDate: string;
    shortDetails: string[];
    longDetails: string[];
  }
  
  interface Company {
    name: string;
    url: string;
    logoUrl: string;
  }