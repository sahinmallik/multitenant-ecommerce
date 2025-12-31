import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "users",
  });

  return (
    <div className="flex flex-col gap-y-4 p-4">{JSON.stringify(data)}</div>
  );
}
