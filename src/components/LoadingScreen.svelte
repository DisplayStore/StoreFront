<script>
    import { isLoading } from "../store";
</script>

{#if $isLoading}
    <section
        id="loading"
        class="grid place-items-center z-50 bg-black/50 w-screen h-screen overflow-hidden fixed left-0 top-0"
    >
        <div class="">
            <img
                src="/logo.svg"
                alt="loading"
                class="invert mx-auto w-20 h-auto animate-spin bg-white/90 rounded-full p-2"
            />
            <p
                class="text-xl text-center bg-black/90 px-3 mt-4 font-semibold tracking-wider text-white"
            >
                Loading...
            </p>
        </div>
    </section>
{/if}
