import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>next-web3-boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>next-app</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1></h1>

        {isConnected && (
          <section>
            <div>
              <form>
                <label>
                  Provide Tokens <br />
                  <input type="text" placeholder="Amount" name="inputProvide" />
                </label>
                <p className="underText">
                  <ETHBalance />
                </p>
                <button type="submit"> Provide</button>
              </form>
            </div>
            <div>
              <form>
                <label>
                  Withdraw Tokens <br />
                  <input
                    type="text"
                    placeholder="Amount"
                    name="inputWithdraw"
                  />
                </label>
                <p className="underText">
                  <ETHBalance />
                </p>
                <button type="submit"> Withdraw</button>
              </form>
            </div>
          </section>
        )}
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
