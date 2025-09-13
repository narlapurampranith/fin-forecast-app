/**
 * Utility functions for generating unique codes and identifiers
 */

// Generate unique transaction reference codes
export const generateTransactionCode = (): string => {
  const prefix = 'TXN';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};

// Generate unique budget category codes
export const generateCategoryCode = (categoryName: string): string => {
  const prefix = 'CAT';
  const nameCode = categoryName
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 4)
    .toUpperCase();
  const random = Math.random().toString(36).substring(2, 4).toUpperCase();
  return `${prefix}-${nameCode}-${random}`;
};

// Generate unique goal tracking codes
export const generateGoalCode = (goalName: string): string => {
  const prefix = 'GOAL';
  const nameCode = goalName
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 3)
    .toUpperCase();
  const timestamp = Date.now().toString(36).substring(-4).toUpperCase();
  return `${prefix}-${nameCode}-${timestamp}`;
};

// Generate unique budget alert codes
export const generateAlertCode = (): string => {
  const prefix = 'ALERT';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 3).toUpperCase();
  return `${prefix}-${timestamp}${random}`;
};

// Generate unique session codes for financial analysis
export const generateSessionCode = (): string => {
  const prefix = 'SESS';
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${date}-${random}`;
};

// Generate QR code data for expense sharing
export const generateExpenseShareCode = (amount: number, description: string): string => {
  const data = {
    amount,
    description,
    timestamp: Date.now(),
    code: generateTransactionCode()
  };
  return btoa(JSON.stringify(data));
};

// Validate transaction code format
export const validateTransactionCode = (code: string): boolean => {
  const pattern = /^TXN-[A-Z0-9]+-[A-Z0-9]{4}$/;
  return pattern.test(code);
};

// Generate unique account reference
export const generateAccountReference = (): string => {
  const prefix = 'ACC';
  const timestamp = Date.now().toString(36).toUpperCase();
  const checksum = Math.random().toString(36).substring(2, 4).toUpperCase();
  return `${prefix}${timestamp}${checksum}`;
};