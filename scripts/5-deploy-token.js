import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x2DEAda8c1CEFa7f3BD3a9Ce7BaCF974bB958a06C");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "TestDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "HOKAGE",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

//token mod addr: 0x5A2A3bB8DA5a4938FE172038FEe0133215612d8A
