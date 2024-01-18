<script>
import { isLoading } from "../store";
</script>

<nav class="flex w-full p-4 overflow-hidden fixed z-50">
    <div
        class="w-full justify-between py-5 px-3.5 md:px-7 items-center align-center mx-auto flex rounded-3xl backdrop-blur-xl border-2 border-zinc-600/60 bg-[#0f0f0f]/30"
    >
        <div>
            <a
                href="/"
                aria-label="home"
                class="flex items-center justify-center text-center align-center text-xl tracking-wider font-extrabold"
            >
                <img alt="Logo" src="/logo.svg" class="invert w-12 h-fit aspect-square" />
                <span class="-mb-1 tracking-tighter" style="font-weight: 900;">
                    Gyro Mugs! {$isLoading}
                </span>
            </a>
        </div>

        <div class="flex gap-3">
            <div>
                <a href="/auth/register" aria-label="cart">
                    <img alt="User" src="/favicon.svg" class="w-14 h-fit aspect-square" />
                </a>
            </div>
            <div>
                <a href="/cart" aria-label="cart">
                    <img alt="Cart" src="/cart.svg" class="invert w-14 h-fit aspect-square" />
                </a>
            </div>
        </div>
    </div>
</nav>
