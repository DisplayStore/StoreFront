<div class="p-4 w-full md:mx-auto my-12">
    <div class="bg-zinc-850 shadow-lg rounded-lg overflow-hidden">
        <div class="flex items-center justify-between px-4 py-3 bg-zinc-800">
            <h1 class="text-lg font-bold">Shopping Cart</h1>
            <span class="text-gray-200">(3 items)</span>
        </div>
        <div class="p-4">
            <!-- items  -->
            <div class="flex items-center mb-4">
                <img
                    class="h-auto w-16 object-contain rounded-lg mr-4"
                    src="https://i.ibb.co/jw8W3T2/hmlv-mug-006-removebg-preview.png"
                    alt="Product"
                    draggable="false"
                    oncontextmenu="return false"
                />
                <div class="flex-1">
                    <h2 class="text-lg font-bold">Product Title</h2>
                    <span class="text-white/90">$29.99</span>
                </div>
                <div class="scale-80 md:scale-100 flex items-center justify-center text-center align-center">
                    <button class="text-white/90 text-3xl hover:text-white">
                        &plus;
                    </button>
                    <input type="number" name="number" value="3" readonly class="rounded-3xl bg-zinc-900 px-2 md:px-4 py-0.5 md:py-1 w-10 md:w-16 text-center mx-2 text-white/95 focus:border-none select-none focus:ring-0">
                    <button class="text-white/90 text-3xl hover:text-white">
                        &minus;
                    </button>
                </div>
            </div>
            <!-- items end  -->
        </div>
        <div class="px-5 py-6 bg-zinc-800">
            <div class="flex justify-between items-center">
                <span class="font-bold text-lg">Total:</span>
                <span class="font-bold text-lg">$74.97</span>
            </div>

            <div class="w-full flex items-center justify-center">
                
                <button
                class="mt-6 text-center inline-block w-full md:w-1/2 mx-auto shrink-0 rounded-md border border-white bg-white/90 px-12 py-3 text-md font-bold text-black transition hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                >
                Checkout 
            </button>
        </div>
        </div>
    </div>
</div>
