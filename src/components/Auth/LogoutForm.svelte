<script>
    // imports
    import medusa from "../../medusa";

    // logout logic
    async function logout_user() {
       await medusa.auth.deleteSession().then(() => {
            alert("done");
        }).catch(console.error);
    }
</script>

<section id="logout_screen" class="h-screen grid place-items-center">
    <div class="text-center">
        <h1 class="text-6xl md:text-8xl mb-4 font-extrabold">Logout?</h1>
        <button
            on:click={logout_user}
            class="inline-block mx-auto shrink-0 rounded-md border border-white bg-white/90 px-12 py-3 text-xl font-extrabold text-black transition hover:bg-transparent hover:text-white focus:outline-none focus:ring"
        >
            Yes, I want to
        </button>
    </div>
</section>
