const NFTCard = ({nft}) => {
    const nftContractAddress = nft.contract.address;
    const len = nftContractAddress.length;
    const address = `${nftContractAddress.substring(0,8)}....${nftContractAddress.substring(len-8,len)}`;
    return (
        <div className="w-1/4 flex flex-col border-gray-400 border rounded-md">
            <div className="rounded-md">
                {nft.media[0].gateway.endsWith(".png") || nft.media[0].gateway.endsWith(".jpg") || nft.media[0].gateway.endsWith(".jpeg")? 
                    <img className="object-cover w-full h-128 rounded-t-md" src={nft.media[0].gateway} />: <div className="object-cover h-[128px] w-full rounded-t-md bg-gray-200 animate-pulse"></div>
                }    
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div className="">
                    <h2 className="text-xl text-gray-800">{nft.title}</h2>
                    <p className="text-gray-600">Id: {parseInt(nft.id.tokenId)}</p>
                    <p className="text-gray-600" >{address} <a href={`https://etherscan.io/token/${nftContractAddress}`} className="border border-black rounded-sm px-[4px] mx-[4px]" target="_blank">↗️ Etherscan </a></p>
                </div>

                <div className="flex-grow mt-2">
                    <p className="text-gray-600">{nft.description}</p>
                </div>
            </div>
        </div>
    );
}
export default NFTCard;