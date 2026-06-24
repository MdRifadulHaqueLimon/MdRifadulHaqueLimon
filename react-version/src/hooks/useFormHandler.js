/**
 * useFormHandler Hook
 * Handles form submission with loading and status states
 */
import { useState } from 'react';

export const useFormHandler = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission - replace with actual EmailJS/Formspree/backend call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus({
        type: 'success',
        message: "✅ Message sent! I'll get back to you soon.",
      });

      // Reset form
      e.target.reset();

      // Clear status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, status };
};
