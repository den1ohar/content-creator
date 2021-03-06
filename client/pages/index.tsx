import Head from "next/head";
import PageWrapper from "@layouts/PageWrapper";
import ContentInterfaceProps from "interfaces/ContentInterfaceProps";
import ContentBlock from "@components/ContentBlock";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Content Creator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <ContentBlock />
      </PageWrapper>
    </div>
  );
};

export default Home;

/*

- URL
- text title
- text paragraph
- image
- head title
- head description

*/
