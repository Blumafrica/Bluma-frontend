export default function Footer(){
    return(
        <>
        <div class="bg-purple-200 xl:grid xl:grid-cols-4 h-fit p-4">
            <div>
                <p class="p-4 uppercase text-5xl font-bold text-purple-600">Blu <span class="bg-purple-400 p-4 rounded-full">ma</span></p>
            </div>
            <div class="text-center">
                <label class="text-3xl uppercase">Explore</label>
                <ul class="text-2xl">
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Go Pro</li>
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Export Library</li>
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Create Library</li>
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Play Offs</li>
                </ul>
            </div>
            <div class="text-center">
            <label class="text-3xl uppercase">Innovate</label>
                <ul class="text-2xl">
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Tags</li>
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Tags Canvas</li>
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Places</li>
                    <li class="p-2 hover:bg-purple-400 cursor-pointer text-center">Creative Market</li>
                </ul>
            </div>
            <div class="text-center">
                <input class=" w-3/4 text-2xl p-4 text-center" type="text" placeholder="Send to Message"></input>
                <div class="flex justify-center">
                <p class="cursor-pointer m-4 p-3 text-2xl w-1/3 bg-black text-white rounded-lg">Send Message</p>
                </div>
            </div>
        </div>
        </>
    )
}