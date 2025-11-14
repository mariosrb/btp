export const submitContactForm = async (formData) => {
  // Placeholder implementation - to be replaced by real backend integration (e.g., email service)
  console.groupCollapsed('Contact form submission');
  console.table(formData);
  console.groupEnd();

  // Simulate network latency to keep UX consistent with previous implementation
  await new Promise((resolve) => setTimeout(resolve, 300));

  return { status: 'ok' };
};

export default submitContactForm;

