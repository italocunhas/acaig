import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthRedirect = (redirectTo: string) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(redirectTo);
    }
  }, [status, router, redirectTo]);

  return { session, status };
}; 