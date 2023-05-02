import BrandClinic from "@/components/Pages/About/brand_clinic";
import BrandList from "@/components/Pages/About/brand_list";
import BrandStory from "@/components/Pages/About/brand_story";
import Breadcrumb from "@/components/Widget/breadcrumb";
import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout pageTitle="About">
      <Breadcrumb title="About" navigate="about" />
      {/* story section */}
      <BrandStory />
      {/* list brand */}
      <BrandList />
      {/* klinik brand */}
      <BrandClinic />
    </Layout>
  );
}