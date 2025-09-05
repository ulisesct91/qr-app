function AuthLayout({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
