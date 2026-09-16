import Navigation from "@/components/layout/Navigation";
import InnerPageFooter from "@/components/footer/InnerPageFooter";
import ContactPage from "@/components/contact/ContactPage";
import {
  TalkToDynava,
  TalkToDynavaProvider,
} from "@/components/talk-to-dynava";

export default function Contact() {
  return (
    <TalkToDynavaProvider>
      <Navigation />

      <main className="overflow-x-clip">
        <ContactPage />
      </main>

      <TalkToDynava />

      <InnerPageFooter />
    </TalkToDynavaProvider>
  );
}