'use client';
import { contactFormSchema, type ContactFormData } from '@/schemas/contact-form';
import { ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useState, type FormEvent } from 'react';

type ContactFormField = keyof Pick<ContactFormData, 'name' | 'email' | 'subject' | 'message'>;
type FormErrors = Partial<Record<ContactFormField, string>>;

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: 'Full-Stack Web Development',
  message: '',
};

function ContactForm() {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const updateField = (field: ContactFormField, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmitInquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse({
      ...formData,
      submittedAt: new Date().toISOString(),
      source: window.location.href,
    });

    if (!result.success) {
      const nextErrors: FormErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0] as ContactFormField;
        if (field in initialFormData && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }

      setErrors(nextErrors);
      toast.error('Please correct the highlighted fields.');
      return;
    }

    setErrors({});
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      toast.success(`Thank you, ${result.data.name}! Your project inquiry was submitted.`);
      setFormData(initialFormData);
    }, 850);
  };
  return (
    <div className="w-full bg-white p-6 sm:p-8 border border-line/90 shadow-sm relative">
      <h4 className="font-jakarta font-bold text-sm uppercase tracking-wider text-ink mb-4 flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-primary"></span>
        <span>Send Project Inquiry</span>
      </h4>

      <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-jakarta font-bold uppercase tracking-wider text-[10px] text-muted mb-1">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="e.g. Sarah Connor"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full px-3.5 py-2.5 bg-field border focus:bg-white outline-none rounded-none text-ink font-sans transition-colors ${errors.name ? 'border-red-600 focus:border-red-600' : 'border-line focus:border-primary'}`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-[10px] text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block font-jakarta font-bold uppercase tracking-wider text-[10px] text-muted mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="name@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full px-3.5 py-2.5 bg-field border focus:bg-white outline-none rounded-none text-ink font-sans transition-colors ${errors.email ? 'border-red-600 focus:border-red-600' : 'border-line focus:border-primary'}`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-[10px] text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-jakarta font-bold uppercase tracking-wider text-[10px] text-muted mb-1">
            Service or Inquiry Type
          </label>
          <select
            value={formData.subject}
            onChange={(e) => updateField('subject', e.target.value)}
            className="w-full px-3 py-2.5 bg-field border border-line focus:border-primary focus:bg-white outline-none rounded-none text-ink font-sans transition-colors cursor-pointer"
          >
            <option value="Full-Stack Web Development">
              Full-Stack Web Application (Next.js / TypeScript / APIs)
            </option>
            <option value="Microservices & Cloud Backend">
              Microservices & Distributed Backend (Go / Python / Kafka)
            </option>
            <option value="Cloud Infrastructure & DevOps">
              Cloud & DevOps (AWS / Docker / Kubernetes CI/CD)
            </option>
            <option value="Architecture Consulting">
              System Architecture & Code Review Consultation
            </option>
            <option value="Full-time Role Inquiry">Full-time Senior Engineering Opportunity</option>
          </select>
        </div>

        <div>
          <label className="block font-jakarta font-bold uppercase tracking-wider text-[10px] text-muted mb-1">
            Project Scope & Details *
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            placeholder="Briefly describe your product goals, technical stack preference, or timeline..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full px-3.5 py-2.5 bg-field border focus:bg-white outline-none rounded-none text-ink font-sans transition-colors resize-none ${errors.message ? 'border-red-600 focus:border-red-600' : 'border-line focus:border-primary'}`}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-[10px] text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[10px] font-fira text-muted">
            * All communication is strictly confidential.
          </span>
          <button
            type="submit"
            disabled={formSubmitting}
            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-hover text-white font-jakarta font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm disabled:opacity-75"
          >
            <span>{formSubmitting ? 'Transmitting...' : 'Send Message'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
