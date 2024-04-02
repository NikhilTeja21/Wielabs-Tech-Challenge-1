// import { processDataDump } from "./challenge";

// /**
//  * This is the entry point for the challenge.
//  * This will run your code.
//  */
// await processDataDump();
// console.log("✅ Done!");

import { processDataDump } from "./challenge";

/**
 * This is the entry point for the challenge.
 * This will run your code.
 */
async function run() {
    try {
        await processDataDump();
        console.log("✅ Done!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

run();
