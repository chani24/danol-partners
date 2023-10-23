import PageWrapper from "./PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danol Partners | A world-class law firm with African roots",
  description:
    "Danol Partners is a full-service law firm established with a resolve to provide creative, practical, and cutting-edge legal solutions to its clients.",
  openGraph: {
    title: "Danol Partners | A world-class law firm with African roots",
    description:
      "Danol Partners is a full-service law firm established with a resolve to provide creative, practical, and cutting-edge legal solutions to its clients.",
    url: "https://danolparters.com",
    siteName: "Danol Partners",
    images: [
      {
        url: "https://danolparters.com/images/large-og.png",
        width: 1197,
        height: 698,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danol Partners | A world-class law firm with African roots",
    description:
      "Danol Partners is a full-service law firm established with a resolve to provide creative, practical, and cutting-edge legal solutions to its clients.",
    siteId: "",
    creator: "",
    creatorId: "",
    images: ["https://danolparters.com/images/large-og.png"],
  },
};

export default PageWrapper;
