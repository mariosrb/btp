export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Une erreur est survenue');
    }

    return { status: 'ok', data };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

export default submitContactForm;

