// Helper function to get the current date in YYYY-MM-DD format
export const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Format the date to YYYY-MM-DD
};

export const oneDay = 24 * 60 * 60 * 1000;

export const baseUrl = process.env.API_BASE_ENDPOINT || "https://api.apps.hivesparkle.online/api/v1"
export const domain = process.env.BASE_URL || "https://hivesparkle.online"