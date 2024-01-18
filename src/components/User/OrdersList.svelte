<script>
    import { isLoading } from "../../store";

    function test() {
        console.log("here");
        isLoading.set(!$isLoading);
    }
</script>

<h1>Hello {$isLoading}</h1>

<button class="text-3xl bg-zinc-700" on:click={test}>Yo</button>
