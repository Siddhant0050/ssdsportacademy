import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import googleFormConfig from "../../googleFormConfig";

export default function EnrollForm({ onClose }) {
  const [values, setValues] = useState({
    fullName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    city: "",
    trialDate: "",
    experience: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const hiddenFormRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!googleFormConfig.formAction) {
      alert(
        "Google Form action URL not configured. Update src/googleFormConfig.js",
      );
      return;
    }

    if (
      !values.fullName ||
      !values.age ||
      !values.parentName ||
      !values.phone ||
      !values.email ||
      !values.city ||
      !values.trialDate ||
      !values.experience
    ) {
      setError("Please fill in all required fields before submitting.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(values.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (hiddenFormRef.current) {
      hiddenFormRef.current.submit();
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setValues({
        fullName: "",
        age: "",
        parentName: "",
        phone: "",
        email: "",
        city: "",
        trialDate: "",
        experience: "",
        message: "",
      });
    }, 900);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose && onClose();
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white p-8 text-center shadow-2xl shadow-black/20">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Registration successful
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Thank you for choosing SSD Sports Academy. We've received your
            request and our team will be in touch shortly to confirm your trial
            session.
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="mt-8 inline-flex rounded-3xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:brightness-110"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-2xl shadow-black/20 max-h-[calc(100vh-48px)]">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 px-5 py-5 sm:px-6 sm:py-6 text-white">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-orange-100">
                SSD Sport Academy
              </p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight">
                Book Your Free Trial
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-orange-100/90">
                Reserve a professional trial session for your child and let our
                coaches build their next winning move.
              </p>
              <p className="mt-3 max-w-2xl text-sm italic text-orange-50">
                “Champions are made from dedication, discipline and the right
                guidance.”
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>

        <div className="max-h-[calc(100vh-240px)] overflow-y-auto bg-white px-6 py-8 sm:px-8 sm:py-10">
          {error && (
            <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Student Full Name *
                <input
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter student name"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Student Age *
                <input
                  type="number"
                  name="age"
                  min="3"
                  max="25"
                  value={values.age}
                  onChange={handleChange}
                  required
                  placeholder="Age"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Parent / Guardian Name *
                <input
                  name="parentName"
                  value={values.parentName}
                  onChange={handleChange}
                  required
                  placeholder="Parent or guardian"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Contact Number *
                <input
                  type="tel"
                  name="phone"
                  maxLength="10"
                  value={values.phone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile number"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Email Address *
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                City / Area *
                <input
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Pune"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Preferred Trial Date *
                <input
                  type="date"
                  name="trialDate"
                  value={values.trialDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Previous Sports Experience *
                <select
                  name="experience"
                  value={values.experience}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                >
                  <option value="">Choose experience</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Some Experience">Some Experience</option>
                  <option value="Advanced Player">Advanced Player</option>
                  <option value="No Experience">No Experience</option>
                </select>
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Additional Message
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={4}
                placeholder="Optional: share anything else we should know"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                Register today and take the first step toward becoming a
                confident sports champion.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-max whitespace-nowrap items-center justify-center rounded-3xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Registering..." : "Register Now"}
              </button>
            </div>
          </form>
        </div>

        <form
          ref={hiddenFormRef}
          action={googleFormConfig.formAction}
          method="POST"
          target="googleFormIframe"
          style={{ display: "none" }}
        >
          {Object.entries(googleFormConfig.fieldMap || {}).map(
            ([key, entryName]) => (
              <input
                key={entryName}
                type="hidden"
                name={entryName}
                value={values[key] || ""}
              />
            ),
          )}
        </form>

        <iframe
          name="googleFormIframe"
          title="google-form-target"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
