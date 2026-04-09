import { redirect } from "next/navigation";
interface LegacyFeedbackPageProps {
    params: {
        partnerId: string;
    };
}
export default function LegacyFeedbackPage({ params, }: LegacyFeedbackPageProps) {
    redirect(`/${params.partnerId}/report`);
}
