import Navigation from "@/components/layout/Navigation";
import InnerPageFooter from "@/components/footer/InnerPageFooter";
import TermsPage from "@/components/terms/TermsPage";
import {
  TalkToDynava,
  TalkToDynavaProvider,
} from "@/components/talk-to-dynava";

export default function Terms() {
  return (
    <TalkToDynavaProvider>
      <Navigation />

      <main className="overflow-x-clip">
        <TermsPage />
      </main>

      <TalkToDynava />

      <InnerPageFooter />
    </TalkToDynavaProvider>
  );
}