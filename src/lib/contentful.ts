import { createClient } from "contentful";
import type { Projects } from "../components/Projects";

const client = createClient({
  space: import.meta.env.VITE_PUBLIC_CONTENTFUL_SPACEID,
  accessToken: import.meta.env.VITE_PUBLIC_CONTEFUL_API,
});

export default async function getProjects(): Promise<Projects[]> {
  try {
    const entries = await client.getEntries({
      content_type: "project",
      order: ["fields.order"] as "fields.order"[],
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title as string,
      subtitle: item.fields.subtitle as string,
      techStack: (item.fields.techStack as string[]) || ([] as string[]),
      liveLink: item.fields.liveLink as string,
      order: item.fields.order as number,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
