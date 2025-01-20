import  { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-base-200">
      {/* Left Column - Text and Image */}
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome Back to Our Library</h1>
        <p className="text-lg mb-6">
          Explore your favorite books, manage your library, and more. Login to
          continue your journey with us.
        </p>
        <img
          src="/login.png"
          alt="Library"
          className="rounded-lg"
        />
      </div>

      {/* Right Column - Login Form */}
      <div className="flex items-center  bg-base-100 justify-center p-8">
        <div className="card w-full max-w-md">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-4">
              Don't have an account?{' '}
              <a href="/register" className="text-primary">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
