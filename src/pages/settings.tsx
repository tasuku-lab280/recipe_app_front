import type { CustomNextPage } from "next";
import { Group, Stack } from "@mantine/core";
import { DashboardLayout } from "layouts";
import { PageContent } from "components/PageContent";
import { PageContainer } from "components/PageContainer";

const Settings: CustomNextPage = () => {
  return (
    <PageContainer
      title="設定"
      items={[
        { label: "ダミー", href: "#" },
        { label: "パンくず", href: "#" },
        { label: "リスト", href: "#" },
      ]}
    >
      <Stack spacing="xl">
        <PageContent outerTitle title="Foo!">
          Foo
        </PageContent>
        <Group grow>
          <PageContent title="Bar!">Bar</PageContent>
          <PageContent title="Baz!">Baz</PageContent>
        </Group>
      </Stack>
    </PageContainer>
  );
};

Settings.getLayout = DashboardLayout;

export default Settings;
