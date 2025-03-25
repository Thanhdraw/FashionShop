import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { AuthProvider } from "../context/auth/AuthContext";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen rounded-lg">
      <AuthProvider>
        {/* Header */}
        <Header />

        {/* Nội dung chính */}
        <main className="container flex-1 px-4 py-6 mx-auto ">{children}</main>

        {/* Footer */}
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Layout;
