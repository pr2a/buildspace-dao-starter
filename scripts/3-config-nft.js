import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4841676a7a2CaB6816284CA1e950c617773C5479",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "testest",
        description: "This NFT will give you test",
        image: readFileSync("scripts/assets/bun.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
