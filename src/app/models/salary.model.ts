export interface Salary {
    id: number;
    employeeId: number; // Foreign key to Employee
    basic: number; // Basic salary amount
    bonus: number; // Bonus amount
    deductions: number; // Deductions amount
  }
  