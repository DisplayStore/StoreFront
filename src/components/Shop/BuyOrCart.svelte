<script>
    // imports 
    import { isLoading } from "../../store";

    // props
    export let quantity = 1;
    export const id = "";

    /**
     * Add more
     */
    function add_quantity() {
        if (quantity !== 10) {
            quantity = quantity + 1;
        }
    }

    /**
     * Minus quantity
     */
    function minus_quantity() {
        if (quantity !== 1) {
            quantity = quantity - 1;
        }
    }

    /**
     * Add to cart 
     */
    function add_to_Cart() {
        isLoading.set(true)
        setTimeout(() => isLoading.set(false),1000*5)
    }
</script>

<div class="flex flex-col c gap-5 mb-16 sm:flex-row lg:mb-0">
    <div
        class="w-full col-span-2 text-sm py-2 flex items-center justify-between font-bold relatives sm:w-80"
    >
        <button
            on:click={minus_quantity}
            type="button"
            class="w-10 shadow-md rounded-full h-10 aspect-square leading-none text-black bg-white text-6xl transition hover:opacity-75"
        >
            &minus;
        </button>
        <input
            type="number"
            id="Quantity"
            value={quantity}
            min="1"
            required
            placeholder="Quantity"
            class="shadow-md select-none focus:border-white [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none h-10 w-full mx-2 bg-white/10 rounded border-gray-200 text-center sm:text-sm"
        />
        <button
            on:click={add_quantity}
            type="button"
            class="w-10 shadow-md rounded-full h-10 aspect-square leading-none text-black bg-white text-6xl transition hover:opacity-75"
        >
            &plus;
        </button>
    </div>
    <button
        class="w-full bg-white text-black h-auto py-2 flex text-xl text-center items-center justify-center -mb-1 rounded-lg font-extrabold shadow-md hover:brightness-125 transition select-none"
        id="add-cart"
        ems-center
        on:click={add_to_Cart}
        justify-center
    >
        Add to cart
    </button>
</div>
