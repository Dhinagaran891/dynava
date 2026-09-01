export default function CareersApplication() {
  return (
    <section
      aria-labelledby="careers-application-heading"
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200/70
        bg-[#F7FAFF]
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
    >
      {/* Subtle Dynava atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-0
          h-[420px]
          w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#126BFF]/[0.035]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              mb-6
              text-[11px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#126BFF]
              sm:text-xs
            "
          >
            Join Dynava
          </p>

        <h2
  id="careers-application-heading"
  className="
    text-4xl
    font-medium
    leading-[1.04]
    tracking-[-0.04em]
    text-slate-950
    sm:text-5xl
    lg:text-6xl
  "
>
  Tell us what
  <br />
  <span
    className="
      bg-gradient-to-r
      from-[#126BFF]
      via-[#16B7E8]
      to-[#00B889]
      bg-clip-text
      text-transparent
    "
  >
    you can bring.
  </span>
</h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            Tell us a little about yourself, your experience, and
            the kind of problems you'd like to work on.
          </p>
        </div>

        {/* Application form */}
        <form
          className="
            mx-auto
            mt-14
            max-w-4xl
            border-t
            border-slate-200
            pt-10
            sm:mt-16
            sm:pt-12
          "
        >
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">

            {/* Full name */}
            <div>
              <label
                htmlFor="full-name"
                className="
                  mb-3
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-600
                "
              >
                Full name
              </label>

              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="
                  w-full
                  border-b
                  border-slate-300
                  bg-transparent
                  px-0
                  py-3
                  text-base
                  text-slate-950
                  outline-none
                  placeholder:text-slate-400
                  transition-colors
                  duration-200
                  focus:border-[#126BFF]
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="
                  mb-3
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-600
                "
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="
                  w-full
                  border-b
                  border-slate-300
                  bg-transparent
                  px-0
                  py-3
                  text-base
                  text-slate-950
                  outline-none
                  placeholder:text-slate-400
                  transition-colors
                  duration-200
                  focus:border-[#126BFF]
                "
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="
                  mb-3
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-600
                "
              >
                Phone
                <span className="ml-2 normal-case tracking-normal text-slate-400">
                  Optional
                </span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91..."
                className="
                  w-full
                  border-b
                  border-slate-300
                  bg-transparent
                  px-0
                  py-3
                  text-base
                  text-slate-950
                  outline-none
                  placeholder:text-slate-400
                  transition-colors
                  duration-200
                  focus:border-[#126BFF]
                "
              />
            </div>

            {/* Area of interest */}
            <div>
              <label
                htmlFor="interest"
                className="
                  mb-3
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-600
                "
              >
                Area of interest
              </label>

              <select
                id="interest"
                name="interest"
                defaultValue=""
                className="
                  w-full
                  border-b
                  border-slate-300
                  bg-transparent
                  px-0
                  py-3
                  text-base
                  text-slate-950
                  outline-none
                  transition-colors
                  duration-200
                  focus:border-[#126BFF]
                "
              >
                <option value="" disabled>
                  Select an area
                </option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="data">Data & Analytics</option>
                <option value="engineering">Software Engineering</option>
                <option value="product">Product & Digital</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* About */}
            <div className="sm:col-span-2">
              <label
                htmlFor="about"
                className="
                  mb-3
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-600
                "
              >
                About you
              </label>

              <textarea
                id="about"
                name="about"
                rows={5}
                placeholder="Tell us about your experience, interests, or the kind of work you'd like to explore."
                className="
                  w-full
                  resize-none
                  border-b
                  border-slate-300
                  bg-transparent
                  px-0
                  py-3
                  text-base
                  leading-7
                  text-slate-950
                  outline-none
                  placeholder:text-slate-400
                  transition-colors
                  duration-200
                  focus:border-[#126BFF]
                "
              />
            </div>

            {/* Resume */}
            <div className="sm:col-span-2">
              <label
                htmlFor="resume"
                className="
                  mb-3
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-600
                "
              >
                Resume / CV
              </label>

              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="
                  block
                  w-full
                  cursor-pointer
                  border-b
                  border-slate-300
                  bg-transparent
                  py-3
                  text-sm
                  text-slate-500
                  file:mr-4
                  file:rounded-md
                  file:border-0
                  file:bg-white
                  file:px-4
                  file:py-2
                  file:text-sm
                  file:font-medium
                  file:text-slate-700
                  file:shadow-sm
                  hover:file:bg-slate-50
                  focus:outline-none
                "
              />

              <p className="mt-3 text-xs leading-5 text-slate-400">
                PDF, DOC or DOCX. Maximum file size will be enforced
                when the application backend is connected.
              </p>
            </div>
          </div>

          {/* Privacy + submit */}
          <div
            className="
              mt-12
              flex
              flex-col
              gap-8
              border-t
              border-slate-200
              pt-8
              sm:mt-14
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div className="max-w-lg">
              <label
                htmlFor="privacy"
                className="flex cursor-pointer items-start gap-3"
              >
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="
                    mt-1
                    h-4
                    w-4
                    shrink-0
                    accent-[#126BFF]
                  "
                />

                <span className="text-xs leading-5 text-slate-600">
                  I consent to Dynava using the information provided
                  to evaluate my application and contact me regarding
                  relevant opportunities.
                </span>
              </label>

              <p className="mt-3 text-xs text-slate-400">
                Please review our privacy policy before submitting.
              </p>
            </div>

            {/* UI-only submit button for now */}
            <button
              type="button"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-4
                text-base
                font-medium
                text-slate-950
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#126BFF]/40
                  bg-[#126BFF]/[0.06]
                  text-[#126BFF]
                  transition-all
                  duration-300
                  group-hover:border-[#00B889]
                  group-hover:bg-[#00B889]
                  group-hover:text-white
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </span>

              <span
                className="
                  transition-colors
                  duration-300
                  group-hover:text-[#126BFF]
                "
              >
                Submit application
              </span>
            </button>
          </div>
        </form>

        {/* Closing brand line */}
        <div
          className="
            mt-16
            border-t
            border-slate-200
            pt-7
            sm:mt-20
          "
        >
          <p
            className="
              text-center
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-slate-400
              sm:text-xs
            "
          >
            Intelligence for Every Enterprise
          </p>
        </div>
      </div>
    </section>
  );
}