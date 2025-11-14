import { useCallback, useMemo, useState } from 'react';
import { submitContactForm } from '../services/contactService';

const defaultValues = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  travauxInterieur: 'Aucun',
  travauxExterieur: 'Aucun',
  description: '',
  accepteConditions: false,
};

const useContactForm = (initialValues = defaultValues, { successDelay = 3000 } = {}) => {
  const mergedInitialValues = useMemo(
    () => ({ ...defaultValues, ...initialValues }),
    [initialValues]
  );

  const [formData, setFormData] = useState(mergedInitialValues);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const resetForm = useCallback(() => {
    setFormData(mergedInitialValues);
  }, [mergedInitialValues]);

  const handleInputChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    if (status === 'submitting') {
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      await submitContactForm(formData);
      setStatus('success');
      resetForm();
      setTimeout(() => {
        setStatus('idle');
      }, successDelay);
    } catch (submitError) {
      setError(submitError);
      setStatus('error');
    }
  }, [formData, resetForm, status, successDelay]);

  return {
    formData,
    status,
    error,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};

export default useContactForm;

