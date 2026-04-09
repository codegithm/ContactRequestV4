import Link from "next/link";
import { ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function UnauthorizedPageContent() {
    return (<div className="min-h-svh flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <ShieldX className="w-8 h-8 text-destructive"/>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Unauthorized Access
          </h1>
          <p className="text-muted-foreground text-sm">
            The partner you&apos;re trying to reach is not registered or your
            session has expired.
          </p>
        </div>
        <Button asChild variant="outline" className="btn-press">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>);
}
