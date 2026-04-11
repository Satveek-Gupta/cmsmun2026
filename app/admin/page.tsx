import { cookies } from "next/headers";
import { AddDelegateForm } from "@/components/admin/AddDelegateForm";
import { UploadGuideForm } from "@/components/admin/UploadGuideForm";
import { BulkImportForm } from "@/components/admin/BulkImportForm";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

  if (!isAuthenticated) {
    return <AdminLoginForm />;
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4 py-12 sm:pt-24">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold uppercase tracking-widest text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          CMSMUN Admin Panel
        </h1>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Add Data & Upload Guides
        </p>
      </div>

      <div className="flex w-full flex-col md:flex-row gap-8">
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <AddDelegateForm />
          <BulkImportForm />
        </div>
        <div className="w-full md:w-1/2">
          <UploadGuideForm />
        </div>
      </div>
    </div>
  );
}
