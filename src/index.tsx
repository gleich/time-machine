import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { execa } from "execa";

export default function Command() {
  const { isLoading, data } = usePromise(async () => {
    const { stdout } = await execa("tmutil", ["status"]);
    return stdout;
  });
  const markdown = data && data.includes("Running = 0;") ? "# Backup Not Running" : "";

  return <Detail isLoading={isLoading} markdown={markdown} />;
}
