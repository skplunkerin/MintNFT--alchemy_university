async function run() {
  const { create } = await import("ipfs-http-client");
  //// the following url is used by default, which doesn't work:
  //// { url: "http://localhost:5001/api/v0" }
  // const ipfs = await create();
  //
  // I need to set the `host` or full `url` to use '127.0.0.1' instead of
  // 'localhost':
  // const ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });
  const ipfs = create({ host: "127.0.0.1" });

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My AU NFT",
      attributes: [
        {
          trait_type: "Peace",
          value: "10",
        },
        {
          trait_type: "Love",
          value: "100",
        },
        {
          trait_type: "Web3",
          value: "1000",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmRLvujkAG2txs6xbw5YnAK3QFVYog2Nkk7pxBKmaS2MRo",
      description: "So much PLW3! 😍",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
