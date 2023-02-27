async function main() {
    const CrowdFunding = await ethers.getContractFactory("CrowdFunding");

    // Start deployment, returning a promise that resolves to a contract object
    const campaign = await CrowdFunding.deploy();
    console.log("Contract deployed to address:", campaign.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });