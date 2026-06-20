import { PopupFormProvider } from "../context/PopupFormContext";
import { CompareProvider } from "../context/CompareContext";
import PopupForm from "../Components/PopupForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CompareBar from "../Components/CompareBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PopupFormProvider>
      <CompareProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PopupForm />
        <CompareBar />
      </CompareProvider>
    </PopupFormProvider>
  );
}
