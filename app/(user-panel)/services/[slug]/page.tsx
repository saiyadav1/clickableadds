import type { Metadata } from "next";
import servicesData from "@/data/services.json";
import { notFound } from "next/navigation";
import SingleService from "./SingleService";

type Props = {
  params: {
    slug: string;
  };
};

/* ------------------ SEO METADATA ------------------ */
export function generateMetadata({ params }: Props): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Elite Agency",
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${service.title} | Elite Digital Services`,
    description: service.longDesc,
    alternates: {
      canonical: `https://eliteagency.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.longDesc,
      url: `https://eliteagency.com/services/${service.slug}`,
      siteName: "Elite Agency",
      images: [
        {
          url: service.ogImage ?? "/og/service-default.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.longDesc,
      images: [service.ogImage ?? "/og/service-default.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


export default function ServicePage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) notFound();

  return <SingleService service={service} />;
}

/* ------------------ STATIC GENERATION (OPTIONAL BUT RECOMMENDED) ------------------ */
export async function generateStaticParams({ params }: Props) {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
