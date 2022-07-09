import type { CustomNextPage } from "next";
import { DashboardLayout } from "layouts";

const Notification: CustomNextPage = () => {
  return <div>Notification</div>;
};

Notification.getLayout = DashboardLayout;

export default Notification;
