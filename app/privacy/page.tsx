import Navigation from "@/components/layout/Navigation";
import InnerPageFooter from "@/components/footer/InnerPageFooter";
import PrivacyPolicyPage from "@/components/privacy/PrivacyPolicyPage";
import {
  TalkToDynava,
  TalkToDynavaProvider,
} from "@/components/talk-to-dynava";

export default function PrivacyPage() {
  return (
    <TalkToDynavaProvider>
      <Navigation />

      <main className="overflow-x-clip">
        <PrivacyPolicyPage />
      </main>

      <TalkToDynava />

      <InnerPageFooter />
    </TalkToDynavaProvider>
  );
}