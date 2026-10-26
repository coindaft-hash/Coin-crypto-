import { useEffect, useState } from "react";
import { Copy, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export function MyInviteCode() {
  const [code, setCode] = useState<string | null>(null);
  useEffect(() => {
    supabase.rpc("ensure_my_invite_code").then(({ data }) => { if (typeof data === "string") setCode(data); });
  }, []);
  if (!code) return null;
  return (
    <div className="mx-4 mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
      <UserPlus className="size-5 text-primary" />
      <div className="flex-1">
        <p className="text-xs text-muted-foreground">My invitation code</p>
        <p className="font-semibold tracking-wider">{code}</p>
      </div>
      <Button size="sm" variant="secondary" onClick={() => { void navigator.clipboard.writeText(code); toast.success("Invitation code copied"); }}>
        <Copy className="size-4" />Copy
      </Button>
    </div>
  );
}
