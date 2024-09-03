import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"Buy Now"}>
      <PageBanner pageName={"Buy Now"} />
      <div className="neoh_fn_aboutpage">
        <section id="information">
          <div className="container">
            <div className="neoh_fn_about_item">
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">BUY NOW</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div>
                  <iframe
                    src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x13122735B2b8A6D412d8e87a0Ef3342C7c26dE92&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F1.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmdwQDr6vmBtXmK2TmknkEuZNoaDqTasFdZdu3DRw8b2wt%22%2C%22width%22%3A1000%2C%22height%22%3A1628%2C%22format%22%3A%22png%22%7D%7D&clientId=9a4b692962c8c63f4c6e01d09f3a9f69&theme=dark&primaryColor=green"
                    width="600px"
                    height="600px"
                    style="max-width:100%;"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default About;
