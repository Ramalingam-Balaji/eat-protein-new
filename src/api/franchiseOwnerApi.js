import franchiseOwners from "../data/franchiseOwners";

// Simulates an API response using the separate data file.
// Replace this function with fetch() when your backend API is available.
export const getFranchiseOwners = async () => {
  try {
    return franchiseOwners;
  } catch (error) {
    console.error("Failed to fetch franchise owners:", error);
    throw error;
  }
};