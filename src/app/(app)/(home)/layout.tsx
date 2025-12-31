import configPromise from "@payload-config";
import { getPayload } from "payload";
import Footer from "./footer";
import Navbar from "./navbar";
import SearchFilters from "./search-filters";

interface Props {
  children: React.ReactNode;
}

const layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "categories",
    depth: 1, //populating subcategories
    where: {
      parent: {
        exists: false,
      },
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={data} />
      <div className="flex-1 bg-[#f4f4f4]">{children}</div>

      <Footer />
    </div>
  );
};

export default layout;
