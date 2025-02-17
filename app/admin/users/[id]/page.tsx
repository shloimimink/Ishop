import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";
import UpdateUserForm from "./update-user-form";

export const metadata: Metadata = {
  title: "Update user",
};

const AdminUserUpdatePage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const user = await getUserById(id);

  if (!user) notFound();

  return (
    <div className="space-y-8 max-w-lg mx-auto">
      <h1 className="h2-bold">Update user</h1>
      <UpdateUserForm user={user} />
    </div>
  );
};

export default AdminUserUpdatePage;
