import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Left Side */}
        <div className="auth-info">

          <div className="auth-logo">
            🛍️ Shop<span>Kart</span>
          </div>

          <h2>
            Welcome
            <br />
            Back!
          </h2>

          <p>
            Login to your ShopKart account and
            continue your shopping journey.
          </p>

          <div className="auth-benefits">

            <div>
              <span>✓</span>
              <p>Fast & secure shopping</p>
            </div>

            <div>
              <span>✓</span>
              <p>Exclusive product deals</p>
            </div>

            <div>
              <span>✓</span>
              <p>Easy order management</p>
            </div>

          </div>

        </div>

        {/* Form Side */}
        <div className="auth-form-section">

          <div className="auth-heading">

            <span>ACCOUNT LOGIN</span>

            <h1>Login</h1>

            <p>
              Enter your details to access your account.
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

              <div className="label-row">

                <label htmlFor="password">
                  Password
                </label>

                <Link
                  to="#"
                  className="forgot-password"
                >
                  Forgot Password?
                </Link>

              </div>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
              />

              {errors.password && (
                <span className="auth-error">
                  {errors.password.message}
                </span>
              )}

            </div>


            {/* Remember */}

            <div className="remember-row">

              <label>
                <input
                  type="checkbox"
                  {...register("remember")}
                />

                <span>
                  Remember me
                </span>
              </label>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="auth-submit"
            >
              Login →
            </button>

          </form>


          {/* Register Link */}

          <div className="auth-switch">

            <p>
              Don't have an account?
              <Link to="/register">
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}