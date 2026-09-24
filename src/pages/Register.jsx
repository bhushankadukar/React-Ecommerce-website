import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Left Side */}

        <div className="auth-info register-info">

          <div className="auth-logo">
            🛍️ Shop<span>Kart</span>
          </div>

          <h2>
            Create Your
            <br />
            Account!
          </h2>

          <p>
            Join ShopKart today and discover
            amazing products at great prices.
          </p>

          <div className="auth-benefits">

            <div>
              <span>✓</span>
              <p>Quick & easy registration</p>
            </div>

            <div>
              <span>✓</span>
              <p>Access exclusive deals</p>
            </div>

            <div>
              <span>✓</span>
              <p>Secure shopping experience</p>
            </div>

            <div>
              <span>✓</span>
              <p>Manage your orders easily</p>
            </div>

          </div>

        </div>


        {/* Form Side */}

        <div className="auth-form-section">

          <div className="auth-heading">

            <span>CREATE ACCOUNT</span>

            <h1>Register</h1>

            <p>
              Fill in your details to create your account.
            </p>

          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Username */}

            <div className="auth-form-group">

              <label htmlFor="username">
                Username
              </label>

              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Username is required",

                  minLength: {
                    value: 3,
                    message:
                      "Username must be at least 3 characters",
                  },

                  maxLength: {
                    value: 20,
                    message:
                      "Username cannot exceed 20 characters",
                  },
                })}
              />

              {errors.username && (
                <span className="auth-error">
                  {errors.username.message}
                </span>
              )}

            </div>


            {/* Email */}

            <div className="auth-form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",

                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                    message:
                      "Please enter a valid email address",
                  },
                })}
              />

              {errors.email && (
                <span className="auth-error">
                  {errors.email.message}
                </span>
              )}

            </div>


            {/* Password */}

            <div className="auth-form-group">

              <label htmlFor="password">
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },

                  validate: (value) => {
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain an uppercase letter";
                    }

                    if (!/[0-9]/.test(value)) {
                      return "Password must contain a number";
                    }

                    return true;
                  },
                })}
              />

              {errors.password && (
                <span className="auth-error">
                  {errors.password.message}
                </span>
              )}

            </div>


            {/* Confirm Password */}

            <div className="auth-form-group">

              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required:
                    "Please confirm your password",

                  validate: (value) =>
                    value === password ||
                    "Passwords do not match",
                })}
              />

              {errors.confirmPassword && (
                <span className="auth-error">
                  {errors.confirmPassword.message}
                </span>
              )}

            </div>


            {/* Terms */}

            <div className="terms-row">

              <label>

                <input
                  type="checkbox"
                  {...register("terms", {
                    required:
                      "You must accept the terms and conditions",
                  })}
                />

                <span>
                  I agree to the Terms & Conditions
                </span>

              </label>

              {errors.terms && (
                <span className="auth-error">
                  {errors.terms.message}
                </span>
              )}

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="auth-submit"
            >
              Create Account →
            </button>

          </form>


          {/* Login Link */}

          <div className="auth-switch">

            <p>
              Already have an account?
              <Link to="/login">
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}